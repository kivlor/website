all: help

.PHONY: help
help:
	@echo "start: start deno server"

.PHONY: start
start:
	podman run -it -p 8000:8000 -v=$(PWD):/app:z -w=/app denoland/deno task start
