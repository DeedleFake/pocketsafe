//go:build ps_dev

package main

import (
	"os"
)

var assets = os.DirFS(".")

const enableMigrations = true
