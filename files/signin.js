// Get DOM elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Toggle between sign up and sign in (Desktop)
if (signUpButton) {
    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });
}

if (signInButton) {
    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
}

// Mobile toggle function
function toggleForms() {
    container.classList.toggle('right-panel-active');
    
    // Scroll to top on mobile when switching forms
    if (window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reset to sign-in on desktop resize
        if (window.innerWidth > 768) {
            container.classList.remove('right-panel-active');
        }
    }, 250);
});

// Form submission handlers
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const nameInput = e.target.querySelector('input[type="text"]');
    const emailInput = e.target.querySelectorAll('input[type="email"]')[0];
    const passwordInput = e.target.querySelectorAll('input[type="password"]')[0];
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Validate
    if (!name) {
        showError(nameInput, 'Vui lòng nhập tên');
        return;
    }
    
    if (!validateEmail(email)) {
        showError(emailInput, 'Email không hợp lệ');
        return;
    }
    
    if (!validatePassword(password)) {
        showError(passwordInput, 'Mật khẩu phải có ít nhất 8 ký tự');
        return;
    }
    
    // Success
    console.log('Sign Up Data:', { name, email, password });
    
    // Show success message
    showSuccess('Đăng ký thành công! Chào mừng bạn đến với Tủ Sách 10A1 📚');
    
    // Clear form
    e.target.reset();
    
    // Optional: Auto switch to sign in after 2 seconds
    setTimeout(() => {
        container.classList.remove('right-panel-active');
    }, 2000);
    
    // You can add your API call here
    // fetch('/api/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         showSuccess('Đăng ký thành công!');
    //     } else {
    //         showError(emailInput, data.message);
    //     }
    // })
    // .catch(error => showError(emailInput, 'Có lỗi xảy ra'));
});

document.getElementById('signinForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const emailInput = e.target.querySelector('input[type="email"]');
    const passwordInput = e.target.querySelector('input[type="password"]');
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Validate
    if (!validateEmail(email)) {
        showError(emailInput, 'Email không hợp lệ');
        return;
    }
    
    if (!password) {
        showError(passwordInput, 'Vui lòng nhập mật khẩu');
        return;
    }
    
    // Success
    console.log('Sign In Data:', { email, password });
    
    showSuccess('Đăng nhập thành công! Đang chuyển hướng... 🎉');
    
    // Clear form
    e.target.reset();
    
    // Redirect after 1.5 seconds
    setTimeout(() => {
        window.location.href = '../index.html'; // Adjust path as needed
    }, 1500);
    
    // You can add your API call here
    // fetch('/api/signin', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.token) {
    //         localStorage.setItem('token', data.token);
    //         window.location.href = '../index.html';
    //     } else {
    //         showError(passwordInput, 'Email hoặc mật khẩu không đúng');
    //     }
    // })
    // .catch(error => showError(passwordInput, 'Có lỗi xảy ra'));
});

// Add animation to social icons
const socialIcons = document.querySelectorAll('.social');
socialIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const iconType = icon.innerHTML.includes('path') ? 'mạng xã hội' : 'mạng xã hội';
        showInfo('Tính năng đăng nhập bằng ' + iconType + ' sẽ sớm được cập nhật! 🚀');
        
        // You can add social login logic here
        // window.location.href = '/auth/google';
    });
});

// Forgot password handler
const forgotPasswordLink = document.querySelector('a[href="#"]');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Better UX: Create a custom modal instead of prompt
        const email = prompt('Nhập email của bạn để reset mật khẩu:');
        if (email && validateEmail(email)) {
            console.log('Reset password for:', email);
            showSuccess(`Link reset mật khẩu đã được gửi đến ${email} ✉️`);
            
            // Add your password reset API call here
            // fetch('/api/forgot-password', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });
        } else if (email) {
            showError(null, 'Email không hợp lệ');
        }
    });
}

// Validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

// UI feedback functions
function showError(input, message) {
    // Remove any existing errors
    removeErrors();
    
    if (input) {
        input.style.border = '2px solid #ff4444';
        input.focus();
    }
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ff4444;
        font-size: 13px;
        margin-top: 5px;
        animation: shake 0.3s;
    `;
    
    if (input) {
        input.parentElement.insertBefore(errorDiv, input.nextSibling);
    } else {
        alert(message);
    }
    
    // Auto remove after 3 seconds
    setTimeout(removeErrors, 3000);
}

function showSuccess(message) {
    removeErrors();
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideDown 0.5s;
        font-weight: 600;
        text-align: center;
        max-width: 90%;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideUp 0.5s';
        setTimeout(() => successDiv.remove(), 500);
    }, 3000);
}

function showInfo(message) {
    const infoDiv = document.createElement('div');
    infoDiv.textContent = message;
    infoDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        color: #667eea;
        padding: 15px 30px;
        border-radius: 30px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideDown 0.5s;
        font-weight: 600;
        text-align: center;
        max-width: 90%;
        border: 2px solid #667eea;
    `;
    
    document.body.appendChild(infoDiv);
    
    setTimeout(() => {
        infoDiv.style.animation = 'slideUp 0.5s';
        setTimeout(() => infoDiv.remove(), 500);
    }, 2500);
}

function removeErrors() {
    // Remove error borders
    document.querySelectorAll('input').forEach(input => {
        input.style.border = 'none';
    });
    
    // Remove error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Real-time validation
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('input', () => {
        removeErrors();
    });
    
    input.addEventListener('blur', () => {
        if (input.value && !validateEmail(input.value)) {
            input.style.border = '2px solid #ff4444';
        } else {
            input.style.border = 'none';
        }
    });
});

const passwordInputs = document.querySelectorAll('input[type="password"]');
passwordInputs.forEach(input => {
    input.addEventListener('input', () => {
        removeErrors();
    });
    
    input.addEventListener('blur', () => {
        if (input.value && !validatePassword(input.value)) {
            input.style.border = '2px solid #ff4444';
        } else {
            input.style.border = 'none';
        }
    });
});

// Prevent zoom on iOS when focusing inputs
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.fontSize = '16px';
        });
    });
}

console.log('🔐 Sign In/Up page loaded successfully!');
console.log('📱 Responsive design active for all devices');
