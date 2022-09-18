// package: nina
// file: github_contribution.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Contribution extends jspb.Message {
  getContributedat(): string;
  setContributedat(value: string): void;

  getOrganization(): string;
  setOrganization(value: string): void;

  getRepository(): string;
  setRepository(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contribution.AsObject;
  static toObject(includeInstance: boolean, msg: Contribution): Contribution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export class ContributionSummary extends jspb.Message {
  getDate(): string;
  setDate(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContributionSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ContributionSummary): ContributionSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContributionSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContributionSummary;
  static deserializeBinaryFromReader(message: ContributionSummary, reader: jspb.BinaryReader): ContributionSummary;
}

export namespace ContributionSummary {
  export type AsObject = {
    date: string,
    count: number,
  }
}

export class GetGithubContributionResponse extends jspb.Message {
  clearContributionsList(): void;
  getContributionsList(): Array<Contribution>;
  setContributionsList(value: Array<Contribution>): void;
  addContributions(value?: Contribution, index?: number): Contribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGithubContributionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGithubContributionResponse): GetGithubContributionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  clearContributionsList(): void;
  getContributionsList(): Array<Contribution>;
  setContributionsList(value: Array<Contribution>): void;
  addContributions(value?: Contribution, index?: number): Contribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostGithubContributionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostGithubContributionRequest): PostGithubContributionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setStartat(value: string): void;

  getEndat(): string;
  setEndat(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGithubContributionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGithubContributionRequest): DeleteGithubContributionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export class GetGithubContributionSummaryRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGithubContributionSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGithubContributionSummaryRequest): GetGithubContributionSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGithubContributionSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGithubContributionSummaryRequest;
  static deserializeBinaryFromReader(message: GetGithubContributionSummaryRequest, reader: jspb.BinaryReader): GetGithubContributionSummaryRequest;
}

export namespace GetGithubContributionSummaryRequest {
  export type AsObject = {
    user: string,
  }
}

export class GetGithubContributionSummaryResponse extends jspb.Message {
  clearPullrequestsummariesList(): void;
  getPullrequestsummariesList(): Array<ContributionSummary>;
  setPullrequestsummariesList(value: Array<ContributionSummary>): void;
  addPullrequestsummaries(value?: ContributionSummary, index?: number): ContributionSummary;

  clearCommentedsummariesList(): void;
  getCommentedsummariesList(): Array<ContributionSummary>;
  setCommentedsummariesList(value: Array<ContributionSummary>): void;
  addCommentedsummaries(value?: ContributionSummary, index?: number): ContributionSummary;

  clearApprovedsummariesList(): void;
  getApprovedsummariesList(): Array<ContributionSummary>;
  setApprovedsummariesList(value: Array<ContributionSummary>): void;
  addApprovedsummaries(value?: ContributionSummary, index?: number): ContributionSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGithubContributionSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGithubContributionSummaryResponse): GetGithubContributionSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGithubContributionSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGithubContributionSummaryResponse;
  static deserializeBinaryFromReader(message: GetGithubContributionSummaryResponse, reader: jspb.BinaryReader): GetGithubContributionSummaryResponse;
}

export namespace GetGithubContributionSummaryResponse {
  export type AsObject = {
    pullrequestsummariesList: Array<ContributionSummary.AsObject>,
    commentedsummariesList: Array<ContributionSummary.AsObject>,
    approvedsummariesList: Array<ContributionSummary.AsObject>,
  }
}

