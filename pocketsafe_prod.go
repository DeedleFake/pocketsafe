//go:build !ps_dev

package main

import "embed"

//go:embed all:assets
var assets embed.FS

const enableMigrations = false
