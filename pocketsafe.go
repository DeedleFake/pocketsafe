package main

import (
	"errors"
	"fmt"
	"log/slog"
	"os"

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

func hxPage(ctx echo.Context) error {
	fmt.Printf("%+v\n", ctx.QueryParams())
	return errors.New("do nothing")
}

func main() {
	pb := pocketbase.New()
	migratecmd.MustRegister(pb, pb.RootCmd, migratecmd.Config{
		Automigrate: enableMigrations,
	})

	pb.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/assets/*", apis.StaticDirectoryHandler(
			echo.MustSubFS(assets, "assets"),
			true,
		))

		e.Router.GET("/hx/page", hxPage)
		e.Router.GET("/", echo.WrapHandler(templ.Handler(comp.Main())))

		return nil
	})

	err := pb.Start()
	if err != nil {
		slog.Error("start PocketBase", "err", err)
		os.Exit(1)
	}
}
