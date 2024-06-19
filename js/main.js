function validateInput(id, regex) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + '-error');
  if (!regex.test(input.value)) {
    error.textContent = 'Неверный формат ввода';
    document.getElementById('submitBtn').disabled = true;
  } else {
    error.textContent = '';
    document.getElementById('submitBtn').disabled = false;
  }
}

function validatePassword() {
  const password = document.getElementById('password');
  const error = document.getElementById('password-error');
  const confirmPassword = document.getElementById('password-confirm');
  const confirmError = document.getElementById('confirm-password-error');
  
  if (!/^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{8,}$/.test(password.value)) {
    error.textContent = 'Пароль должен содержать минимум 8 символов, включая цифру, заглавную и строчную буквы';
    document.getElementById('submitBtn').disabled = true;
  } else {
    error.textContent = '';
    document.getElementById('submitBtn').disabled = false;
  }
  
  if (password.value !== confirmPassword.value) {
    confirmError.textContent = 'Пароли не совпадают';
    document.getElementById('submitBtn').disabled = true;
  } else {
    confirmError.textContent = '';
    document.getElementById('submitBtn').disabled = false;
  }
}

function validateAge() {
  const birth_day = document.getElementById('birth-day');
  const error = document.getElementById('birth-day-error');
  const age = new Date().getFullYear() - new Date(birth_day.value).getFullYear();
  if (age < 18) {
    error.textContent = 'Вам должно быть не менее 18 лет';
    document.getElementById('submitBtn').disabled = true;
  } else {
    error.textContent = '';
    document.getElementById('submitBtn').disabled = false;
  }
}