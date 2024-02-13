from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from leisure_log_app import views

urlpatterns = format_suffix_patterns([
    path('', views.APIRootView.as_view()),
    path('login/', views.LoginView.as_view(), name='login'),
    path('register/', views.RegistrationView.as_view(), name='register'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('posts/', views.PostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', views.PostDetail.as_view(), name='post-detail'),
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
    path('retro/', views.RetroList.as_view(), name='retro-list'),
    path('retro/<int:months>/', views.RetroList.as_view(), name='retro-detail'),
])