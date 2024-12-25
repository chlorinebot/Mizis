   function validateForm() {
            let errors = false;

            // Clear previous errors
            document.querySelectorAll('.error').forEach(e => e.textContent = '');

            // Validate email
            const email = document.getElementById('email').value;
            const confirmEmail = document.getElementById('confirmEmail').value;
            if (email !== confirmEmail) {
                document.getElementById('emailError').textContent = 'Email chưa đúng định dạng.';
                errors = true;
            }

            // Validate password
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
            if (!passwordRegex.test(password)) {
                document.getElementById('passwordError').textContent = 'Mật khẩu yêu cầu phải có Chữ hoa(AZ), chữ thường(az), ký tự($!@*), chữ số(123)!.';
                errors = true;
            }
            if (password !== confirmPassword) {
                document.getElementById('confirmPasswordError').textContent = 'Mật khẩu chưa giống nhau!';
                errors = true;
            }
            // Validate CAPTCHA
            const captchaResponse = grecaptcha.getResponse();
            if (captchaResponse.length === 0) {
                document.getElementById('captchaError').textContent = 'Please complete the CAPTCHA.';
                errors = true;
            }

            return !errors;
        }