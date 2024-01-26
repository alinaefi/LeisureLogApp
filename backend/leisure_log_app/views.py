from leisure_log_app.models import Post
from leisure_log_app.serializers import PostSerializer
from rest_framework import generics


class PostList(generics.ListCreateAPIView):
    """Handles GET request to return list of posts
    and POST request to create a new post"""
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    """Handles GET request to return a specific post,
    PUT request to update a specific post,
    and DELETE request to delete a specific post"""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
