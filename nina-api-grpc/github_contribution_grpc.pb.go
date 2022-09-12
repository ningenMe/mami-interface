// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.5
// source: github_contribution.proto

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

// GithubContributionClient is the client API for GithubContribution service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GithubContributionClient interface {
	Get(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetResponse, error)
}

type githubContributionClient struct {
	cc grpc.ClientConnInterface
}

func NewGithubContributionClient(cc grpc.ClientConnInterface) GithubContributionClient {
	return &githubContributionClient{cc}
}

func (c *githubContributionClient) Get(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetResponse, error) {
	out := new(GetResponse)
	err := c.cc.Invoke(ctx, "/nina.GithubContribution/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GithubContributionServer is the server API for GithubContribution service.
// All implementations must embed UnimplementedGithubContributionServer
// for forward compatibility
type GithubContributionServer interface {
	Get(context.Context, *emptypb.Empty) (*GetResponse, error)
	mustEmbedUnimplementedGithubContributionServer()
}

// UnimplementedGithubContributionServer must be embedded to have forward compatible implementations.
type UnimplementedGithubContributionServer struct {
}

func (UnimplementedGithubContributionServer) Get(context.Context, *emptypb.Empty) (*GetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedGithubContributionServer) mustEmbedUnimplementedGithubContributionServer() {}

// UnsafeGithubContributionServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GithubContributionServer will
// result in compilation errors.
type UnsafeGithubContributionServer interface {
	mustEmbedUnimplementedGithubContributionServer()
}

func RegisterGithubContributionServer(s grpc.ServiceRegistrar, srv GithubContributionServer) {
	s.RegisterService(&GithubContribution_ServiceDesc, srv)
}

func _GithubContribution_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GithubContributionServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nina.GithubContribution/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GithubContributionServer).Get(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// GithubContribution_ServiceDesc is the grpc.ServiceDesc for GithubContribution service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var GithubContribution_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "nina.GithubContribution",
	HandlerType: (*GithubContributionServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Get",
			Handler:    _GithubContribution_Get_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github_contribution.proto",
}
