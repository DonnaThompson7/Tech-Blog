
const newFormHandler = async (event) => {
  event.preventDefault();
  const postId = document.querySelector('#post-id').value;
  console.log("post id is " + postId);
  
  const name = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-desc').value.trim();
  console.log("post-name=" + name + " and post-desc=" + description);
  
  if (name && description) {
    console.log("name and descrip are valid, so calling api/posts/${postId}");
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};

const delButtonHandler = async (event) => {
  const postId = document.querySelector('#post-id').value;
  console.log("in delButtonHandler, post id is " + postId);

    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
};


document
  .querySelector('.delete-button')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', newFormHandler);

  