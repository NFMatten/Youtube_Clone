from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def video_comments(request):
    if request.method == 'GET':
        video_id = request.query_params.get('video_id')
        if video_id is not None:
            comments = Comment.objects.filter(video_id=video_id)
        else:
            comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def like_comment(request, comment_id, like_action):
    if request.method == 'PATCH':
        comment = get_object_or_404(Comment, pk=comment_id)
        if like_action == 'like':
            comment.likes += 1
        elif like_action == 'dislike':
            comment.dislikes += 1
        comment.save()
        return Response(status=status.HTTP_204_NO_CONTENT)