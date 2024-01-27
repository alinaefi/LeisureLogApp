from rest_framework import serializers
from leisure_log_app.models import Post
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, queryset=Post.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'posts']

class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Post
        fields = ['author',
                'title',
                'description', 
                'created', 
                'url', 
                'type',
                'comments',
                'rating'
                ]
