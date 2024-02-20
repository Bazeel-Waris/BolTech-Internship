// SignIn Feature by Api Call
const SignInBtn = document.getElementById('signInBtn');
const username = document.getElementById('username');
const password = document.getElementById('password');

// console.log(username, password, SignInBtn);

function userSignIn (e) {
    e.preventDefault();

    const signInApi = 'https://dummyjson.com/auth/login';

    const credentials = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: `${username.value}`,
            password: `${password.value}`
        }),
    }

    // Making an Api Call
    let user = fetch(signInApi, credentials);
    user.then(response => response.json())
    .then(data => {
      
        // console.log(data.message);
        
        if(data.message === 'Invalid credentials') {
            console.log("Please Enter the Correct Credentials!");
        } 
        else {
            
            console.log(data);
            localStorage.setItem('loggedInUser', JSON.stringify(data));
            
            window.location.assign('../news-feed.html');

        }

    })

    
}

SignInBtn.addEventListener('click', userSignIn);
// userSignIn();