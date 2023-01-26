import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Category extends jspb.Message {
  getCategoryid(): string;
  setCategoryid(value: string): Category;

  getCategorydisplayname(): string;
  setCategorydisplayname(value: string): Category;

  getCategorysystemname(): string;
  setCategorysystemname(value: string): Category;

  getCategoryorder(): number;
  setCategoryorder(value: number): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    categoryid: string,
    categorydisplayname: string,
    categorysystemname: string,
    categoryorder: number,
  }
}

export class GetCategoryResponse extends jspb.Message {
  getCategorylistList(): Array<Category>;
  setCategorylistList(value: Array<Category>): GetCategoryResponse;
  clearCategorylistList(): GetCategoryResponse;
  addCategorylist(value?: Category, index?: number): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryResponse): GetCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: GetCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryResponse;
  static deserializeBinaryFromReader(message: GetCategoryResponse, reader: jspb.BinaryReader): GetCategoryResponse;
}

export namespace GetCategoryResponse {
  export type AsObject = {
    categorylistList: Array<Category.AsObject>,
  }
}

export class PostCategoryRequest extends jspb.Message {
  getCategoryid(): string;
  setCategoryid(value: string): PostCategoryRequest;

  getCategory(): Category | undefined;
  setCategory(value?: Category): PostCategoryRequest;
  hasCategory(): boolean;
  clearCategory(): PostCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostCategoryRequest): PostCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: PostCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostCategoryRequest;
  static deserializeBinaryFromReader(message: PostCategoryRequest, reader: jspb.BinaryReader): PostCategoryRequest;
}

export namespace PostCategoryRequest {
  export type AsObject = {
    categoryid: string,
    category?: Category.AsObject,
  }
}

export class CategoryGetResponse extends jspb.Message {
  getCategorylistList(): Array<Category>;
  setCategorylistList(value: Array<Category>): CategoryGetResponse;
  clearCategorylistList(): CategoryGetResponse;
  addCategorylist(value?: Category, index?: number): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryGetResponse): CategoryGetResponse.AsObject;
  static serializeBinaryToWriter(message: CategoryGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryGetResponse;
  static deserializeBinaryFromReader(message: CategoryGetResponse, reader: jspb.BinaryReader): CategoryGetResponse;
}

export namespace CategoryGetResponse {
  export type AsObject = {
    categorylistList: Array<Category.AsObject>,
  }
}

export class CategoryPostRequest extends jspb.Message {
  getCategoryid(): string;
  setCategoryid(value: string): CategoryPostRequest;

  getCategory(): Category | undefined;
  setCategory(value?: Category): CategoryPostRequest;
  hasCategory(): boolean;
  clearCategory(): CategoryPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryPostRequest): CategoryPostRequest.AsObject;
  static serializeBinaryToWriter(message: CategoryPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryPostRequest;
  static deserializeBinaryFromReader(message: CategoryPostRequest, reader: jspb.BinaryReader): CategoryPostRequest;
}

export namespace CategoryPostRequest {
  export type AsObject = {
    categoryid: string,
    category?: Category.AsObject,
  }
}

export class Topic extends jspb.Message {
  getTopicid(): string;
  setTopicid(value: string): Topic;

  getTopicdisplayname(): string;
  setTopicdisplayname(value: string): Topic;

  getTopicorder(): number;
  setTopicorder(value: number): Topic;

  getProblemlistList(): Array<Problem>;
  setProblemlistList(value: Array<Problem>): Topic;
  clearProblemlistList(): Topic;
  addProblemlist(value?: Problem, index?: number): Problem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    topicid: string,
    topicdisplayname: string,
    topicorder: number,
    problemlistList: Array<Problem.AsObject>,
  }
}

export class TopicGetRequest extends jspb.Message {
  getCategoryid(): string;
  setCategoryid(value: string): TopicGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TopicGetRequest): TopicGetRequest.AsObject;
  static serializeBinaryToWriter(message: TopicGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicGetRequest;
  static deserializeBinaryFromReader(message: TopicGetRequest, reader: jspb.BinaryReader): TopicGetRequest;
}

export namespace TopicGetRequest {
  export type AsObject = {
    categoryid: string,
  }
}

export class TopicGetResponse extends jspb.Message {
  getCategory(): Category | undefined;
  setCategory(value?: Category): TopicGetResponse;
  hasCategory(): boolean;
  clearCategory(): TopicGetResponse;

  getTopiclistList(): Array<Topic>;
  setTopiclistList(value: Array<Topic>): TopicGetResponse;
  clearTopiclistList(): TopicGetResponse;
  addTopiclist(value?: Topic, index?: number): Topic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TopicGetResponse): TopicGetResponse.AsObject;
  static serializeBinaryToWriter(message: TopicGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicGetResponse;
  static deserializeBinaryFromReader(message: TopicGetResponse, reader: jspb.BinaryReader): TopicGetResponse;
}

export namespace TopicGetResponse {
  export type AsObject = {
    category?: Category.AsObject,
    topiclistList: Array<Topic.AsObject>,
  }
}

export class Problem extends jspb.Message {
  getProblemid(): string;
  setProblemid(value: string): Problem;

  getUrl(): string;
  setUrl(value: string): Problem;

  getProblemdisplayname(): string;
  setProblemdisplayname(value: string): Problem;

  getEstimation(): number;
  setEstimation(value: number): Problem;

  getTaglistList(): Array<Tag>;
  setTaglistList(value: Array<Tag>): Problem;
  clearTaglistList(): Problem;
  addTaglist(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Problem.AsObject;
  static toObject(includeInstance: boolean, msg: Problem): Problem.AsObject;
  static serializeBinaryToWriter(message: Problem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Problem;
  static deserializeBinaryFromReader(message: Problem, reader: jspb.BinaryReader): Problem;
}

export namespace Problem {
  export type AsObject = {
    problemid: string,
    url: string,
    problemdisplayname: string,
    estimation: number,
    taglistList: Array<Tag.AsObject>,
  }
}

export class Tag extends jspb.Message {
  getCategoryid(): string;
  setCategoryid(value: string): Tag;

  getTopicdisplayname(): string;
  setTopicdisplayname(value: string): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    categoryid: string,
    topicdisplayname: string,
  }
}

