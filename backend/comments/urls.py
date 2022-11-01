from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_comments)
]

# Accepts a value from the request's URL (The YouTube video id I am trying to get comments for)