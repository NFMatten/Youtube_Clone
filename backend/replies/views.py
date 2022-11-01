from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply 
from .serializers import ReplySerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_replies(request, video_id, pk):
    replies = Reply.objects.filter(comment__id=pk, comment__video_id=video_id)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data)