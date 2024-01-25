from rest_framework import serializers
from leisure_log_app.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title',
                'description', 
                'created', 
                'url', 
                'type',
                'comments',
                'rating'
                ]
