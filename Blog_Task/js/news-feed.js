
const postsContent = document.getElementById('post-container');
const postCount = document.querySelector('#post-count > span');
const likesCount = document.getElementById('reactions__likes');

let commentsContainer = document.querySelector('.comments');


function getAllPosts() {
    
    const postsApi = 'https://dummyjson.com/posts';
    const posts = fetch(postsApi);

    posts.then(res => res.json())
    .then(data => {

        data.posts.forEach(post => {
            // Displaying All the Posts
            postTemplate(post);   
        });

        // Total Posts Count in Header
        postCount.innerHTML = data.limit;
    });

   
}

getAllPosts();

async function postTemplate(post) {

        // EndPoint Fetching the Single User Based on User's ID
        const singleUserApi = `https://dummyjson.com/users/${post.userId}`;

        // Resolving the Promise that returns Response for user for the given Single Post
        const userInfo = await fetch(singleUserApi);
        let user = await userInfo.json();

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
                        <li><span class="reactions__thumb"><i class="fa-solid fa-thumbs-up"></i></span> ${ post.reactions > 1 ? post.reactions + ' likes': post.reactions + ' like' } </li>
                        <li class="reaction__comments"><i class="fa-regular fa-comment"></i> Comments </li>
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

}

const commentsBtn = document.querySelectorAll('.reaction__comments');
console.log(commentsBtn);f