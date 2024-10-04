from django.urls import path
from .views import ProductDetailView, CommentCreateView, RatingCreateView

urlpatterns = [
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('products/<int:pk>/comments/', CommentCreateView.as_view(), name='add-comment'),
    path('products/<int:pk>/ratings/', RatingCreateView.as_view(), name='add-rating'),
]
