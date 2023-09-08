//go:build ps_dev

package main

import (
	"os"

	"github.com/labstack/echo/v5"
)

var buildFS = echo.MustSubFS(os.DirFS("."), "build")
