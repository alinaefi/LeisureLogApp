from rest_framework import permissions


class IsAuthor(permissions.BasePermission):
    """Custom permission to only allow authors of a post to edit it."""
    def has_object_permission(self, request, view, obj):
        # Read and write permissions are only allowed to the author of the post
        return obj.author == request.user