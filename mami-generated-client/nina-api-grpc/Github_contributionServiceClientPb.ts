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
import * as nina$api$grpc_github_contribution_pb from '../nina-api-grpc/github_contribution_pb';


export class GithubContributionServiceClient {
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
    '/nina.GithubContributionService/Get',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nina$api$grpc_github_contribution_pb.GetGithubContributionResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nina$api$grpc_github_contribution_pb.GetGithubContributionResponse.deserializeBinary
  );

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nina$api$grpc_github_contribution_pb.GetGithubContributionResponse>;

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nina$api$grpc_github_contribution_pb.GetGithubContributionResponse) => void): grpcWeb.ClientReadableStream<nina$api$grpc_github_contribution_pb.GetGithubContributionResponse>;

  get(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nina$api$grpc_github_contribution_pb.GetGithubContributionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/nina.GithubContributionService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/nina.GithubContributionService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/nina.GithubContributionService/Delete',
    grpcWeb.MethodType.UNARY,
    nina$api$grpc_github_contribution_pb.DeleteGithubContributionRequest,
    google_protobuf_empty_pb.Empty,
    (request: nina$api$grpc_github_contribution_pb.DeleteGithubContributionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  delete(
    request: nina$api$grpc_github_contribution_pb.DeleteGithubContributionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  delete(
    request: nina$api$grpc_github_contribution_pb.DeleteGithubContributionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  delete(
    request: nina$api$grpc_github_contribution_pb.DeleteGithubContributionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/nina.GithubContributionService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/nina.GithubContributionService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

  methodDescriptorGetSummary = new grpcWeb.MethodDescriptor(
    '/nina.GithubContributionService/GetSummary',
    grpcWeb.MethodType.UNARY,
    nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryRequest,
    nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryResponse,
    (request: nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryRequest) => {
      return request.serializeBinary();
    },
    nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryResponse.deserializeBinary
  );

  getSummary(
    request: nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryRequest,
    metadata: grpcWeb.Metadata | null): Promise<nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryResponse>;

  getSummary(
    request: nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryResponse) => void): grpcWeb.ClientReadableStream<nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryResponse>;

  getSummary(
    request: nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nina$api$grpc_github_contribution_pb.GetGithubContributionSummaryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/nina.GithubContributionService/GetSummary',
        request,
        metadata || {},
        this.methodDescriptorGetSummary,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/nina.GithubContributionService/GetSummary',
    request,
    metadata || {},
    this.methodDescriptorGetSummary);
  }

}

