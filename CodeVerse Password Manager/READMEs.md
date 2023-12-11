from django.contrib.auth.models import User

# Retrieve all users:
# To retrieve all registered users, you can use the User.objects.all() query:
all_users = User.objects.all()

# Filter users:
# You can filter users based on certain criteria. For example, to get users whose username is 'john':
john_users = User.objects.filter(username='john')

# Access user attributes:
# Once you have a user or a queryset of users, you can access their attributes like username, email, etc. For example:
for user in all_users:
    print(f"Username: {user.username}, Email: {user.email}")

# If you want to explore the data in the database, 
# you can use Django's administrative interface (admin site) to view and manage users. To access the admin site, you need to create a superuser account first:
python manage.py createsuperuser

# Open a Python shell and run the following commands:
<!-- GenerateANewKey.py -->
from cryptography.fernet import Fernet
key = Fernet.generate_key()
print(key)