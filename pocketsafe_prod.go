//go:build !ps_dev

//go:generate bunx --bun vite build

package main

import "embed"

//go:embed all:build
var buildFS embed.FS

const enableMigrations = false
