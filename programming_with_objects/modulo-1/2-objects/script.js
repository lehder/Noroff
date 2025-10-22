// Swap out the values inside the html with the values from the post object
// innerHTML is not safe when users can create content

//code for showing one post
/* container.innerHTML = `
<div class="post">
 <h2>${post.name}</h2>
 <p>${post.content}</p>
 <p>${post.createdAt}</p>
</div>
`; */

function createPost(userID, displayName, content) {
    // TASK: Make postID always be a new unique id
  
    //This solution for id "breaks" if someone creates a post, then deletes, then that id will be "re-used"
    return {
      postID: posts[posts.length - 1].postID + 1,
      userID: userID,
      displayName: displayName,
      content: content,
      createdAt: new Date().toISOString(),
      comments: [],
    };
  }
  
  const post = {
    postID: 1,
    userID: 1,
    displayName: "Ludvig",
    content: "My first post",
    createdAt: "2025-10-15",
    comments: [
      {
        userID: 1,
        displayName: "Ludvig",
        content: "Comment on my own post",
        createdAt: "2025-10-15",
      },
      {
        userID: 2,
        displayName: "Henrik",
        content: "Nice!",
        createdAt: "2025-10-15",
      },
    ],
  };
  
  // Create 4 DIFFERENT posts, and add them to the array
  const posts = [];
  
  posts.push(post);
  posts.push(createPost(1, "Ludvig", "My second post"));
  posts.push(createPost(1, "Ludvig", "My Third post"));
  posts.push(createPost(2, "Henrik", "Henrik's first post"));
  
  // I want to comment on the third post, how can i do this in js
  // CODE HERE
  
  // SELECTS AND ADDS COMMENT BASED ON INDEX
  posts[2].comments.push({
    displayName: "New user",
    content: "Comment from js",
  });
  
  //FINDS AND ADDS COMMENT BASED ON IF CONTENT IS THE SAME
  posts.forEach((post) => {
    if (post.content == "My Third post") {
      post.comments.push({
        displayName: "New user",
        content: "Comment from loop in js",
      });
    }
  });
  
  const container = document.querySelector(".post-container");
  
  posts.forEach((post) => {
    const date = new Date(post.createdAt);
  
    container.innerHTML += `
      <div class="post">
          <h2>${post.displayName}</h2>
          <p>${post.content}</p>
          <p>${date.toLocaleDateString()}</p>
      </div>`;
  
    if (post.comments && post.comments.length) {
      post.comments.forEach((comment) => {
        container.innerHTML += `
          <h3>${comment.content} - ${comment.displayName}</h3>
          `;
      });
    }
  });
  
  // [] empty
  // [1,2,3] not empty