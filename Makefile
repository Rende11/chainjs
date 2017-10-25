install:
	npm install

run-server:
	npm run babel-node -- 'server.js'

run-client:
	npm run start

build:
	npm run build

test-client:
	npm run test

test-contracts:
	truffle test

linter:
	npm run eslint server.js src/

testrpc:
	npm run	testrpc

compile:
	truffle compile

migrate:
	truffle migrate

start:
	make build
	make compile
	make migrate
	make run-server

.PHONY: build
