package comp

import (
	"encoding/json"
	"errors"
	"io"
	"strings"

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

type vals map[string]any

func (v vals) String() string {
	var buf strings.Builder
	json.NewEncoder(&buf).Encode(v)
	return buf.String()
}
