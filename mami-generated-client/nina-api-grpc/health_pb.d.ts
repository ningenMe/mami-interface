import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class GetHealthResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): GetHealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHealthResponse): GetHealthResponse.AsObject;
  static serializeBinaryToWriter(message: GetHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHealthResponse;
  static deserializeBinaryFromReader(message: GetHealthResponse, reader: jspb.BinaryReader): GetHealthResponse;
}

export namespace GetHealthResponse {
  export type AsObject = {
    message: string,
  }
}

