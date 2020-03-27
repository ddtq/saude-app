.phony: serve

dockerbuild:
	pwd=$(`pwd`) && \
	cd .docker/builder && \
	docker image build --build-arg http_proxy=$(http_proxy) \
	--build-arg https_proxy=$(https_proxy) \
	-t ddtq/saude-app_builder:0.1 . && cd $(pwd)

build-android:
	PWD=pwd
	docker run --rm \
			   -e HIGHCHARTS_USE_STYLED=NO \
			   -e HIGHCHARTS_VERSION=latest \
			   -e ACCEPT_HIGHCHARTS_LICENSE=YES \
			   -e http_proxy=$(http_proxy) \
			   -e https_proxy=$(http_proxy) \
			   -v $(PWD)/npm_config:/root/.npm \
			   -v $(PWD):/root/app \
			   ddtq/saude-app_builder:0.1 \
			   bash -c "npm config set proxy $(https_proxy) && npm config set https-proxy $(https_proxy) && npm i --verbose && rm -rf platforms && cordova platform add android --save && ionic cordova build android"

build-browser:
	PWD=pwd
	docker run --rm \
			   -e HIGHCHARTS_USE_STYLED=NO \
			   -e HIGHCHARTS_VERSION=latest \
			   -e ACCEPT_HIGHCHARTS_LICENSE=YES \
			   -e http_proxy=$(http_proxy) \
			   -e https_proxy=$(http_proxy) \
			   -v $(PWD)/npm_config:/root/.npm \
			   -v $(PWD):/root/app \
			   ddtq/saude-app_builder:0.1 \
			   bash -c "npm config set proxy $(https_proxy) && npm config set https-proxy $(https_proxy) && npm i --verbose && rm -rf platforms && cordova platform add browser --save && ionic cordova build browser"

install:
	PWD=pwd
	docker run --rm --name "saude-app_builder_1" \
			   -e HIGHCHARTS_USE_STYLED=NO \
			   -e HIGHCHARTS_VERSION=latest \
			   -e ACCEPT_HIGHCHARTS_LICENSE=YES \
			   -e http_proxy=$(http_proxy) \
			   -e https_proxy=$(http_proxy) \
			   -v $(PWD)/npm_config:/root/.npm \
			   -v $(PWD):/root/app \
			   ddtq/saude-app_builder:0.1 \
			   bash -c "npm config set proxy $(https_proxy) && npm config set https-proxy $(https_proxy) && npm i --verbose"

serve: install liveserve

liveserve:
	PWD=pwd
	docker run --rm --name "saude-app_builder_1" -e HIGHCHARTS_USE_STYLED=NO -e HIGHCHARTS_VERSION=latest -e ACCEPT_HIGHCHARTS_LICENSE=YES -e http_proxy=$(http_proxy) -e https_proxy=$(http_proxy) -d -v $(PWD)/npm_config:/root/.npm -v $(PWD):/root/app -p "8100:8100" ddtq/saude-app_builder:0.1 bash -c "ng run app:serve --host=0.0.0.0 --port=8100" && sleep 15
	echo "Pronto"


down: 
	docker container stop saude-app_builder_1
