document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('api-form');
  const dataContainer = document.getElementById('data-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const apiUrl = document.getElementById('api-url').value;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        dataContainer.textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        dataContainer.textContent = `Error: ${error.message}`;
      });
  });
});
