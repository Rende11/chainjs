install:
	npm install

run-server:
	npm run babel-node -- 'server.js'

run-client:
	npm run start

build:
	npm run build

test:
	npm run test-server -- './__tests__/'

test-client:
	npm run test

linter:
	npm run eslint server.js src/

.PHONY: build
