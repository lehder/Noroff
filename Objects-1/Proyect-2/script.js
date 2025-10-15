function createPost(userID, displayName, content) {
    //TASK: Make postID always be a new unique id
    return {
        
        userID: userID,
        displayName: displayName,
        content: content,
        createdAt: new Date().toISOString(),
    }

}
const post = {
     postID: "",
     userID: 1,
    displayName:"Lehder",
    content: "My first post",
    createdAt: "2025-10-15",
    comments: [
        {
            userID: 1,
            displayName:"Ludving",
            content: "My first post",
            createdAt: "2025-10-15",  
        },
        {
            userID: 2,
            displayName:"Henrik",
            content: "Nice!",
            createdAt: "2025-10-15",  
        },

    ],
};

//Create 4 Diferent post, and add them to the array

const posts = [];

posts.push(post);
posts.push(createPost(1, "Lehder", "My second post"));
posts.push(createPost(1, "Ludvingr", "My this post"));
posts.push(createPost(2, "Henrik", "Henrik firs post"));

//I wan to comment on the third post, how can i do this in JS
//CODE HERE

/* posts[2].comments.push({
    displayName: "New user",
    content: "Comment from JS",
}); */

/* posts.forEach((post)=>{
    if (post.content == "My Third post"){
        post.comments.push({
            displayName: "New user",
            content: "Comment from JS"
        })
    }
    
}) */

const container = document.querySelector(".post-container");

//Swap out the value inside the html with the values from the post object
//innerHTML 

//code for showing one post

posts.forEach((post) => {
const date = new  Date(post.createdAt);


container.innerHTML += `
 <div class="post">
  <h2>${post.displayName}</h2>
  <p>${post.content}</p>
  <p>${date.toLocaleDateString()}</p>
</div>`;

if(post) {

}
});

if (post.comments && post.comments.length) {
    post.comments.forEach((comments)=>{
        container.innerHTML += `
        <h3>${comments.content}</h3>
        `;
    })
    console.log("has comments");
}


// if (!post.comments){
//     return;
//     if (!post.comments.length) {
//         console.log("commens is null")
//        }

// }


//[] empty
//[1,2,3] not empty
// const arr = [];
/* if (null) {
    console.log("1 is true");
}else {
    console.log("1 is false");
} */

// console.log({name: "test"})


