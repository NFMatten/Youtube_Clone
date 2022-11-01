from django.urls import path
from . import views

urlpatterns = [
    path('<str:video_id>/comments/<int:pk>/replies/', views.get_replies),
]