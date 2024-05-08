# assignment1

Or Bar Califa and Daniel Fradkin

Project: Mitzi-Net Registration Page

File: index.html

Description:
This HTML file contains the registration form for Mitzi-Net, a community of professionals.

HTML Elements:

1. logo (div):

    - Description: Container for the company logo.

2. fname (input):

    - Description: Input field for first name.

3. lname (input):

    - Description: Input field for last name.

4. phone-number (input):

    - Description: Input field for phone number.

5. email (input):

    - Description: Input field for email.

6. password (input):

    - Description: Input field for password.

7. confirm_password (input):

    - Description: Input field for confirming password.

8. sign-up-btn (button):
    - Description: Button for submitting the registration form.

File: styles.css

Description:
This CSS file contains the styling for the Mitzi-Net registration form.

CSS Classes:

1. container:

    - Description: Styles the container for the registration form.

2. logo:

    - Description: Styles the logo container.

3. form-group:

    - Description: Styles the form group elements.

4. names:

    - Description: Styles the form group for first name and last name.

5. sign-up-btn:

    - Description: Styles the sign-up button.

6. error:
    - Description: Styles error messages.

File: index.js

Description:
This JavaScript file contains code for form validation in the Mitzi-Net registration page.

Functions:

1. validate():

    - Description: Validates the form inputs and displays error messages if validation fails.
    - Parameters: None
    - Returns: Boolean (true if all inputs are valid, false otherwise)

2. validatePass():

    - Description: Validates the password and confirms password fields.
    - Parameters: None
    - Returns: Boolean (true if passwords match, false otherwise)

3. validateEmail():

    - Description: Validates the email format.
    - Parameters: None
    - Returns: Boolean (true if email format is valid, false otherwise)

4. validateName(nameInput):

    - Description: Validates the first name and last name fields.
    - Parameters: nameInput (HTMLInputElement) - Input field element for first name or last name
    - Returns: Boolean (true if name format is valid, false otherwise)

5. validatePhoneNumber():
    - Description: Validates the phone number format.
    - Parameters: None
    - Returns: Boolean (true if phone number format is valid, false otherwise)

Global Variables:

1. fname (HTMLElement): Input element for first name
2. lname (HTMLElement): Input element for last name
3. phoneNumber (HTMLElement): Input element for phone number
4. email (HTMLElement): Input element for email
5. pass (HTMLElement): Input element for password
6. confirm_pass (HTMLElement): Input element for confirming password

Event Listeners:

-   Listens for the form submission event and calls the validate() function to validate form inputs.
