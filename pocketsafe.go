package main

import (
	"log/slog"
	"os"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	pb := pocketbase.New()
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
