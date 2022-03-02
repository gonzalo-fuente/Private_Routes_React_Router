# React Router Private Routes

When developing React Applications with Authentication, we probably require some public and private routes.

### Public Routes

Public routes are the ones that can be accessed before login into the App. For example Log in, SignUp, Forgot Password,resetPassword.
This means pages without sensible information.

### Private Routes

Private Routes can vary based on the App itself, and shows some sensible information that can only be displayed to registered or authorized users.
For example, Dashboards, User Profile, App Settings, Home etc
These routes can be accessed only after login.

The purpose of the app is to show how to create public and private routes using react-router-v6.
