package comp

import (
	"errors"
	"io"

	"github.com/a-h/templ"
	"github.com/labstack/echo/v5"
)

type renderer struct{}

func (r renderer) find(name string, data any) (templ.Component, bool) {
	switch name {
	case "List":
		return List(data.(ListParams)), true
	default:
		return nil, false
	}
}

func (r renderer) Render(w io.Writer, name string, data any, ctx echo.Context) error {
	tmpl, ok := r.find(name, data)
	if !ok {
		return errors.New("template not found")
	}

	return tmpl.Render(ctx.Request().Context(), w)
}

func Renderer() echo.Renderer {
	return renderer{}
}
