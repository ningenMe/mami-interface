# mami-interface

```shell
TS_GEN_PATH="./node_modules/.bin/protoc-gen-ts"
TS_OUT_PATH="./mami-generated-client"
protoc \
--plugin="protoc-gen-ts=${TS_GEN_PATH}" \
--js_out="import_style=commonjs,binary:${TS_OUT_PATH}" \
--ts_out="${TS_OUT_PATH}" \
./nina-api-grpc/*.proto
```
