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
            // Storing Values in Local Storage
            localStorage.setItem('userId', data.id);
            localStorage.setItem('userName', data.username);
            localStorage.setItem('firstName', data.firstName);
            localStorage.setItem('lastName', data.lastName);
            localStorage.setItem('token', data.token);
            
            console.log(localStorage.getItem('userId'));
            console.log(localStorage.getItem('userName'));
            console.log(localStorage.getItem('firstName'));
            console.log(localStorage.getItem('lastName'));
            console.log(localStorage.getItem('token'));
            
            window.location.assign('/newsFeed.html');

        }

    })
    // Why the Catch Block is not working here?
    // .catch(err => console.log('sf'))
    ;

    
}

SignInBtn.addEventListener('click', userSignIn);
// userSignIn();