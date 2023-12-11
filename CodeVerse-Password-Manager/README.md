# CodeVerse Password Manager
![image](https://github.com/Biggestheart/alx-higher_level_programming/assets/57988686/4eef38ad-c9c3-4e86-b626-6875166bcbc2)

The CodeVerse Password Manager is a sophisticated and secure application meticulously crafted to empower users in proficiently mtheir passwords.
With a focus on robust security measures and user convenience, this state-of-the-art solution delivers an array of advanced features.
It stands as a testament to our commitment to providing a seamless and trustworthy password management experience.

## Features

- **OTP Verification**: During signup and login, users are sent a One-Time Password (OTP) to their registered email. The OTP must be entered into the application to proceed further, ensuring enhanced security.

- **Strong Password Suggestions**: 

![image](https://github.com/Biggestheart/alx-higher_level_programming/assets/57988686/6eddef42-0661-428c-a7bb-cf59436bf1ff)

To enhance the robustness of user credentials, the application recommends a strong master password and suggests equally secure passwords for other accounts. The suggested password is a well-crafted combination of alphabets, numbers, and special characters, all of fixed length. This proactive approach ensures that users adopt strong and resilient passwords, bolstering the overall security of their accounts.

- **Encryption**: The application prioritizes the security of user credentials by employing industry-standard encryption schemes such as AES and SHA. All stored user data in the database is encrypted, enhancing overall security measures. This approach guarantees that sensitive information remains safeguarded, maintaining its confidentiality in the event of any potential database compromise.

- **Password Reset**: 
For users who have forgotten their password, the application facilitates a straightforward reset process. This involves OTP verification sent to the registered email address, ensuring a secure and reliable identity confirmation. Once verified, users can seamlessly create a new password, enhancing both security and user accessibility.

- **Secure Input Fields and XSS Prevention**:To fortify user data against potential vulnerabilities, including Cross-Site Scripting (XSS) attacks, the application safeguards input fields like username, email, password, and URL from scripting attacks. Robust input sanitization techniques are employed to validate and cleanse user-supplied data, eliminating or encoding any potentially malicious code that might be injected into the application. This proactive approach ensures the safety and integrity of user information.

- **Password Management**: Upon successful login, users can effortlessly save passwords for their diverse accounts. Furthermore, they possess the capability to delete and modify stored passwords, offering flexibility and control over their credentials.

- **Search Functionality**: The application incorporates a search bar within the passwords page, enabling users to swiftly locate credentials associated with a particular website or service.

- **Website Logo/Icon Retrieval**:
Upon entering website URLs and credentials, the application seamlessly fetches and showcases the respective website logo/icon. This functionality elevates user navigation, delivering a visually delightful experience.

- **CSRF Protection**: 
Robust Cross-Site Request Forgery (CSRF) token implementation acts as a formidable defense mechanism, thwarting unauthorized requests and fortifying the application against CSRF attacks.

- **User-Friendly Design**: 
The user-centric application showcases a streamlined color scheme and a user-friendly interface, emphasizing both usability and an instinctively designed experience


## Local Setup and Installation

To run CodeVerse Password Manager locally on your machine, follow these steps:

1. Clone the repository:<br>`git clone https://github.com/Official0mega/Master-Backend/.git`
3. Install the required dependencies:<br>`cd Master-Backend/CodeVerse-Password-Manager`<br>`pip install -r requirements.txt`
4. Configure the database settings in the `settings.py` file.
5. Apply the database migrations:<br>`python manage.py migrate`
6. Start the development server:<br>`python manage.py runserver`
7. Access the application in your web browser at `http://localhost:8000`



## Contributing

Contributions to the CodeVerse Password Manager project are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

![image](https://github.com/Biggestheart/alx-higher_level_programming/assets/57988686/143f161f-d8be-4cde-9e4a-9acb8894618c)