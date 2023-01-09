import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Category extends jspb.Message {
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

