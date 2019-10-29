.PHONY: all
all: build run
FORCE: ;

.PHONY: build run

build: dependencies build-api

build-api:
	[ -f ./api/.env ] || cp ./api/.env.example ./api/.env
	php ./api/artisan key:generate --ansi
	[ -f ./api/database/database.sqlite ] || touch ./api/database/database.sqlite
	php ./api/artisan migrate:fresh --seed

dependencies: dependencies-api dependencies-web

dependencies-api:
	composer self-update -d ./api
	composer validate -d ./api
	composer install -d ./api --no-suggest

dependencies-web:
	npm --prefix ./web install --no-package-lock

run:
	cd api; php artisan serve --port 8000 &
	cd web; npm run serve
