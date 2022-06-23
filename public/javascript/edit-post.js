// updating post
async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('textarea[name="edit-post-title"]').value.trim();
  const content = document.querySelector('textarea[name="edit-post-content"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
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

// delete post
async function deletePostHandler(event) {
  event.preventDefault();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  })
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#update-post').addEventListener('click', editFormHandler);
document.querySelector('#delete-post').addEventListener('click', deletePostHandler);