package main

import (
	"embed"
	"log/slog"
	"net/http"
	"os"
	"strconv"

	"deedles.dev/pocketsafe/comp"
	_ "deedles.dev/pocketsafe/migrations"
	"github.com/a-h/templ"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
)

//go:generate bun run build
//go:generate go run github.com/a-h/templ/cmd/templ generate

//go:embed all:assets
var assets embed.FS

func hxListPage(ctx echo.Context) error {
	page, err := strconv.ParseInt(ctx.QueryParam("page"), 10, 0)
	if err != nil {
		return err
	}

	return ctx.Render(http.StatusOK, "List", comp.ListParams{
		Page:  int(page),
		Pages: 10,
	})
}

func main() {
	pb := pocketbase.New()
	migratecmd.MustRegister(pb, pb.RootCmd, migratecmd.Config{
		Automigrate: enableMigrations,
	})

	pb.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.Renderer = comp.Renderer()

		e.Router.GET("/assets/*", apis.StaticDirectoryHandler(
			echo.MustSubFS(assets, "assets"),
			true,
		))

		e.Router.GET("/hx/page", hxListPage)
		e.Router.GET("/", echo.WrapHandler(templ.Handler(comp.Main())))

		return nil
	})

	err := pb.Start()
	if err != nil {
		slog.Error("start PocketBase", "err", err)
		os.Exit(1)
	}
}
