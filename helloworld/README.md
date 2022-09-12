proto-gen
```shell
protoc \
--go_out=. --go_opt=paths=source_relative \
--go-grpc_out=. --go-grpc_opt=paths=source_relative \
helloworld/helloworld.proto
```

grpcurl
```shell
grpcurl -plaintext localhost:50051 list
grpcurl -plaintext localhost:50051 list helloworld.Greeter
grpcurl -plaintext localhost:50051 helloworld.Greeter.SayHello
```