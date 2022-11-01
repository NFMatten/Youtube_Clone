from django.urls import path
from . import views

urlpatterns = [
    # path('', views.user_comments),
    path('<str:video_id>/comments/', views.video_comments),
    path('<str:video_id>/comments/<int:pk>/', views.individual_comment),
    # path('all/', views.get_all_comments),
    # path('<int:pk>/', views.user_comments)
]

# Accepts a value from the request's URL (The YouTube video id I am trying to get comments for)
