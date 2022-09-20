/**
 * @fileoverview gRPC-Web generated client stub for nina
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as nina$api$grpc_health_pb from '../nina-api-grpc/health_pb';


export class HealthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/nina.HealthService/Get',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nina$api$grpc_health_pb.GetHealthResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nina$api$grpc_health_pb.GetHealthResponse.deserializeBinary
  );

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nina$api$grpc_health_pb.GetHealthResponse>;

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nina$api$grpc_health_pb.GetHealthResponse) => void): grpcWeb.ClientReadableStream<nina$api$grpc_health_pb.GetHealthResponse>;

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nina$api$grpc_health_pb.GetHealthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/nina.HealthService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/nina.HealthService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

}

