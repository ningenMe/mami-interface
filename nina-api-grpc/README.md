proto-gen
```shell
protoc \
--go_out=./mami-generated-server --go_opt=paths=source_relative \
--go-grpc_out=./mami-generated-server --go-grpc_opt=paths=source_relative \
*.proto
```

```shell
TS_GEN_PATH="./node_modules/.bin/protoc-gen-ts"
TS_OUT_PATH="./mami-generated-client"
protoc \
--plugin="protoc-gen-ts=${TS_GEN_PATH}" \
--js_out="import_style=commonjs,binary:${TS_OUT_PATH}" \
--ts_out="${TS_OUT_PATH}" \
*.proto
```
