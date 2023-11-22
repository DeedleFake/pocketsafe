package main

import (
	"log/slog"
	"os"

	_ "deedles.dev/pocketsafe/migrations"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
)

//go:generate go run github.com/a-h/templ/cmd/templ generate

func main() {
	pb := pocketbase.New()
	migratecmd.MustRegister(pb, pb.RootCmd, migratecmd.Config{
		Automigrate: enableMigrations,
	})

	pb.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.StaticDirectoryHandler(
			echo.MustSubFS(buildFS, "build"),
			true,
		))
		return nil
	})

	err := pb.Start()
	if err != nil {
		slog.Error("start PocketBase", "err", err)
		os.Exit(1)
	}
}
