# APPNAME/management/commands/list_users.py

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'List all registered users'

    def handle(self, *args, **options):
        # Retrieve all users
        all_users = User.objects.all()

        # Display user information
        for user in all_users:
            self.stdout.write(self.style.SUCCESS(f"Username: {user.username}, Email: {user.email}"))
