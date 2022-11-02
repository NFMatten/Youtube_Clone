from django.urls import path
from . import views

urlpatterns = [
    path('<int:comment_id>/', views.comment_replies),
]
