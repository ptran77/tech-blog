// makes a post request to the database to save the new post
async function addFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('textarea[name="new-post-title"]').value.trim();
  const content = document.querySelector('textarea[name="new-post-content"]').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#add-post').addEventListener('click', addFormHandler);