##############################WITH USER##################################

# from rest_framework import serializers
# from .models import Product, Comment, Rating

# # class CommentSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = Comment
# #         # fields = ['user', 'content', 'created_at']
# #         fields = ['content', 'created_at']
#
# class RatingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Rating
#         # fields = ['user', 'score']
#         fields = ['score']
#
# class ProductSerializer(serializers.ModelSerializer):
#     comments = CommentSerializer(many=True, read_only=True)
#     ratings = RatingSerializer(many=True, read_only=True)
#
#     class Meta:
#         model = Product
#         fields = ['id', 'name', 'description', 'price', 'comments', 'ratings']


##############################WITHOUT USER##################################

from rest_framework import serializers
from .models import Product, Comment, Rating

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_at', 'product']  # Adjust the fields as per your Comment model

# Now you can use CommentSerializer in ProductSerializer
class ProductSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)  # Now this will be recognized

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'comments']  # Adjust the fields as per your Product model

# Define the RatingSerializer
class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['score', 'product', 'created_at']
