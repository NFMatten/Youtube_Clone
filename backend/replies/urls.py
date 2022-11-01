from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all_replies),
    path('', views.user_replies)
]
