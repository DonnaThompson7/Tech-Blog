
const newFormHandler = async (event) => {
  event.preventDefault();
  const post_id = document.querySelector('#post-id').value;
  const content = document.querySelector('#comment-content').value.trim();
  console.log("&&&&&&&&&&&&&&&&&&& hit submit: comment-content=" + content + "for post-id=" + post_id);

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/posts/${post_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

  