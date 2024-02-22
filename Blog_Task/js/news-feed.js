// Variables for Post Elements
const postsContent = document.getElementById('post-container');
const postCount = document.querySelector('#post-count > span');
// Logout Button
const logoutBtn = document.getElementById('logout');

const likesCount = document.getElementById('reactions__likes');
const contentSection = document.querySelector('.content');

// Variables to get Comments & its Pop-Up Elements
const commentsPopUp = document.querySelector('.comments');
const commentsCloseBtn = document.getElementById('post__comments--close');
const commentsContainer = document.querySelector('.post__comments');

// Tabs Variable
const allPostsBtn = document.querySelector('.allPosts__tab');
const myPostsBtn = document.querySelector('.myPosts__tab');

// Add Post Variables
const form = document.getElementById('addPost__form');

// variable for search field
const searchBar = document.getElementById('search-field');

// Current LoggedIn User 
const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Edit Section Variables
// Getting Edit Section in the required Variable
const EditScreenBtn = document.querySelector('.edit');

// Global Array for Local Storage
let newPosts = [];

// Global Array for Concatenating
let totalPosts = [];

// Flag Variable to Detect the All Posts Tab & My-posts
let flag = false;

// 
// let filterDeletedPosts;

// Initializing Posts to Local Storage!
if(localStorage.getItem('newPosts') === null) {
    localStorage.setItem('newPosts', JSON.stringify(newPosts));
}

// allApiPosts
// let allApiPosts = [];

function addPost(event) {
    event.preventDefault();
    
    // If Local Storage is not Empty, then parse it
    if(localStorage.getItem('newPosts') !== '') {
        newPosts = JSON.parse(localStorage.getItem('newPosts')) || [];
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
            reactions: 0
        })
    };
   
    const response = fetch(addPostAPI, addPostAPIOptions);

    response.then(res => res.json())
    .then(data => {

        data.id = Math.floor(Math.random() * (300 - 200 + 1)) + 200 ;
        // New Added Post is add to newPosts Array Variable
        newPosts.unshift(data);

        // All the Posts added to newPosts Variable is stores in local Storage
        localStorage.setItem('newPosts', JSON.stringify(newPosts));
       
        if(flag === false) {
            getAllPosts();
        } else {
            getMyPosts();
        }

        postTitle.value = '';
        postBody.value = '';
    });
}

form.addEventListener('submit', addPost);

// Displays Posts of Current User
function getMyPosts() {

    flag = true;
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
        
        // totalPosts = [...newPosts, ...data.posts];

        // totalPosts.forEach(post => {

        //     // Displaying Single Post in the Post's News Feed Page
        //     const postHTML = `
        //         <div class="posts__singlePost">

        //             <!-- Post's User Information -->
        //             <div class="singlePost__userInfo">
        //                 <img src="${loggedInUser.image}" alt="">
        //                 <div class="singlePost__userInfo--name">
        //                     <h4>${loggedInUser.firstName} ${loggedInUser.lastName}</h4>
        //                     <p>@${loggedInUser.username}</p>
        //                 </div>
        //             </div>

        //             <!-- Post Content -->
        //             <div class="singlePost__content">
        //                 <h1>${post.title}</h1>
        //                 <p>
        //                     ${post.body} 
        //                 </p>
        //             </div>

        //             <!-- Post call to Actions -->
        //             <div class="call_to_act">
        //                 <ul class="reactions">
        //                     <li><span class="reactions__thumb"><i class="fa-solid fa-thumbs-up"></i></span> ${ post.reactions > 1 ? post.reactions + ' likes': post.reactions + ' like' } </li>
        //                     <li class="reaction__comments" onclick="getCommentsData(${post.id})"><i class="fa-regular fa-comment"></i> Comments </li>
        //                 </ul>

        //                 <!-- Edit & Delete -->
        //                 <ul class="call-to-act__edit-delete">
        //                     <li id="editBtn" onclick="editPost(${post.id});"><i class="fa-regular fa-pen-to-square"></i></li>
        //                     <li id="deleteBtn" onclick="deletePost(${post.id}, this)"><i class="fa-solid fa-trash"></i></li>
        //                 </ul>

        //             </div>
                    
        //         </div>
        //     `;

        //     postsContent.innerHTML += postHTML;          
    
        // });

        
         // Set allApiPosts in local Storage
         if(JSON.parse(localStorage.getItem('myApiPosts')) === null) {

            const apiData = data.posts;
            apiData.forEach(post => {
                post.isDeleted = false;
                console.log('check');
            });
            localStorage.setItem('myApiPosts', JSON.stringify(apiData));
        }

        let myApiPosts = JSON.parse(localStorage.getItem('myApiPosts'));

        let deletedPosts = JSON.parse(localStorage.getItem('allApiPosts')).filter(post => post.isDeleted === true);

        deletedPosts.forEach(deletedPost => {
            myApiPosts.forEach(post => {
                if(deletedPost.id === post.id) {
                    post.isDeleted = true;
                }
            })
        })
    
        localStorage.setItem('myApiPosts', JSON.stringify(myApiPosts));
       
        let filterDeletedMyPosts = JSON.parse(localStorage.getItem('myApiPosts')).filter(post => post.isDeleted === false);

        // console.log(filterDeletedMyPosts);
        let displayAllPosts = [...newPosts, ...filterDeletedMyPosts]
        displayAllPosts.forEach(post => {
            // Displaying All Available Posts
            if(!post.isDeleted) {
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
                                    ${post.body} 
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
                                    <li id="editBtn" onclick="editPost(${post.id});"><i class="fa-regular fa-pen-to-square"></i></li>
                                    <li id="deleteBtn" onclick="deletePost(${post.id}, this)"><i class="fa-solid fa-trash"></i></li>
                                </ul>

                            </div>
                            
                        </div>
                    `;

            postsContent.innerHTML += postHTML;   
            }

        });

    });

}

// Event Listener to display All the Posts of Current User
myPostsBtn.addEventListener('click', getMyPosts);

// It Would Display all the posts ON PAGE LOAD
function getAllPosts() {
    // localStorage.setItem('newPosts', newPosts);
    flag = false;

    // post added by user
    let newPosts = JSON.parse(localStorage.getItem('newPosts'));

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
        
        if(localStorage.getItem('newPosts') === '') {
            totalPosts = [...data.posts];
        }
        else {
            // Getting Array of Posts from Local Storage
            // let newPosts = JSON.parse(localStorage.getItem('newPosts'));
            // let editPosts = JSON.parse(localStorage.getItem('editPosts'));

            // const filterPosts = 

            // Concatenating Local Storage Array of Posts & Arrays from Posts API
            // totalPosts = [...newPosts, ...data.posts];
        }
        // console.log(totalPosts)

         
        // Set allApiPosts in local Storage
        if(JSON.parse(localStorage.getItem('allApiPosts')) === null) {

            const apiData = data.posts;
            apiData.forEach(post => {
                post.isDeleted = false;
                console.log('check');
            });
            localStorage.setItem('allApiPosts', JSON.stringify(apiData));
            
            
        }

        let allApiPosts = JSON.parse(localStorage.getItem('allApiPosts'));

        if(localStorage.getItem('myApiPosts') !== null) {
            let deletedPosts = JSON.parse(localStorage.getItem('myApiPosts')).filter(post => post.isDeleted === true);

            deletedPosts.forEach(deletedPost => {
                allApiPosts.forEach(post => {
                    if(deletedPost.id === post.id) {
                        post.isDeleted = true;
                    }
                })
            })
        
            localStorage.setItem('allApiPosts', JSON.stringify(allApiPosts));
        }

        let filterDeletedPosts = JSON.parse(localStorage.getItem('allApiPosts')).filter(post => post.isDeleted === false);

        totalPosts = [...newPosts, ...filterDeletedPosts];
      
        totalPosts.forEach(post => {
            // Displaying All Available Posts
            if(!post.isDeleted)
                postTemplate(post);  

        });
         
        // Total Posts Count in Header
        postCount.innerHTML = totalPosts.length;
    });

   
}
getMyPosts();
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

        const localPostId = JSON.parse(localStorage.getItem('newPosts')).map(post => post.id);

        if(!localPostId.includes(post.id)) {
            // Fetching the Comments to get just only get the comment Counts for the given post
            const commentsAPI = `https://dummyjson.com/comments/post/${post.id}`;

            const response = fetch(commentsAPI);

            response.then(res => { 
                // console.log(res);
                return res.json();
            }) 
            .then(comments => {

                // Displaying Single Post in the Post's News Feed Page
                let postHTML = `
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
                                ${post.body} 
                            </p>
                        </div>

                        <!-- Post call to Actions -->
                        <div class="call_to_act">
                            <ul class="reactions">
                                <li><span class="reactions__thumb"><i class="fa-solid fa-thumbs-up"></i></span> ${ (post.reactions > 1 && post.reactions !== undefined) ? post.reactions + ' likes': 1 + ' like' } </li>
                                <li class="reaction__comments" onclick="getCommentsData(${post.id})"><i class="fa-regular fa-comment"></i> ${(comments.total > 1 && comments.total !== undefined) ? comments.total + ' Comments' : '1 Comment'}  </li>
                            </ul>
                    `

                    if(post.userId === currentUser.id) {
                        postHTML += `<!-- Edit & Delete -->
                        <ul class="call-to-act__edit-delete">
                            <li id="editBtn" onclick="editPost(${post.id});"><i class="fa-regular fa-pen-to-square"></i></li>
                            <li id="deleteBtn" onclick="deletePost(${post.id}, this)"><i class="fa-solid fa-trash"></i></li>
                        </ul>`
                    }
                      
                postHTML += `    
                        </div>
                    </div>
                `;

                postsContent.innerHTML += postHTML;
            }) 
        } else {
            console.log('working');
                // Displaying Single Post in the Post's News Feed Page
                let postHTML = `
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
                            ${post.body} 
                        </p>
                    </div>

                    <!-- Post call to Actions -->
                    <div class="call_to_act">
                        <ul class="reactions">
                            <li><span class="reactions__thumb"><i class="fa-solid fa-thumbs-up"></i></span> ${ (post.reactions > 1 && post.reactions !== undefined) ? post.reactions + ' likes': 1 + ' like' } </li>
                            <li class="reaction__comments" onclick="getCommentsData(${post.id})"><i class="fa-regular fa-comment"></i> Comments  </li>
                        </ul>
                `

                if(post.userId === currentUser.id) {
                    postHTML += `<!-- Edit & Delete -->
                    <ul class="call-to-act__edit-delete">
                        <li id="editBtn" onclick="editPost(${post.id}, this)"><i class="fa-regular fa-pen-to-square"></i></li>
                        <li id="deleteBtn" onclick="deletePost(${post.id}, this)"><i class="fa-solid fa-trash"></i></li>
                    </ul>`
                }
                
            postHTML += `    
                    </div>
                </div>
            `;

            postsContent.innerHTML += postHTML;
        }
      
        
        
    });

}


// Getting & Displaying Comments in Pop-Up From the Comments API

function getCommentsData(postId){
    
    let commentsHTML;
    // console.log(comments, postId);
    const localPost = JSON.parse(localStorage.getItem('newPosts')).map(post => post.id);
    if(localPost.includes(postId)){
        commentsHTML = `
                <!-- Post's User Information -->
                <h1>Nothing has been Commented!</h1>
            `;
            commentsContainer.innerHTML = commentsHTML;
    }
    else {
        // Fetching the Comments
        const commentsAPI = `https://dummyjson.com/comments/post/${postId}`;

        const response = fetch(commentsAPI);

        response.then(response => response.json())
        .then(comments => {

            // Creating the Cross Butoon for Closing the Comments Pop Up
            commentsHTML = `
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
    }
    // Displaying Comments Pop-Up
    commentsPopUp.style.display = 'flex';

}

// Closing Comments Pop-Up
function closeComments() {
    commentsPopUp.style.display = 'none';

    // Clearing Comments from the container
    commentsContainer.innerHTML = '';
}

// Delete a Post
function deletePost(postId, e) {
    console.log(e);
    let browser = JSON.parse(localStorage.getItem('newPosts')) || [];

    const b = browser.map(post => post.id);

    if(b.includes(postId)) {
        browser.splice(browser.indexOf(browser.find(post => post.id === postId)), 1);
        localStorage.setItem('newPosts', JSON.stringify(browser));
        alert(`User's Post has been Deleted successfully!`);
        // Deleting Post from DOM Also
        // e.parentElement.parentElement.parentElement.remove();
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
            // console.log(`Post Deleted At: ${data.deletedOn} from the Given Api`);
            console.log(flag);
            if(flag) {
                let filterDeletedMyPosts = JSON.parse(localStorage.getItem('myApiPosts')) || [];

                // index of post to be delete
                let index = filterDeletedMyPosts.indexOf(filterDeletedMyPosts.find(post => post.id === data.id ))
                filterDeletedMyPosts[index].isDeleted = true;
                console.log(filterDeletedMyPosts[index]);
                localStorage.setItem('myApiPosts',JSON.stringify(filterDeletedMyPosts));
            } else {
                let filterDeletedPosts = JSON.parse(localStorage.getItem('allApiPosts')) || [];

                // index of post to be delete
                let index = filterDeletedPosts.indexOf(filterDeletedPosts.find(post => post.id === data.id ))
                filterDeletedPosts[index].isDeleted = true;
                console.log(filterDeletedPosts[index]);
                localStorage.setItem('allApiPosts',JSON.stringify(filterDeletedPosts));
            }
            alert(`${data.title} has been Deleted Successfully!`);
        
        })
        .catch(err => {
            console.log(err)
            console.log(JSON.parse(localStorage.getItem('newPosts')));
        });

    }
    // Deleting Post from DOM Also
    e.parentElement.parentElement.parentElement.remove();
    
    
}

function editPost(postId, e) {
// console.log(e);
// console.log(postId);

    const localBrowserPost = JSON.parse(localStorage.getItem('newPosts')) || [];
    
    // const allApiPosts = JSON.parse(localStorage.getItem('allApiPosts')) || [];

    const browserPostIDs = localBrowserPost.map(post => post.id);

    EditScreenBtn.style.display = 'flex';

    if(browserPostIDs.includes(postId)) {

        // Finding the post to be Edited from LocalStorage
        const currentActivePost = localBrowserPost.find(post => post.id === postId);

        // HTML Component for Edit Screen
        const editScreenHTML = `
                    <div class="editPost">
                        <h2>Edit Post</h2>
                        <form id="editPost__form" method="PUT">
                            <div class="editPost__form--title">
                                <input type="text" value="${currentActivePost.title}"/>
                            </div>
                            <div class="editPost__form--description">
                                <textarea rows="5">${currentActivePost.body}</textarea>
                            </div>
                            <div class="editPost__form--btn">
                                <input type="button" onclick="updatePost(${postId});" value="UPDATE POST" />
                            </div>
                        </form>
                    </div>
                `;

        EditScreenBtn.firstElementChild.innerHTML = editScreenHTML;

    } else {

        // // Finding the post to be Edited from LocalStorage
        const myApiPosts = [...JSON.parse(localStorage.getItem('myApiPosts'))]
        const currentActivePost = myApiPosts.find(post => post.id === postId);
        console.log(currentActivePost);

        const getPostAPI = `https://dummyjson.com/posts/${postId}`;

        fetch(getPostAPI)
        .then(res => res.json())
        .then(post => {
        
            // HTML Component for Edit Screen
            const editScreenHTML = `
                    <div class="editPost">
                        <h2>Edit Post</h2>
                        <form id="editPost__form" method="PUT">
                            <div class="editPost__form--title">
                                <input type="text" value="${currentActivePost.title}"/>
                            </div>
                            <div class="editPost__form--description">
                                <textarea rows="5">${currentActivePost.body}</textarea>
                            </div>
                            <div class="editPost__form--btn">
                                <input type="button" onclick="updatePost(${currentActivePost.id});" value="UPDATE POST" />
                            </div>
                        </form>
                    </div>
                `;

                EditScreenBtn.firstElementChild.innerHTML = editScreenHTML;
        });
        
    }
    

}

function updatePost(postId) {

    const editForm = EditScreenBtn.firstElementChild.firstElementChild.lastElementChild;
    const editFormTitle = editForm.firstElementChild.firstElementChild;
    const editFormBody = editForm.firstElementChild.nextElementSibling.firstElementChild;

    const localBrowserPost = JSON.parse(localStorage.getItem('newPosts'));

    const browserPostIDs = localBrowserPost.map(post => post.id);

    // Checking that the post is from localhost or from API
    if(browserPostIDs.includes(postId)) {

        const editingPost = localBrowserPost.find(post => post.id === postId);
        const indexInLocalStorage = localBrowserPost.indexOf(editingPost);
        editingPost.title = editFormTitle.value;
        editingPost.body = editFormBody.value;
        
        localBrowserPost[indexInLocalStorage] = editingPost;
        localStorage.setItem('newPosts', JSON.stringify(localBrowserPost));

        if(flag) {
            getMyPosts();
        } else {
            getAllPosts();
        }

    } else {

        const updatePostAPI = `https://dummyjson.com/posts/${postId}`;

        const updatePostOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: editFormTitle.value,
                body: editFormBody.value
            })
        };

        fetch(updatePostAPI, updatePostOptions)
        .then(res => res.json())
        .then(updatedPost => {
            console.log('Updated Successfully!');
            // console.log(updatedPost);
            const updatedObject = updatedPost;
            updatedObject.isDeleted = false;
        
            // Accessing allApiPosts local Storage
            const allApiPosts = JSON.parse(localStorage.getItem('allApiPosts'));

            // finding & accessing specific post from allApiPosts local Storage
            const editingPost = allApiPosts.find(post => post.id === postId);
            
            // finding index of updating in allApiPosts local Storage
            const index = allApiPosts.indexOf(editingPost);

            allApiPosts[index] = updatedObject;

            // Updating the allApiPosts local Storage
            localStorage.setItem('allApiPosts', JSON.stringify(allApiPosts));
            
            if(localStorage.getItem('myApiPosts') !== null) {
                // Accessing myApiPosts local Storage
                const myApiPosts = JSON.parse(localStorage.getItem('myApiPosts'));

                // finding & accessing specific post from myApiPosts local Storage
                const editingPostInMyApi = myApiPosts.find(post => post.id === updatedObject.id);
                
                // finding index of updating in myApiPosts local Storage
                const indexOfEditingPostInMyApi = myApiPosts.indexOf(editingPostInMyApi);
    
                myApiPosts[indexOfEditingPostInMyApi] = updatedObject;
    
                // Updating the allApiPosts local Storage
                localStorage.setItem('myApiPosts', JSON.stringify(myApiPosts));
            }
             
            if(flag) {
                getMyPosts();
            } else {
                getAllPosts();
            }
        });
        
    }
    

    EditScreenBtn.style.display = 'none';
}

// Close Edit Screen Function
function closeEditScreen(e) {
   
    if(e.currentTarget === e.target) {
        e.currentTarget.style.display = 'none';
    }
}

EditScreenBtn.addEventListener('click', closeEditScreen);
commentsPopUp.addEventListener('click', closeEditScreen);

function search(e) {
    // console.log(e.currentTarget.value);

    const searchAPI = `https://dummyjson.com/posts/search?q=${e.currentTarget.value}`;

    // const userDataAPI = `https://dummyjson.com/users/${post.userId}`
    fetch(searchAPI)
    .then(res => res.json())
    .then(data => {
    
        const posts = data.posts;

        postsContent.innerHTML = '';

        if(posts.length === 0) {
            postsContent.innerHTML = `<div class="posts__singlePost">
                                        <h1 class="heading">NOT FOUND!</h2>
                                    </div>`;
        }
        else {
            posts.forEach(post => {
                // Displaying Single Post in the Post's News Feed Page
                    const postHTML = `
                    <div class="posts__singlePost">

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
                                <li class="reaction__comments" onclick="getCommentsData(${post.id})"><i class="fa-regular fa-comment"></i> Comments</li>
                            </ul>

                            <!-- Edit & Delete -->
                            <ul class="call-to-act__edit-delete">
                            
                            </ul>

                        </div>
                        
                    </div>
                `;

                postsContent.innerHTML += postHTML;
            });
        }

    });

    
    // console.log(contentSection);
}

searchBar.addEventListener('keyup', search);

// Logout 
function logout(event) {

    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('allApiPosts');
    localStorage.removeItem('myApiPosts');
    localStorage.removeItem('newPosts');
    window.location.assign('../index.html');
}

logoutBtn.addEventListener('click', logout);

