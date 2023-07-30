
const newPostButtonHandler = async (event) => {
  // const postId = document.querySelector('#post-id').value;
  // console.log("in newPostButtonHandler, user id is " + postId);
  
  // If the user is already logged in, redirect the request to another route
    res.render('addPost', {
      // logged_in: req.session.logged_in      
    })
};


document
  .querySelector('.add-post-button')
  .addEventListener('click', newPostButtonHandler);


  