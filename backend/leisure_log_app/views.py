from leisure_log_app.models import Post
from leisure_log_app.serializers import PostSerializer, UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import permissions
from leisure_log_app.permissions import IsAuthor
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from datetime import timedelta
from django.utils import timezone

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'posts': reverse('post-list', request=request, format=format),
        'retro': reverse('retro-list', request=request, format=format)
    })

class PostList(generics.ListCreateAPIView):
    """Handles GET request to return list of posts
    and POST request to create a new post"""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated, IsAuthor]

    def get_queryset(self):
        """Override queryset function: only user's posts returned"""
        user = self.request.user
        return user.posts.all()
    
    def perform_create(self, serializer):
        """Override saving a new object function: can only be created by current user"""
        serializer.save(author=self.request.user)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    """Handles GET request to return a specific post,
    PUT request to update a specific post,
    and DELETE request to delete a specific post"""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated,
                      IsAuthor]

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

class RetroList(generics.ListAPIView):
    """Handles GET request to return list of most highly rated posts of all time"""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated, IsAuthor]
    
    def get_queryset(self):
        """Override queryset function: only user's most rated posts returned"""
        user = self.request.user
        return user.posts.filter(rating__gt=3).order_by('type', '-created')

class RetroDetail(generics.ListAPIView):
    """Handles GET request to return list of most highly rated posts
    for a given period of time"""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated, IsAuthor]
    
    def get_queryset(self):
        """Override queryset function: only user's most rated posts returned for given period"""
        param = self.request.query_params.get('months', 3)
        user = self.request.user
        return user.posts.filter(created__gt=timezone.now()-timedelta(weeks=param*4.4),
                                rating__gt=3).order_by('type', '-created')