##############################WITH USER##################################

# from django.shortcuts import render
# from rest_framework import generics
# from .models import Product, Comment, Rating
# from .serializers import ProductSerializer, CommentSerializer, RatingSerializer

# Create your views here.

# class ProductDetailView(generics.RetrieveAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

# class CommentCreateView(generics.CreateAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

# class RatingCreateView(generics.CreateAPIView):
#     queryset = Rating.objects.all()
#     serializer_class = RatingSerializer

##############################WITHOUT USER##################################

from django.shortcuts import render
from rest_framework import generics
from .models import Product, Comment, Rating
from .serializers import ProductSerializer, CommentSerializer, RatingSerializer
from rest_framework.generics import CreateAPIView
from django.shortcuts import get_object_or_404

class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CommentCreateView(CreateAPIView):
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        # Get the product from the URL
        product_id = self.kwargs.get('pk')  # Assuming 'pk' is the name of the URL parameter
        product = get_object_or_404(Product, id=product_id)

        # Save the comment with the product
        serializer.save(product=product)

class RatingCreateView(generics.CreateAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
