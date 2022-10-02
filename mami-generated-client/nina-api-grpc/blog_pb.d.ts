import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Blog extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): Blog;

  getDate(): string;
  setDate(value: string): Blog;

  getType(): string;
  setType(value: string): Blog;

  getTitle(): string;
  setTitle(value: string): Blog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blog.AsObject;
  static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
  static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blog;
  static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
  export type AsObject = {
    url: string,
    date: string,
    type: string,
    title: string,
  }
}

export class GetBlogResponse extends jspb.Message {
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): GetBlogResponse;
  hasBlog(): boolean;
  clearBlog(): GetBlogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlogResponse): GetBlogResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlogResponse;
  static deserializeBinaryFromReader(message: GetBlogResponse, reader: jspb.BinaryReader): GetBlogResponse;
}

export namespace GetBlogResponse {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

