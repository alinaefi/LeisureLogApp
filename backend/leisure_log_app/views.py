from leisure_log_app.models import Post
from leisure_log_app.serializers import PostSerializer, UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import permissions
from leisure_log_app.permissions import IsAuthorOrReadOnly


class PostList(generics.ListCreateAPIView):
    """Handles GET request to return list of posts
    and POST request to create a new post"""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    """Handles GET request to return a specific post,
    PUT request to update a specific post,
    and DELETE request to delete a specific post"""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsAuthorOrReadOnly]

class UserList(generics.ListAPIView):
    """Handles GET request to return list of users
    and POST request to create a new user"""
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    """Handles GET request to return a specific user details,
    PUT request to update a specific user details,
    and DELETE request to delete a specific user details"""
    queryset = User.objects.all()
    serializer_class = UserSerializer