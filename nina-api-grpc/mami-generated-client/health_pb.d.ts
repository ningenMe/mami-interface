// package: nina
// file: health.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetHealthResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHealthResponse): GetHealthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHealthResponse;
  static deserializeBinaryFromReader(message: GetHealthResponse, reader: jspb.BinaryReader): GetHealthResponse;
}

export namespace GetHealthResponse {
  export type AsObject = {
    message: string,
  }
}

