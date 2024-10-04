##############################WITH USER##################################

# from django.db import models
# from django.contrib.auth.models import User

# Create your models here.

# class Product(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField()
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#
#     def __str__(self):
#         return self.name

# class Comment(models.Model):
#     product = models.ForeignKey(Product, related_name='comments', on_delete=models.CASCADE)
#     # user = models.ForeignKey(User, on_delete=models.CASCADE)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)

# class Rating(models.Model):
#     product = models.ForeignKey(Product, related_name='ratings', on_delete=models.CASCADE)
#     # user = models.ForeignKey(User, on_delete=models.CASCADE)
#     score = models.IntegerField()

    # def __str__(self):
    #     return f'{self.user.username} - {self.score}'

##############################WITHOUT USER##################################

from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)  # Link comment to a product

class Rating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='ratings')
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
