//go:build ps_dev

package main

import (
	"os"
)

var buildFS = os.DirFS(".")

const enableMigrations = true
