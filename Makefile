install:
	npm install

run-server:
	npm run babel-node -- 'server.js'

run-client:
	npm run start

build:
	npm run build

.PHONY: build
