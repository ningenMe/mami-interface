// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.1
// source: nina-api-grpc/compro_category.proto

package nina_api_grpc

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Category struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CategoryId          string `protobuf:"bytes,1,opt,name=categoryId,proto3" json:"categoryId,omitempty"`
	CategoryDisplayName string `protobuf:"bytes,2,opt,name=categoryDisplayName,proto3" json:"categoryDisplayName,omitempty"`
	CategorySystemName  string `protobuf:"bytes,3,opt,name=categorySystemName,proto3" json:"categorySystemName,omitempty"`
	CategoryOrder       int32  `protobuf:"varint,4,opt,name=categoryOrder,proto3" json:"categoryOrder,omitempty"`
}

func (x *Category) Reset() {
	*x = Category{}
	if protoimpl.UnsafeEnabled {
		mi := &file_nina_api_grpc_compro_category_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Category) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Category) ProtoMessage() {}

func (x *Category) ProtoReflect() protoreflect.Message {
	mi := &file_nina_api_grpc_compro_category_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Category.ProtoReflect.Descriptor instead.
func (*Category) Descriptor() ([]byte, []int) {
	return file_nina_api_grpc_compro_category_proto_rawDescGZIP(), []int{0}
}

func (x *Category) GetCategoryId() string {
	if x != nil {
		return x.CategoryId
	}
	return ""
}

func (x *Category) GetCategoryDisplayName() string {
	if x != nil {
		return x.CategoryDisplayName
	}
	return ""
}

func (x *Category) GetCategorySystemName() string {
	if x != nil {
		return x.CategorySystemName
	}
	return ""
}

func (x *Category) GetCategoryOrder() int32 {
	if x != nil {
		return x.CategoryOrder
	}
	return 0
}

type CategoryGetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CategoryList []*Category `protobuf:"bytes,1,rep,name=categoryList,proto3" json:"categoryList,omitempty"`
}

func (x *CategoryGetResponse) Reset() {
	*x = CategoryGetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_nina_api_grpc_compro_category_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CategoryGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CategoryGetResponse) ProtoMessage() {}

func (x *CategoryGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_nina_api_grpc_compro_category_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CategoryGetResponse.ProtoReflect.Descriptor instead.
func (*CategoryGetResponse) Descriptor() ([]byte, []int) {
	return file_nina_api_grpc_compro_category_proto_rawDescGZIP(), []int{1}
}

func (x *CategoryGetResponse) GetCategoryList() []*Category {
	if x != nil {
		return x.CategoryList
	}
	return nil
}

type CategoryPostRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CategoryId string    `protobuf:"bytes,1,opt,name=categoryId,proto3" json:"categoryId,omitempty"`
	Category   *Category `protobuf:"bytes,2,opt,name=category,proto3" json:"category,omitempty"`
}

func (x *CategoryPostRequest) Reset() {
	*x = CategoryPostRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_nina_api_grpc_compro_category_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CategoryPostRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CategoryPostRequest) ProtoMessage() {}

func (x *CategoryPostRequest) ProtoReflect() protoreflect.Message {
	mi := &file_nina_api_grpc_compro_category_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CategoryPostRequest.ProtoReflect.Descriptor instead.
func (*CategoryPostRequest) Descriptor() ([]byte, []int) {
	return file_nina_api_grpc_compro_category_proto_rawDescGZIP(), []int{2}
}

func (x *CategoryPostRequest) GetCategoryId() string {
	if x != nil {
		return x.CategoryId
	}
	return ""
}

func (x *CategoryPostRequest) GetCategory() *Category {
	if x != nil {
		return x.Category
	}
	return nil
}

type Topic struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TopicId          string     `protobuf:"bytes,1,opt,name=topicId,proto3" json:"topicId,omitempty"`
	TopicDisplayName string     `protobuf:"bytes,2,opt,name=topicDisplayName,proto3" json:"topicDisplayName,omitempty"`
	TopicOrder       int32      `protobuf:"varint,3,opt,name=topicOrder,proto3" json:"topicOrder,omitempty"`
	ProblemList      []*Problem `protobuf:"bytes,4,rep,name=problemList,proto3" json:"problemList,omitempty"`
}

func (x *Topic) Reset() {
	*x = Topic{}
	if protoimpl.UnsafeEnabled {
		mi := &file_nina_api_grpc_compro_category_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Topic) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Topic) ProtoMessage() {}

func (x *Topic) ProtoReflect() protoreflect.Message {
	mi := &file_nina_api_grpc_compro_category_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Topic.ProtoReflect.Descriptor instead.
func (*Topic) Descriptor() ([]byte, []int) {
	return file_nina_api_grpc_compro_category_proto_rawDescGZIP(), []int{3}
}

func (x *Topic) GetTopicId() string {
	if x != nil {
		return x.TopicId
	}
	return ""
}

func (x *Topic) GetTopicDisplayName() string {
	if x != nil {
		return x.TopicDisplayName
	}
	return ""
}

func (x *Topic) GetTopicOrder() int32 {
	if x != nil {
		return x.TopicOrder
	}
	return 0
}

func (x *Topic) GetProblemList() []*Problem {
	if x != nil {
		return x.ProblemList
	}
	return nil
}

type TopicGetRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CategoryId string `protobuf:"bytes,1,opt,name=categoryId,proto3" json:"categoryId,omitempty"`
}

func (x *TopicGetRequest) Reset() {
	*x = TopicGetRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_nina_api_grpc_compro_category_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TopicGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TopicGetRequest) ProtoMessage() {}

func (x *TopicGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_nina_api_grpc_compro_category_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TopicGetRequest.ProtoReflect.Descriptor instead.
func (*TopicGetRequest) Descriptor() ([]byte, []int) {
	return file_nina_api_grpc_compro_category_proto_rawDescGZIP(), []int{4}
}

func (x *TopicGetRequest) GetCategoryId() string {
	if x != nil {
		return x.CategoryId
	}
	return ""
}

type TopicGetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Category  *Category `protobuf:"bytes,1,opt,name=category,proto3" json:"category,omitempty"`
	TopicList []*Topic  `protobuf:"bytes,2,rep,name=topicList,proto3" json:"topicList,omitempty"`
}

func (x *TopicGetResponse) Reset() {
	*x = TopicGetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_nina_api_grpc_compro_category_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TopicGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TopicGetResponse) ProtoMessage() {}

func (x *TopicGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_nina_api_grpc_compro_category_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TopicGetResponse.ProtoReflect.Descriptor instead.
func (*TopicGetResponse) Descriptor() ([]byte, []int) {
	return file_nina_api_grpc_compro_category_proto_rawDescGZIP(), []int{5}
}

func (x *TopicGetResponse) GetCategory() *Category {
	if x != nil {
		return x.Category
	}
	return nil
}

func (x *TopicGetResponse) GetTopicList() []*Topic {
	if x != nil {
		return x.TopicList
	}
	return nil
}

type Problem struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProblemId          string `protobuf:"bytes,1,opt,name=problemId,proto3" json:"problemId,omitempty"`
	Url                string `protobuf:"bytes,2,opt,name=url,proto3" json:"url,omitempty"`
	ProblemDisplayName string `protobuf:"bytes,3,opt,name=problemDisplayName,proto3" json:"problemDisplayName,omitempty"`
	Estimation         int32  `protobuf:"varint,4,opt,name=estimation,proto3" json:"estimation,omitempty"`
	TagList            []*Tag `protobuf:"bytes,5,rep,name=tagList,proto3" json:"tagList,omitempty"`
}

func (x *Problem) Reset() {
	*x = Problem{}
	if protoimpl.UnsafeEnabled {
		mi := &file_nina_api_grpc_compro_category_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Problem) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Problem) ProtoMessage() {}

func (x *Problem) ProtoReflect() protoreflect.Message {
	mi := &file_nina_api_grpc_compro_category_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Problem.ProtoReflect.Descriptor instead.
func (*Problem) Descriptor() ([]byte, []int) {
	return file_nina_api_grpc_compro_category_proto_rawDescGZIP(), []int{6}
}

func (x *Problem) GetProblemId() string {
	if x != nil {
		return x.ProblemId
	}
	return ""
}

func (x *Problem) GetUrl() string {
	if x != nil {
		return x.Url
	}
	return ""
}

func (x *Problem) GetProblemDisplayName() string {
	if x != nil {
		return x.ProblemDisplayName
	}
	return ""
}

func (x *Problem) GetEstimation() int32 {
	if x != nil {
		return x.Estimation
	}
	return 0
}

func (x *Problem) GetTagList() []*Tag {
	if x != nil {
		return x.TagList
	}
	return nil
}

type Tag struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CategoryId       string `protobuf:"bytes,1,opt,name=categoryId,proto3" json:"categoryId,omitempty"`
	TopicDisplayName string `protobuf:"bytes,2,opt,name=topicDisplayName,proto3" json:"topicDisplayName,omitempty"`
}

func (x *Tag) Reset() {
	*x = Tag{}
	if protoimpl.UnsafeEnabled {
		mi := &file_nina_api_grpc_compro_category_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Tag) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Tag) ProtoMessage() {}

func (x *Tag) ProtoReflect() protoreflect.Message {
	mi := &file_nina_api_grpc_compro_category_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Tag.ProtoReflect.Descriptor instead.
func (*Tag) Descriptor() ([]byte, []int) {
	return file_nina_api_grpc_compro_category_proto_rawDescGZIP(), []int{7}
}

func (x *Tag) GetCategoryId() string {
	if x != nil {
		return x.CategoryId
	}
	return ""
}

func (x *Tag) GetTopicDisplayName() string {
	if x != nil {
		return x.TopicDisplayName
	}
	return ""
}

var File_nina_api_grpc_compro_category_proto protoreflect.FileDescriptor

var file_nina_api_grpc_compro_category_proto_rawDesc = []byte{
	0x0a, 0x23, 0x6e, 0x69, 0x6e, 0x61, 0x2d, 0x61, 0x70, 0x69, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f,
	0x63, 0x6f, 0x6d, 0x70, 0x72, 0x6f, 0x5f, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x6e, 0x69, 0x6e, 0x61, 0x1a, 0x1b, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70,
	0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xb2, 0x01, 0x0a, 0x08, 0x43, 0x61, 0x74,
	0x65, 0x67, 0x6f, 0x72, 0x79, 0x12, 0x1e, 0x0a, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72,
	0x79, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67,
	0x6f, 0x72, 0x79, 0x49, 0x64, 0x12, 0x30, 0x0a, 0x13, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72,
	0x79, 0x44, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x13, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x69, 0x73, 0x70,
	0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x2e, 0x0a, 0x12, 0x63, 0x61, 0x74, 0x65, 0x67,
	0x6f, 0x72, 0x79, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x12, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x53, 0x79, 0x73,
	0x74, 0x65, 0x6d, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x24, 0x0a, 0x0d, 0x63, 0x61, 0x74, 0x65, 0x67,
	0x6f, 0x72, 0x79, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0d,
	0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x22, 0x49, 0x0a,
	0x13, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x32, 0x0a, 0x0c, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79,
	0x4c, 0x69, 0x73, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x6e, 0x69, 0x6e,
	0x61, 0x2e, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x52, 0x0c, 0x63, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x61, 0x0a, 0x13, 0x43, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x50, 0x6f, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x1e, 0x0a, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x49, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x49, 0x64, 0x12,
	0x2a, 0x0a, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x0e, 0x2e, 0x6e, 0x69, 0x6e, 0x61, 0x2e, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72,
	0x79, 0x52, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x22, 0x9e, 0x01, 0x0a, 0x05,
	0x54, 0x6f, 0x70, 0x69, 0x63, 0x12, 0x18, 0x0a, 0x07, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x49, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x49, 0x64, 0x12,
	0x2a, 0x0a, 0x10, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x44, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e,
	0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x74, 0x6f, 0x70, 0x69, 0x63,
	0x44, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1e, 0x0a, 0x0a, 0x74,
	0x6f, 0x70, 0x69, 0x63, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x0a, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x12, 0x2f, 0x0a, 0x0b, 0x70,
	0x72, 0x6f, 0x62, 0x6c, 0x65, 0x6d, 0x4c, 0x69, 0x73, 0x74, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x0d, 0x2e, 0x6e, 0x69, 0x6e, 0x61, 0x2e, 0x50, 0x72, 0x6f, 0x62, 0x6c, 0x65, 0x6d, 0x52,
	0x0b, 0x70, 0x72, 0x6f, 0x62, 0x6c, 0x65, 0x6d, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x31, 0x0a, 0x0f,
	0x54, 0x6f, 0x70, 0x69, 0x63, 0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x1e, 0x0a, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x49, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x49, 0x64, 0x22,
	0x69, 0x0a, 0x10, 0x54, 0x6f, 0x70, 0x69, 0x63, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x2a, 0x0a, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x6e, 0x69, 0x6e, 0x61, 0x2e, 0x43, 0x61, 0x74,
	0x65, 0x67, 0x6f, 0x72, 0x79, 0x52, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x12,
	0x29, 0x0a, 0x09, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x4c, 0x69, 0x73, 0x74, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x6e, 0x69, 0x6e, 0x61, 0x2e, 0x54, 0x6f, 0x70, 0x69, 0x63, 0x52,
	0x09, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x4c, 0x69, 0x73, 0x74, 0x22, 0xae, 0x01, 0x0a, 0x07, 0x50,
	0x72, 0x6f, 0x62, 0x6c, 0x65, 0x6d, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x72, 0x6f, 0x62, 0x6c, 0x65,
	0x6d, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x62, 0x6c,
	0x65, 0x6d, 0x49, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x75, 0x72, 0x6c, 0x12, 0x2e, 0x0a, 0x12, 0x70, 0x72, 0x6f, 0x62, 0x6c, 0x65,
	0x6d, 0x44, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x12, 0x70, 0x72, 0x6f, 0x62, 0x6c, 0x65, 0x6d, 0x44, 0x69, 0x73, 0x70, 0x6c,
	0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1e, 0x0a, 0x0a, 0x65, 0x73, 0x74, 0x69, 0x6d, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x65, 0x73, 0x74, 0x69,
	0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x23, 0x0a, 0x07, 0x74, 0x61, 0x67, 0x4c, 0x69, 0x73,
	0x74, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x09, 0x2e, 0x6e, 0x69, 0x6e, 0x61, 0x2e, 0x54,
	0x61, 0x67, 0x52, 0x07, 0x74, 0x61, 0x67, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x51, 0x0a, 0x03, 0x54,
	0x61, 0x67, 0x12, 0x1e, 0x0a, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x49, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79,
	0x49, 0x64, 0x12, 0x2a, 0x0a, 0x10, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x44, 0x69, 0x73, 0x70, 0x6c,
	0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x74, 0x6f,
	0x70, 0x69, 0x63, 0x44, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x32, 0xdd,
	0x01, 0x0a, 0x15, 0x43, 0x6f, 0x6d, 0x70, 0x72, 0x6f, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72,
	0x79, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x42, 0x0a, 0x0b, 0x43, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x47, 0x65, 0x74, 0x12, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a,
	0x19, 0x2e, 0x6e, 0x69, 0x6e, 0x61, 0x2e, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x47,
	0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x43, 0x0a, 0x0c,
	0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x50, 0x6f, 0x73, 0x74, 0x12, 0x19, 0x2e, 0x6e,
	0x69, 0x6e, 0x61, 0x2e, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x50, 0x6f, 0x73, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22,
	0x00, 0x12, 0x3b, 0x0a, 0x08, 0x54, 0x6f, 0x70, 0x69, 0x63, 0x47, 0x65, 0x74, 0x12, 0x15, 0x2e,
	0x6e, 0x69, 0x6e, 0x61, 0x2e, 0x54, 0x6f, 0x70, 0x69, 0x63, 0x47, 0x65, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x6e, 0x69, 0x6e, 0x61, 0x2e, 0x54, 0x6f, 0x70, 0x69,
	0x63, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x48,
	0x5a, 0x46, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6e, 0x69, 0x6e,
	0x67, 0x65, 0x6e, 0x6d, 0x65, 0x2f, 0x6d, 0x61, 0x6d, 0x69, 0x2d, 0x69, 0x6e, 0x74, 0x65, 0x72,
	0x66, 0x61, 0x63, 0x65, 0x2f, 0x6d, 0x61, 0x6d, 0x69, 0x2d, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61,
	0x74, 0x65, 0x64, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x2f, 0x6e, 0x69, 0x6e, 0x61, 0x2d,
	0x61, 0x70, 0x69, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_nina_api_grpc_compro_category_proto_rawDescOnce sync.Once
	file_nina_api_grpc_compro_category_proto_rawDescData = file_nina_api_grpc_compro_category_proto_rawDesc
)

func file_nina_api_grpc_compro_category_proto_rawDescGZIP() []byte {
	file_nina_api_grpc_compro_category_proto_rawDescOnce.Do(func() {
		file_nina_api_grpc_compro_category_proto_rawDescData = protoimpl.X.CompressGZIP(file_nina_api_grpc_compro_category_proto_rawDescData)
	})
	return file_nina_api_grpc_compro_category_proto_rawDescData
}

var file_nina_api_grpc_compro_category_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_nina_api_grpc_compro_category_proto_goTypes = []interface{}{
	(*Category)(nil),            // 0: nina.Category
	(*CategoryGetResponse)(nil), // 1: nina.CategoryGetResponse
	(*CategoryPostRequest)(nil), // 2: nina.CategoryPostRequest
	(*Topic)(nil),               // 3: nina.Topic
	(*TopicGetRequest)(nil),     // 4: nina.TopicGetRequest
	(*TopicGetResponse)(nil),    // 5: nina.TopicGetResponse
	(*Problem)(nil),             // 6: nina.Problem
	(*Tag)(nil),                 // 7: nina.Tag
	(*emptypb.Empty)(nil),       // 8: google.protobuf.Empty
}
var file_nina_api_grpc_compro_category_proto_depIdxs = []int32{
	0, // 0: nina.CategoryGetResponse.categoryList:type_name -> nina.Category
	0, // 1: nina.CategoryPostRequest.category:type_name -> nina.Category
	6, // 2: nina.Topic.problemList:type_name -> nina.Problem
	0, // 3: nina.TopicGetResponse.category:type_name -> nina.Category
	3, // 4: nina.TopicGetResponse.topicList:type_name -> nina.Topic
	7, // 5: nina.Problem.tagList:type_name -> nina.Tag
	8, // 6: nina.ComproCategoryService.CategoryGet:input_type -> google.protobuf.Empty
	2, // 7: nina.ComproCategoryService.CategoryPost:input_type -> nina.CategoryPostRequest
	4, // 8: nina.ComproCategoryService.TopicGet:input_type -> nina.TopicGetRequest
	1, // 9: nina.ComproCategoryService.CategoryGet:output_type -> nina.CategoryGetResponse
	8, // 10: nina.ComproCategoryService.CategoryPost:output_type -> google.protobuf.Empty
	5, // 11: nina.ComproCategoryService.TopicGet:output_type -> nina.TopicGetResponse
	9, // [9:12] is the sub-list for method output_type
	6, // [6:9] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_nina_api_grpc_compro_category_proto_init() }
func file_nina_api_grpc_compro_category_proto_init() {
	if File_nina_api_grpc_compro_category_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_nina_api_grpc_compro_category_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Category); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_nina_api_grpc_compro_category_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CategoryGetResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_nina_api_grpc_compro_category_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CategoryPostRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_nina_api_grpc_compro_category_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Topic); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_nina_api_grpc_compro_category_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TopicGetRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_nina_api_grpc_compro_category_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TopicGetResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_nina_api_grpc_compro_category_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Problem); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_nina_api_grpc_compro_category_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Tag); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_nina_api_grpc_compro_category_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_nina_api_grpc_compro_category_proto_goTypes,
		DependencyIndexes: file_nina_api_grpc_compro_category_proto_depIdxs,
		MessageInfos:      file_nina_api_grpc_compro_category_proto_msgTypes,
	}.Build()
	File_nina_api_grpc_compro_category_proto = out.File
	file_nina_api_grpc_compro_category_proto_rawDesc = nil
	file_nina_api_grpc_compro_category_proto_goTypes = nil
	file_nina_api_grpc_compro_category_proto_depIdxs = nil
}
