from django.urls import path
from . import views

urlpatterns = [
    path('', views.video_comments),
    path('<int:comment_id>/<str:like_action>/', views.like_comment)
]