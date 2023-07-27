
const newFormHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('#post-id').value;
  const content = document.querySelector('#comment-content').value.trim();
  console.log("comment-content=" + commentContent + "for post-id=" + post_id);
  if (commentContent) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

  