from django.urls import path, include

urlpatterns = [
    path('', include('leisure_log_app.urls')),
    path('api-auth/', include('rest_framework.urls'))
]
