from rest_framework import serializers
from leisure_log_app.models import Post
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.db import IntegrityError

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

class LoginSerializer(serializers.Serializer):
    """
    Defines two fields for authentication:
     username and password
    Tries to authenticate the user with these when validated.
    """
    username = serializers.CharField(
        label="Username",
        write_only=True
    )
    password = serializers.CharField(
        label="Password",
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if not user:
                msg = 'Access denied: wrong username or password.'
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = 'Both "username" and "password" are required.'
            raise serializers.ValidationError(msg, code='authorization')
        # A valid user will be used in the view
        attrs['user'] = user
        return attrs
    

class RegistrationSerializer(serializers.ModelSerializer):
    """Defines four fields for new user:
    username, password, first name and last name
    Creates the user with these when validated."""
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
