import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Contribution extends jspb.Message {
  getContributedat(): string;
  setContributedat(value: string): Contribution;

  getOrganization(): string;
  setOrganization(value: string): Contribution;

  getRepository(): string;
  setRepository(value: string): Contribution;

  getUser(): string;
  setUser(value: string): Contribution;

  getStatus(): string;
  setStatus(value: string): Contribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contribution.AsObject;
  static toObject(includeInstance: boolean, msg: Contribution): Contribution.AsObject;
  static serializeBinaryToWriter(message: Contribution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contribution;
  static deserializeBinaryFromReader(message: Contribution, reader: jspb.BinaryReader): Contribution;
}

export namespace Contribution {
  export type AsObject = {
    contributedat: string,
    organization: string,
    repository: string,
    user: string,
    status: string,
  }
}

export class GetGithubContributionResponse extends jspb.Message {
  getContributionsList(): Array<Contribution>;
  setContributionsList(value: Array<Contribution>): GetGithubContributionResponse;
  clearContributionsList(): GetGithubContributionResponse;
  addContributions(value?: Contribution, index?: number): Contribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGithubContributionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGithubContributionResponse): GetGithubContributionResponse.AsObject;
  static serializeBinaryToWriter(message: GetGithubContributionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGithubContributionResponse;
  static deserializeBinaryFromReader(message: GetGithubContributionResponse, reader: jspb.BinaryReader): GetGithubContributionResponse;
}

export namespace GetGithubContributionResponse {
  export type AsObject = {
    contributionsList: Array<Contribution.AsObject>,
  }
}

export class PostGithubContributionRequest extends jspb.Message {
  getContributionsList(): Array<Contribution>;
  setContributionsList(value: Array<Contribution>): PostGithubContributionRequest;
  clearContributionsList(): PostGithubContributionRequest;
  addContributions(value?: Contribution, index?: number): Contribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostGithubContributionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostGithubContributionRequest): PostGithubContributionRequest.AsObject;
  static serializeBinaryToWriter(message: PostGithubContributionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostGithubContributionRequest;
  static deserializeBinaryFromReader(message: PostGithubContributionRequest, reader: jspb.BinaryReader): PostGithubContributionRequest;
}

export namespace PostGithubContributionRequest {
  export type AsObject = {
    contributionsList: Array<Contribution.AsObject>,
  }
}

export class DeleteGithubContributionRequest extends jspb.Message {
  getStartat(): string;
  setStartat(value: string): DeleteGithubContributionRequest;

  getEndat(): string;
  setEndat(value: string): DeleteGithubContributionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGithubContributionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGithubContributionRequest): DeleteGithubContributionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGithubContributionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGithubContributionRequest;
  static deserializeBinaryFromReader(message: DeleteGithubContributionRequest, reader: jspb.BinaryReader): DeleteGithubContributionRequest;
}

export namespace DeleteGithubContributionRequest {
  export type AsObject = {
    startat: string,
    endat: string,
  }
}

export class ContributionSum extends jspb.Message {
  getDate(): string;
  setDate(value: string): ContributionSum;

  getSum(): number;
  setSum(value: number): ContributionSum;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContributionSum.AsObject;
  static toObject(includeInstance: boolean, msg: ContributionSum): ContributionSum.AsObject;
  static serializeBinaryToWriter(message: ContributionSum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContributionSum;
  static deserializeBinaryFromReader(message: ContributionSum, reader: jspb.BinaryReader): ContributionSum;
}

export namespace ContributionSum {
  export type AsObject = {
    date: string,
    sum: number,
  }
}

export class ContributionStatistics extends jspb.Message {
  getSum(): number;
  setSum(value: number): ContributionStatistics;

  getContributionsumlistList(): Array<ContributionSum>;
  setContributionsumlistList(value: Array<ContributionSum>): ContributionStatistics;
  clearContributionsumlistList(): ContributionStatistics;
  addContributionsumlist(value?: ContributionSum, index?: number): ContributionSum;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContributionStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: ContributionStatistics): ContributionStatistics.AsObject;
  static serializeBinaryToWriter(message: ContributionStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContributionStatistics;
  static deserializeBinaryFromReader(message: ContributionStatistics, reader: jspb.BinaryReader): ContributionStatistics;
}

export namespace ContributionStatistics {
  export type AsObject = {
    sum: number,
    contributionsumlistList: Array<ContributionSum.AsObject>,
  }
}

export class GetStatisticsRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): GetStatisticsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatisticsRequest): GetStatisticsRequest.AsObject;
  static serializeBinaryToWriter(message: GetStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatisticsRequest;
  static deserializeBinaryFromReader(message: GetStatisticsRequest, reader: jspb.BinaryReader): GetStatisticsRequest;
}

export namespace GetStatisticsRequest {
  export type AsObject = {
    user: string,
  }
}

export class GetStatisticsResponse extends jspb.Message {
  getCreatedpullrequeststatistics(): ContributionStatistics | undefined;
  setCreatedpullrequeststatistics(value?: ContributionStatistics): GetStatisticsResponse;
  hasCreatedpullrequeststatistics(): boolean;
  clearCreatedpullrequeststatistics(): GetStatisticsResponse;

  getCommentedstatistics(): ContributionStatistics | undefined;
  setCommentedstatistics(value?: ContributionStatistics): GetStatisticsResponse;
  hasCommentedstatistics(): boolean;
  clearCommentedstatistics(): GetStatisticsResponse;

  getApprovedstatistics(): ContributionStatistics | undefined;
  setApprovedstatistics(value?: ContributionStatistics): GetStatisticsResponse;
  hasApprovedstatistics(): boolean;
  clearApprovedstatistics(): GetStatisticsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatisticsResponse): GetStatisticsResponse.AsObject;
  static serializeBinaryToWriter(message: GetStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatisticsResponse;
  static deserializeBinaryFromReader(message: GetStatisticsResponse, reader: jspb.BinaryReader): GetStatisticsResponse;
}

export namespace GetStatisticsResponse {
  export type AsObject = {
    createdpullrequeststatistics?: ContributionStatistics.AsObject,
    commentedstatistics?: ContributionStatistics.AsObject,
    approvedstatistics?: ContributionStatistics.AsObject,
  }
}

