c-up:
	docker-compose -f docker-compose.dev.yml up -d

c-down:
	docker-compose -f docker-compose.dev.yml down

c-downv:
	docker-compose -f docker-compose.dev.yml down -v