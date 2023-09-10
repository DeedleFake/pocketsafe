//go:build !ps_dev

//go:generate bun run build

package main

import "embed"

//go:embed all:build
var buildFS embed.FS

const enableMigrations = false
