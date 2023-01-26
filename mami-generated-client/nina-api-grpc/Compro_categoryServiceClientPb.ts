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

  methodDescriptorCategoryGet = new grpcWeb.MethodDescriptor(
    '/nina.ComproCategoryService/CategoryGet',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nina$api$grpc_compro_category_pb.CategoryGetResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nina$api$grpc_compro_category_pb.CategoryGetResponse.deserializeBinary
  );

  categoryGet(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nina$api$grpc_compro_category_pb.CategoryGetResponse>;

  categoryGet(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nina$api$grpc_compro_category_pb.CategoryGetResponse) => void): grpcWeb.ClientReadableStream<nina$api$grpc_compro_category_pb.CategoryGetResponse>;

  categoryGet(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nina$api$grpc_compro_category_pb.CategoryGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/nina.ComproCategoryService/CategoryGet',
        request,
        metadata || {},
        this.methodDescriptorCategoryGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/nina.ComproCategoryService/CategoryGet',
    request,
    metadata || {},
    this.methodDescriptorCategoryGet);
  }

  methodDescriptorCategoryPost = new grpcWeb.MethodDescriptor(
    '/nina.ComproCategoryService/CategoryPost',
    grpcWeb.MethodType.UNARY,
    nina$api$grpc_compro_category_pb.CategoryPostRequest,
    google_protobuf_empty_pb.Empty,
    (request: nina$api$grpc_compro_category_pb.CategoryPostRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  categoryPost(
    request: nina$api$grpc_compro_category_pb.CategoryPostRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  categoryPost(
    request: nina$api$grpc_compro_category_pb.CategoryPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  categoryPost(
    request: nina$api$grpc_compro_category_pb.CategoryPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/nina.ComproCategoryService/CategoryPost',
        request,
        metadata || {},
        this.methodDescriptorCategoryPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/nina.ComproCategoryService/CategoryPost',
    request,
    metadata || {},
    this.methodDescriptorCategoryPost);
  }

  methodDescriptorTopicGet = new grpcWeb.MethodDescriptor(
    '/nina.ComproCategoryService/TopicGet',
    grpcWeb.MethodType.UNARY,
    nina$api$grpc_compro_category_pb.TopicGetRequest,
    nina$api$grpc_compro_category_pb.TopicGetResponse,
    (request: nina$api$grpc_compro_category_pb.TopicGetRequest) => {
      return request.serializeBinary();
    },
    nina$api$grpc_compro_category_pb.TopicGetResponse.deserializeBinary
  );

  topicGet(
    request: nina$api$grpc_compro_category_pb.TopicGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<nina$api$grpc_compro_category_pb.TopicGetResponse>;

  topicGet(
    request: nina$api$grpc_compro_category_pb.TopicGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nina$api$grpc_compro_category_pb.TopicGetResponse) => void): grpcWeb.ClientReadableStream<nina$api$grpc_compro_category_pb.TopicGetResponse>;

  topicGet(
    request: nina$api$grpc_compro_category_pb.TopicGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nina$api$grpc_compro_category_pb.TopicGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/nina.ComproCategoryService/TopicGet',
        request,
        metadata || {},
        this.methodDescriptorTopicGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/nina.ComproCategoryService/TopicGet',
    request,
    metadata || {},
    this.methodDescriptorTopicGet);
  }

}

