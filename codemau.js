function validateForm() {
    let errors = false;
    let firstInvalidField = null;

    // Clear previous errors and reset field styles
    document.querySelectorAll('.error').forEach(e => e.textContent = '');
    document.querySelectorAll('.input-field').forEach(field => field.style.border = '1px solid #ccc');

    // Validate username
    const username = document.getElementById('username');
    const usernameRegex = /^[a-z]+$/;
    if (!usernameRegex.test(username.value)) {
        document.getElementById('usernameError').textContent = 'Tên người dùng chỉ được phép chữ thường (a-z)!';
        username.style.border = '1px solid red';
        errors = true;
        if (!firstInvalidField) firstInvalidField = username;
    }

    // Validate email
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirmEmail');
    if (email.value !== confirmEmail.value) {
        document.getElementById('emailError').textContent = 'Email chưa giống nhau!';
        email.style.border = '1px solid red';
        confirmEmail.style.border = '1px solid red';
        errors = true;
        if (!firstInvalidField) firstInvalidField = email;
    }

    // Validate password
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
        document.getElementById('passwordError').textContent = 'Mật khẩu yêu cầu phải có chữ hoa (A-Z), chữ thường (a-z), ký tự đặc biệt ($!@*), và chữ số (0-9).';
        password.style.border = '1px solid red';
        errors = true;
        if (!firstInvalidField) firstInvalidField = password;
    }
    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Mật khẩu chưa giống nhau!';
        confirmPassword.style.border = '1px solid red';
        errors = true;
        if (!firstInvalidField) firstInvalidField = confirmPassword;
    }

    // Keep the submit button enabled
    document.getElementById('submitBtn').disabled = false;

    // Focus on the first invalid field
    if (firstInvalidField) {
        firstInvalidField.focus();
    }

    return !errors;  // Return false as errors will be true if there are validation issues
}

// Add event listeners for real-time validation feedback
document.querySelectorAll('.input-field').forEach(field => {
    field.addEventListener('input', () => {
        if (field.id === 'username') {
            document.getElementById('usernameError').textContent = '';
            document.getElementById('username').style.border = '1px solid #ccc';
        }
        if (field.id === 'email' || field.id === 'confirmEmail') {
            document.getElementById('emailError').textContent = '';
            document.getElementById('email').style.border = '1px solid #ccc';
            document.getElementById('confirmEmail').style.border = '1px solid #ccc';
        }
        if (field.id === 'password' || field.id === 'confirmPassword') {
            document.getElementById('passwordError').textContent = '';
            document.getElementById('password').style.border = '1px solid #ccc';
            document.getElementById('confirmPassword').style.border = '1px solid #ccc';
            document.getElementById('confirmPasswordError').textContent = '';
        }
    });
});
