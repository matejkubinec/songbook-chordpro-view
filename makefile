install:
	yarn install

build:
	yarn build

ci:
	yarn install --frozen-lockfile 

publish: ci build
	yarn publish
