from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from leisure_log_app import views

urlpatterns = [
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('retro/<int:months>/', views.RetroList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)