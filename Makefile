install:
	npm install

run-server:
	npm run babel-node -- 'server.js'

run-client:
	npm run start

build:
	rm -rf docs
	npm run build

test:
	npm run test-server -- './__tests__/'

test-client:
	npm run test

linter:
	npm run eslint server.js src/

testrpc:
	npm run	testrpc

compile-truffle:
	npm run truffle compile

migrate:
	npm run truffle migrate

start:
	make build
	make compile-truffle
	make migrate
	make run-server

.PHONY: build
