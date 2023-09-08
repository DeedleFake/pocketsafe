//go:build !ps_dev

//go:generate pnpm build

package main

import "embed"

//go:embed all:build
var buildFS embed.FS
