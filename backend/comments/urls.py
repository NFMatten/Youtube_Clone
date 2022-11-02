from django.urls import path
from . import views

urlpatterns = [
    path('comments/', views.update_comments),
    path('all/', views.get_all_comments),
    path('<str:video_id>/comments/', views.video_comments),
    path('<str:video_id>/comments/<int:pk>/', views.individual_comment)
]


# remove video_id from path