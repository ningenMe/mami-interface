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
import * as nina$api$grpc_compro_category_pb from '../nina-api-grpc/compro_category_pb';


export class ComproCategoryServiceClient {
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
    '/nina.ComproCategoryService/Get',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nina$api$grpc_compro_category_pb.GetCategoryResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nina$api$grpc_compro_category_pb.GetCategoryResponse.deserializeBinary
  );

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nina$api$grpc_compro_category_pb.GetCategoryResponse>;

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nina$api$grpc_compro_category_pb.GetCategoryResponse) => void): grpcWeb.ClientReadableStream<nina$api$grpc_compro_category_pb.GetCategoryResponse>;

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nina$api$grpc_compro_category_pb.GetCategoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/nina.ComproCategoryService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/nina.ComproCategoryService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorPost = new grpcWeb.MethodDescriptor(
    '/nina.ComproCategoryService/Post',
    grpcWeb.MethodType.UNARY,
    nina$api$grpc_compro_category_pb.PostCategoryRequest,
    google_protobuf_empty_pb.Empty,
    (request: nina$api$grpc_compro_category_pb.PostCategoryRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  post(
    request: nina$api$grpc_compro_category_pb.PostCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  post(
    request: nina$api$grpc_compro_category_pb.PostCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  post(
    request: nina$api$grpc_compro_category_pb.PostCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/nina.ComproCategoryService/Post',
        request,
        metadata || {},
        this.methodDescriptorPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/nina.ComproCategoryService/Post',
    request,
    metadata || {},
    this.methodDescriptorPost);
  }

}

