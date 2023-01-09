// source: nina-api-grpc/compro_category.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.nina.Category', null, global);
goog.exportSymbol('proto.nina.GetCategoryResponse', null, global);
goog.exportSymbol('proto.nina.PostCategoryRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nina.Category = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nina.Category, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nina.Category.displayName = 'proto.nina.Category';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nina.GetCategoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nina.GetCategoryResponse.repeatedFields_, null);
};
goog.inherits(proto.nina.GetCategoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nina.GetCategoryResponse.displayName = 'proto.nina.GetCategoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nina.PostCategoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nina.PostCategoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nina.PostCategoryRequest.displayName = 'proto.nina.PostCategoryRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nina.Category.prototype.toObject = function(opt_includeInstance) {
  return proto.nina.Category.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nina.Category} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nina.Category.toObject = function(includeInstance, msg) {
  var f, obj = {
    categorydisplayname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    categorysystemname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    categoryorder: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nina.Category}
 */
proto.nina.Category.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nina.Category;
  return proto.nina.Category.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nina.Category} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nina.Category}
 */
proto.nina.Category.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategorydisplayname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategorysystemname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCategoryorder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nina.Category.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nina.Category.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nina.Category} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nina.Category.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategorydisplayname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategorysystemname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategoryorder();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string categoryDisplayName = 1;
 * @return {string}
 */
proto.nina.Category.prototype.getCategorydisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nina.Category} returns this
 */
proto.nina.Category.prototype.setCategorydisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string categorySystemName = 2;
 * @return {string}
 */
proto.nina.Category.prototype.getCategorysystemname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.nina.Category} returns this
 */
proto.nina.Category.prototype.setCategorysystemname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 categoryOrder = 3;
 * @return {number}
 */
proto.nina.Category.prototype.getCategoryorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.nina.Category} returns this
 */
proto.nina.Category.prototype.setCategoryorder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nina.GetCategoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nina.GetCategoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nina.GetCategoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nina.GetCategoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nina.GetCategoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    categorylistList: jspb.Message.toObjectList(msg.getCategorylistList(),
    proto.nina.Category.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nina.GetCategoryResponse}
 */
proto.nina.GetCategoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nina.GetCategoryResponse;
  return proto.nina.GetCategoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nina.GetCategoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nina.GetCategoryResponse}
 */
proto.nina.GetCategoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nina.Category;
      reader.readMessage(value,proto.nina.Category.deserializeBinaryFromReader);
      msg.addCategorylist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nina.GetCategoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nina.GetCategoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nina.GetCategoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nina.GetCategoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategorylistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nina.Category.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Category categoryList = 1;
 * @return {!Array<!proto.nina.Category>}
 */
proto.nina.GetCategoryResponse.prototype.getCategorylistList = function() {
  return /** @type{!Array<!proto.nina.Category>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nina.Category, 1));
};


/**
 * @param {!Array<!proto.nina.Category>} value
 * @return {!proto.nina.GetCategoryResponse} returns this
*/
proto.nina.GetCategoryResponse.prototype.setCategorylistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nina.Category=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nina.Category}
 */
proto.nina.GetCategoryResponse.prototype.addCategorylist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nina.Category, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nina.GetCategoryResponse} returns this
 */
proto.nina.GetCategoryResponse.prototype.clearCategorylistList = function() {
  return this.setCategorylistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nina.PostCategoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nina.PostCategoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nina.PostCategoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nina.PostCategoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    categoryid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: (f = msg.getCategory()) && proto.nina.Category.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nina.PostCategoryRequest}
 */
proto.nina.PostCategoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nina.PostCategoryRequest;
  return proto.nina.PostCategoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nina.PostCategoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nina.PostCategoryRequest}
 */
proto.nina.PostCategoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryid(value);
      break;
    case 2:
      var value = new proto.nina.Category;
      reader.readMessage(value,proto.nina.Category.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nina.PostCategoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nina.PostCategoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nina.PostCategoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nina.PostCategoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategoryid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nina.Category.serializeBinaryToWriter
    );
  }
};


/**
 * optional string categoryId = 1;
 * @return {string}
 */
proto.nina.PostCategoryRequest.prototype.getCategoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nina.PostCategoryRequest} returns this
 */
proto.nina.PostCategoryRequest.prototype.setCategoryid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Category category = 2;
 * @return {?proto.nina.Category}
 */
proto.nina.PostCategoryRequest.prototype.getCategory = function() {
  return /** @type{?proto.nina.Category} */ (
    jspb.Message.getWrapperField(this, proto.nina.Category, 2));
};


/**
 * @param {?proto.nina.Category|undefined} value
 * @return {!proto.nina.PostCategoryRequest} returns this
*/
proto.nina.PostCategoryRequest.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nina.PostCategoryRequest} returns this
 */
proto.nina.PostCategoryRequest.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nina.PostCategoryRequest.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.nina);