.phony: serve

install:
	docker run --rm --name "saude-app_builder_1" -e HIGHCHARTS_USE_STYLED=NO -e HIGHCHARTS_VERSION=latest -e ACCEPT_HIGHCHARTS_LICENSE=YES -e http_proxy=$(http_proxy) -e https_proxy=$(http_proxy) -v $(pwd)/npm_config:/root/.npm -v $(pwd):/root/app ddtq/saude-app_builder:0.1 bash -c "npm i --verbose"

serve: install liveserve

liveserve:
	PWD=pwd
	docker run --rm --name "saude-app_builder_1" -e HIGHCHARTS_USE_STYLED=NO -e HIGHCHARTS_VERSION=latest -e ACCEPT_HIGHCHARTS_LICENSE=YES -e http_proxy=$(http_proxy) -e https_proxy=$(http_proxy) -d -v $(PWD)/npm_config:/root/.npm -v $(PWD):/root/app -p "8100:8100" ddtq/saude-app_builder:0.1 bash -c "ng run app:serve --host=0.0.0.0 --port=8100" && sleep 15
	echo "Pronto"


down: 
	docker container stop saude-app_builder_1
