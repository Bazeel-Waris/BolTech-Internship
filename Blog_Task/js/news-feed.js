
const postsContent = document.getElementById('post-container');

function getAllPosts() {
    
    const postsApi = 'https://dummyjson.com/posts';

    const posts = fetch(postsApi);
    posts.then(res => res.json())
    .then(data => {
        data.posts.forEach(post => {

            const postHTML = `
                <div class="posts__singlePost">
                    <!-- Post's User Information -->
                    <div class="singlePost__userInfo">
                        <img src="./images/user.png" alt="">
                        <div class="singlePost__userInfo--name">
                            <h4>Full Name</h4>
                            <p>@username</p>
                        </div>
                    </div>

                    <!-- Post Content -->
                    <div class="singlePost__content">
                        <p>
                            ${post.body} <a href="#">See more</a>
                        </p>
                    </div>
                    <!-- Post call to Actions -->
                    <div class="call_to_act">
                        <ul class="reactions">
                            <li><span class="reactions__thumb"><i class="fa-solid fa-thumbs-up"></i></span> 2.8K Like</li>
                            <li><i class="fa-regular fa-comment"></i> 22 Comments</li>
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
            console.log(data.posts);
        });
    });
}

getAllPosts();