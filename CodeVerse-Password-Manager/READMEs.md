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


# Setting Up App Password for Gmail in Node.js

To use Gmail as a mail service in your Node.js application, you'll need to generate an "App Password" for secure authentication. Follow these steps:

## 1. Go to your Google Account Settings:

- Open your web browser and go to [Google Account Settings](https://myaccount.google.com/).
- Sign in with the Google account associated with your Gmail.

## 2. Navigate to Security:

- In the left sidebar, click on "Security."

## 3. Enable 2-Step Verification:

- Scroll down to the "Signing in to Google" section.
- Turn on "2-Step Verification."
- Follow the on-screen instructions to set up 2-Step Verification. You might need to enter your password and receive a code on your phone to complete the process.

## 4. Generate an App Password:

- After enabling 2-Step Verification, scroll down to the "App passwords" section.
- Click on "App passwords."

## 5. Generate App Password:

- In the "Select app" dropdown, choose "Mail."
- In the "Select device" dropdown, choose the device or app for which you're generating the app password.
- Click on "Generate."
- Google will generate a 16-character app password.

## 6. Copy the App Password:

- Copy the generated app password. This is the password you'll use in your Node.js application.

## 7. Use the App Password in Your Code:

- Replace the placeholder password in your Node.js code with the app password you copied.

```javascript
const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com",
        pass: "your-generated-app-password"
    }
});
