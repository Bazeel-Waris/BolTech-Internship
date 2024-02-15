// Variables for Post Elements
const postsContent = document.getElementById('post-container');
const postCount = document.querySelector('#post-count > span');
const likesCount = document.getElementById('reactions__likes');

// Variables to get Comments & its Pop-Up Elements
const commentsPopUp = document.querySelector('.comments');
const commentsCloseBtn = document.getElementById('post__comments--close');
const commentsContainer = document.querySelector('.post__comments');

// Tabs Variable
const allPostsBtn = document.querySelector('.allPosts__tab');
const myPostsBtn = document.querySelector('.myPosts__tab');

// Add Post Variables
const form = document.getElementById('addPost__form');

// Global Array for Local Storage
let newPosts = [];

// Global Array for Concatenating
let totalPosts = [];

// 
if(localStorage.getItem('newPosts') === null) {
    localStorage.setItem('newPosts', newPosts);
}

function addPost(event) {
    event.preventDefault();
    
    // If Local Storage is not Empty, then parse it
    if(localStorage.getItem('newPosts') !== '') {
        newPosts = JSON.parse(localStorage.getItem('newPosts'));
    }

    const postTitle = form.firstElementChild.firstElementChild;
    const postBody = form.firstElementChild.nextElementSibling.firstElementChild;
    const addPostAPI = `https://dummyjson.com/posts/add`;

    const addPostAPIOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: postTitle.value,
            body: postBody.value,
            userId: JSON.parse(localStorage.getItem('loggedInUser')).id,
            reactions: 1
        })
    };
   
    const response = fetch(addPostAPI, addPostAPIOptions);

    response.then(res => res.json())
    .then(data => {

        data.id = Math.floor(Math.random() * (300 - 200 + 1)) + 200 ;
        // New Added Post is add to newPosts Array Variable
        newPosts.push(data);

        // All the Posts added to newPosts Variable is stores in local Storage
        localStorage.setItem('newPosts', JSON.stringify(newPosts));
    });
    
}

form.addEventListener('submit', addPost);

// Displays Posts of Current User
function getMyPosts() {

    // All POSTS TAB Button
    allPostsBtn.style.backgroundColor = 'transparent';
    allPostsBtn.style.color = '#0389C9';

    // My POSTS TAB Button
    myPostsBtn.style.backgroundColor = '#0389C9';
    myPostsBtn.style.color = '#fff';

    // Getting User Id of the current Logged In User from Local Storage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    const myPostsAPI = `https://dummyjson.com/posts/user/${loggedInUser.id}`;

    const myPosts = fetch(myPostsAPI);

    myPosts.then(res => res.json())
    .then(data => {

        // Empty the Container where the Posts to be displayed
        postsContent.innerHTML = '';

        // Getting Array of Posts from Local Storage
        let newPosts = JSON.parse(localStorage.getItem('newPosts'));

        // Concatenating Local Storage Array of Posts & Arrays from Posts API
        totalPosts = [...newPosts, ...data.posts];
        console.log(totalPosts);

        totalPosts.forEach(post => {

            // Displaying Single Post in the Post's News Feed Page
            const postHTML = `
                <div class="posts__singlePost">

                    <!-- Post's User Information -->
                    <div class="singlePost__userInfo">
                        <img src="${loggedInUser.image}" alt="">
                        <div class="singlePost__userInfo--name">
                            <h4>${loggedInUser.firstName} ${loggedInUser.lastName}</h4>
                            <p>@${loggedInUser.username}</p>
                        </div>
                    </div>

                    <!-- Post Content -->
                    <div class="singlePost__content">
                        <h1>${post.title}</h1>
                        <p>
                            ${post.body} <a href="#">See more</a>
                        </p>
                    </div>

                    <!-- Post call to Actions -->
                    <div class="call_to_act">
                        <ul class="reactions">
                            <li><span class="reactions__thumb"><i class="fa-solid fa-thumbs-up"></i></span> ${ post.reactions > 1 ? post.reactions + ' likes': post.reactions + ' like' } </li>
                            <li class="reaction__comments" onclick="getCommentsData(${post.id})"><i class="fa-regular fa-comment"></i> Comments </li>
                        </ul>

                        <!-- Edit & Delete -->
                        <ul class="call-to-act__edit-delete">
                            <li id="editBtn"><i class="fa-regular fa-pen-to-square"></i></li>
                            <li id="deleteBtn" onclick="deletePost(${post.id}, this)"><i class="fa-solid fa-trash"></i></li>
                        </ul>

                    </div>
                    
                </div>
            `;

            postsContent.innerHTML += postHTML;          
    
        });

    });

}

// Event Listener to display All the Posts of Current User
myPostsBtn.addEventListener('click', getMyPosts);

// It Would Display all the posts ON PAGE LOAD
function getAllPosts() {
    // localStorage.setItem('newPosts', newPosts);
    
    // All POSTS TAB Button
    myPostsBtn.style.backgroundColor = 'transparent';
    myPostsBtn.style.color = '#0389C9';

    // My POSTS TAB Button
    allPostsBtn.style.backgroundColor = '#0389C9';
    allPostsBtn.style.color = '#fff';

    const allPostsAPI = 'https://dummyjson.com/posts';
    const allPosts = fetch(allPostsAPI);

    allPosts.then(res => res.json())
    .then(data => {

        postsContent.innerHTML = '';

        // // Getting Array of Posts from Local Storage
        // let newPosts = JSON.parse(localStorage.getItem('newPosts'));

        // // Concatenating Local Storage Array of Posts & Arrays from Posts API
        // totalPosts = [...newPosts, ...data.posts];
        // console.log(totalPosts);
        
        if(localStorage.getItem('newPosts') === '') {
            totalPosts = [...data.posts];
        }
        else {
            // Getting Array of Posts from Local Storage
            let newPosts = JSON.parse(localStorage.getItem('newPosts'));
            // Concatenating Local Storage Array of Posts & Arrays from Posts API
            totalPosts = [...newPosts, ...data.posts];
        }

        totalPosts.forEach(post => {
            // Displaying All the Posts
            postTemplate(post);   
        });

        // Total Posts Count in Header
        postCount.innerHTML = data.limit;
    });

   
}

getAllPosts();

// Event Listener to display All the Posts of Current User
allPostsBtn.addEventListener('click', getAllPosts);

// It is Defining the Post-Template for a Single Post
function postTemplate(post) {

    // EndPoint Fetching the Single User Based on User's ID
    const singleUserApi = `https://dummyjson.com/users/${post.userId}`;

    // Resolving the Promise that returns Response for user for the given Single Post
    const userInfo = fetch(singleUserApi);
    
    userInfo.then(res => res.json())
    .then(user => {

        
            // Fetching the Comments to get just only get the comment Counts for the given post 
            const commentsAPI = `https://dummyjson.com/comments/post/${post.id}`;

            const response = fetch(commentsAPI);

            response.then(res => { 
                // console.log(res);
                return res.json();
            }) 
            .then(comments => {

                // Displaying Single Post in the Post's News Feed Page
                const postHTML = `
                    <div class="posts__singlePost">

                        <!-- Post's User Information -->
                        <div class="singlePost__userInfo">
                            <img src="${user.image}" alt="">
                            <div class="singlePost__userInfo--name">
                                <h4>${user.firstName} ${user.lastName}</h4>
                                <p>@${user.username}</p>
                            </div>
                        </div>

                        <!-- Post Content -->
                        <div class="singlePost__content">
                            <h1>${post.title}</h1>
                            <p>
                                ${post.body} <a href="#">See more</a>
                            </p>
                        </div>

                        <!-- Post call to Actions -->
                        <div class="call_to_act">
                            <ul class="reactions">
                                <li><span class="reactions__thumb"><i class="fa-solid fa-thumbs-up"></i></span> ${ (post.reactions > 1 && post.reactions !== undefined) ? post.reactions + ' likes': 1 + ' like' } </li>
                                <li class="reaction__comments" onclick="getCommentsData(${post.id})"><i class="fa-regular fa-comment"></i> ${(comments.total > 1 && comments.total !== undefined) ? comments.total + ' Comments' : '1 Comment'}  </li>
                            </ul>

                            <!-- Edit & Delete -->
                            <ul class="call-to-act__edit-delete">
                            
                            </ul>

                        </div>
                        
                    </div>
                `;

                postsContent.innerHTML += postHTML;
            })

        
        
    });

}


function postTemplateGPT(post) {
    let user;
    // EndPoint Fetching the Single User Based on User's ID
    const singleUserApi = `https://dummyjson.com/users/${post.userId}`;

    // Resolving the Promise that returns Response for user for the given Single Post
    const userInfo = fetch(singleUserApi);
    
    userInfo.then(res => {
        if (!res.ok) {
            throw new Error(`Failed to fetch user: ${res.status} ${res.statusText}`);
        }
        return res.json();
    })
    .then(userData => {
        user = userData; // Assign userData to the broader scoped user variable

            // Fetching the Comments to get just only get the comment Counts for the given post
            const commentsAPI = `https://dummyjson.com/comments/post/${post.id}`;
            if(post.id !== 151)
                return fetch(commentsAPI);     
            else
                throw new Error("Already in the local storage!")
        
    })
    .then(res => {
        if(!res.ok) {
            throw new Error(`Failed to fetch comments: ${res.status} ${res.statusText}`);
        }
        return res.json();
    }) 
    .then(comments => {

        // Displaying Single Post in the Post's News Feed Page
        const postHTML = `
            <div class="posts__singlePost">

                <!-- Post's User Information -->
                <div class="singlePost__userInfo">
                    <img src="${user.image}" alt="">
                    <div class="singlePost__userInfo--name">
                        <h4>${user.firstName} ${user.lastName}</h4>
                        <p>@${user.username}</p>
                    </div>
                </div>

                <!-- Post Content -->
                <div class="singlePost__content">
                    <h1>${post.title}</h1>
                    <p>
                        ${post.body} <a href="#">See more</a>
                    </p>
                </div>

                <!-- Post call to Actions -->
                <div class="call_to_act">
                    <ul class="reactions">
                        <li><span class="reactions__thumb"><i class="fa-solid fa-thumbs-up"></i></span> ${ (post.reactions > 1 && post.reactions !== undefined) ? post.reactions + ' likes': 1 + ' like' } </li>
                        <li class="reaction__comments" onclick="getCommentsData(${post.id})"><i class="fa-regular fa-comment"></i> ${(comments.total > 1 && comments.total !== undefined) ? comments.total + ' Comments' : '1 Comment'}  </li>
                    </ul>

                    <!-- Edit & Delete -->
                    <ul class="call-to-act__edit-delete">
                        <li id="editBtn"><i class="fa-regular fa-pen-to-square"></i></li>
                        <li id="deleteBtn"><i class="fa-solid fa-trash"></i></li>
                    </ul>

                </div>
                
            </div>
        `;

        postsContent.innerHTML += postHTML;
    })
    .catch(err => {
        console.log(err+' local');
    });


}


// Getting & Displaying Comments in Pop-Up From the Comments API
function getCommentsData(postId){

    // Fetching the Comments
    const commentsAPI = `https://dummyjson.com/comments/post/${postId}`;

    const response = fetch(commentsAPI);

    response.then(response => response.json())
    .then(comments => {

        // Creating the Cross Butoon for Closing the Comments Pop Up
        let commentsHTML = `
            <!-- Close Button -->
            <div id="post__comments--close" onClick="closeComments()">
                <i class="fa-solid fa-rectangle-xmark"></i>
            </div>
        `;

        // Displaying Comments By Iterating the array from CommentsAPI
        comments.comments.forEach((comment, i) => {
            if(i === 0) {
                commentsHTML += `
                    <!-- Post's User Information -->
                    <div class="post__comments--userInfo">
                        <img src="./images/user.png" alt="">
                        <div class="post__comments--userInfo-name">
                            <h4>${comment.user.username}</h4>
                            <p>
                                ${comment.body}
                            </p>
                        </div>
                    </div>
                `;
                commentsContainer.innerHTML = commentsHTML;
            } else {
                commentsHTML = `
                    <!-- Post's User Information -->
                    <div class="post__comments--userInfo">
                        <img src="./images/user.png" alt="">
                        <div class="post__comments--userInfo-name">
                            <h4>${comment.user.username}</h4>
                            <p>
                                ${comment.body}
                            </p>
                        </div>
                    </div>
                `;
                commentsContainer.innerHTML += commentsHTML;
            }

        })
    });

    // Displaying Comments Pop-Up
    commentsPopUp.style.display = 'flex';

}

// Closing Comments Pop-Up
function closeComments() {
    commentsPopUp.style.display = 'none';
}


// Delete a Post
function deletePost(postId, e) {
    console.log(e.parentElement.parentElement.parentElement.remove());
    let browser = JSON.parse(localStorage.getItem('newPosts')) || [];
        
    const b = browser.map(post => {
        return post.id;
    });

    if(b.includes(postId)) {
        console.log('working', b.includes(postId), browser, postId);
        console.log(browser.splice(browser.indexOf(browser.find(post => post.id === postId)), 1));
        localStorage.setItem('newPosts', JSON.stringify(browser))
    } else {
        
        const deleteAPI = `https://dummyjson.com/posts/${postId}`;

        fetch(deleteAPI, {
            method: 'DELETE'
        })
        .then(res => {
            if(!res.ok) {
                throw new Error('Error Occured!');
            }
            return res.json();
        })
        .then(data => {
            console.log(`Post Deleted At: ${data.deletedOn} from the Given Api`);
        })
        .catch(err => {
            console.log(err)
            console.log(JSON.parse(localStorage.getItem('newPosts')));
        });

    }
    
    
}

function updatePost() {
    
}