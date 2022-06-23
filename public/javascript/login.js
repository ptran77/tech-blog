async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    document.querySelector('#username-signup').value = "";
    document.querySelector('#password-signup').value = "";
    
    // check the response status
    if (response.ok) {
      console.log('success');
    } else {
      alert(response.statusText);
    }
  }
}

async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    document.querySelector('#username-login').value = "";
    document.querySelector('#password-login').value = "";

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#go-to-signup').addEventListener('click', function () {
  document.querySelector('.signup-form').style.display = 'block';
  document.querySelector('.login-form').style.display = 'none';
})
document.querySelector('#go-to-login').addEventListener('click', function () {
  document.querySelector('.signup-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
})