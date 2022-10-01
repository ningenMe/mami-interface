// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.1
// source: nina-api-grpc/github_contribution.proto

package nina_api_grpc

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// GithubContributionServiceClient is the client API for GithubContributionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GithubContributionServiceClient interface {
	Get(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetGithubContributionResponse, error)
	Post(ctx context.Context, opts ...grpc.CallOption) (GithubContributionService_PostClient, error)
	Delete(ctx context.Context, in *DeleteGithubContributionRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	GetSummary(ctx context.Context, in *GetGithubContributionSummaryRequest, opts ...grpc.CallOption) (*GetGithubContributionSummaryResponse, error)
	GetStatistics(ctx context.Context, in *GetStatisticsRequest, opts ...grpc.CallOption) (*GetStatisticsResponse, error)
}

type githubContributionServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewGithubContributionServiceClient(cc grpc.ClientConnInterface) GithubContributionServiceClient {
	return &githubContributionServiceClient{cc}
}

func (c *githubContributionServiceClient) Get(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetGithubContributionResponse, error) {
	out := new(GetGithubContributionResponse)
	err := c.cc.Invoke(ctx, "/nina.GithubContributionService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *githubContributionServiceClient) Post(ctx context.Context, opts ...grpc.CallOption) (GithubContributionService_PostClient, error) {
	stream, err := c.cc.NewStream(ctx, &GithubContributionService_ServiceDesc.Streams[0], "/nina.GithubContributionService/Post", opts...)
	if err != nil {
		return nil, err
	}
	x := &githubContributionServicePostClient{stream}
	return x, nil
}

type GithubContributionService_PostClient interface {
	Send(*PostGithubContributionRequest) error
	CloseAndRecv() (*emptypb.Empty, error)
	grpc.ClientStream
}

type githubContributionServicePostClient struct {
	grpc.ClientStream
}

func (x *githubContributionServicePostClient) Send(m *PostGithubContributionRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *githubContributionServicePostClient) CloseAndRecv() (*emptypb.Empty, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(emptypb.Empty)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *githubContributionServiceClient) Delete(ctx context.Context, in *DeleteGithubContributionRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/nina.GithubContributionService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *githubContributionServiceClient) GetSummary(ctx context.Context, in *GetGithubContributionSummaryRequest, opts ...grpc.CallOption) (*GetGithubContributionSummaryResponse, error) {
	out := new(GetGithubContributionSummaryResponse)
	err := c.cc.Invoke(ctx, "/nina.GithubContributionService/GetSummary", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *githubContributionServiceClient) GetStatistics(ctx context.Context, in *GetStatisticsRequest, opts ...grpc.CallOption) (*GetStatisticsResponse, error) {
	out := new(GetStatisticsResponse)
	err := c.cc.Invoke(ctx, "/nina.GithubContributionService/GetStatistics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GithubContributionServiceServer is the server API for GithubContributionService service.
// All implementations must embed UnimplementedGithubContributionServiceServer
// for forward compatibility
type GithubContributionServiceServer interface {
	Get(context.Context, *emptypb.Empty) (*GetGithubContributionResponse, error)
	Post(GithubContributionService_PostServer) error
	Delete(context.Context, *DeleteGithubContributionRequest) (*emptypb.Empty, error)
	GetSummary(context.Context, *GetGithubContributionSummaryRequest) (*GetGithubContributionSummaryResponse, error)
	GetStatistics(context.Context, *GetStatisticsRequest) (*GetStatisticsResponse, error)
	mustEmbedUnimplementedGithubContributionServiceServer()
}

// UnimplementedGithubContributionServiceServer must be embedded to have forward compatible implementations.
type UnimplementedGithubContributionServiceServer struct {
}

func (UnimplementedGithubContributionServiceServer) Get(context.Context, *emptypb.Empty) (*GetGithubContributionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedGithubContributionServiceServer) Post(GithubContributionService_PostServer) error {
	return status.Errorf(codes.Unimplemented, "method Post not implemented")
}
func (UnimplementedGithubContributionServiceServer) Delete(context.Context, *DeleteGithubContributionRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedGithubContributionServiceServer) GetSummary(context.Context, *GetGithubContributionSummaryRequest) (*GetGithubContributionSummaryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSummary not implemented")
}
func (UnimplementedGithubContributionServiceServer) GetStatistics(context.Context, *GetStatisticsRequest) (*GetStatisticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetStatistics not implemented")
}
func (UnimplementedGithubContributionServiceServer) mustEmbedUnimplementedGithubContributionServiceServer() {
}

// UnsafeGithubContributionServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GithubContributionServiceServer will
// result in compilation errors.
type UnsafeGithubContributionServiceServer interface {
	mustEmbedUnimplementedGithubContributionServiceServer()
}

func RegisterGithubContributionServiceServer(s grpc.ServiceRegistrar, srv GithubContributionServiceServer) {
	s.RegisterService(&GithubContributionService_ServiceDesc, srv)
}

func _GithubContributionService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GithubContributionServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nina.GithubContributionService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GithubContributionServiceServer).Get(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _GithubContributionService_Post_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(GithubContributionServiceServer).Post(&githubContributionServicePostServer{stream})
}

type GithubContributionService_PostServer interface {
	SendAndClose(*emptypb.Empty) error
	Recv() (*PostGithubContributionRequest, error)
	grpc.ServerStream
}

type githubContributionServicePostServer struct {
	grpc.ServerStream
}

func (x *githubContributionServicePostServer) SendAndClose(m *emptypb.Empty) error {
	return x.ServerStream.SendMsg(m)
}

func (x *githubContributionServicePostServer) Recv() (*PostGithubContributionRequest, error) {
	m := new(PostGithubContributionRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _GithubContributionService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteGithubContributionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GithubContributionServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nina.GithubContributionService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GithubContributionServiceServer).Delete(ctx, req.(*DeleteGithubContributionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GithubContributionService_GetSummary_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetGithubContributionSummaryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GithubContributionServiceServer).GetSummary(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nina.GithubContributionService/GetSummary",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GithubContributionServiceServer).GetSummary(ctx, req.(*GetGithubContributionSummaryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GithubContributionService_GetStatistics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetStatisticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GithubContributionServiceServer).GetStatistics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nina.GithubContributionService/GetStatistics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GithubContributionServiceServer).GetStatistics(ctx, req.(*GetStatisticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// GithubContributionService_ServiceDesc is the grpc.ServiceDesc for GithubContributionService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var GithubContributionService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "nina.GithubContributionService",
	HandlerType: (*GithubContributionServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Get",
			Handler:    _GithubContributionService_Get_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _GithubContributionService_Delete_Handler,
		},
		{
			MethodName: "GetSummary",
			Handler:    _GithubContributionService_GetSummary_Handler,
		},
		{
			MethodName: "GetStatistics",
			Handler:    _GithubContributionService_GetStatistics_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Post",
			Handler:       _GithubContributionService_Post_Handler,
			ClientStreams: true,
		},
	},
	Metadata: "nina-api-grpc/github_contribution.proto",
}
