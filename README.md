# mami-interface

```shell
protoc \
--go_out=./mami-generated-server --go_opt=paths=source_relative \
--go-grpc_out=./mami-generated-server --go-grpc_opt=paths=source_relative \
./nina-api-grpc/*.proto
```

```shell
TS_OUT_PATH="./mami-generated-client"
protoc \
--js_out="import_style=commonjs,binary:${TS_OUT_PATH}" \
--grpc-web_out="import_style=typescript,mode=grpcwebtext:${TS_OUT_PATH}" \
./nina-api-grpc/*.proto
```
