from rest_framework import serializers
from .models import Reply
from authentication.models import User
from comments.models import Comment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class ReplySerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Reply
        fields = ['id','user','comment','text', 'comment_id']
        depth = 1
    comment_id = serializers.IntegerField(write_only=True)