

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fetchButton');
    const container = document.getElementById('userContainer');

    button.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                container.innerHTML = '';

                users.forEach(user => {
                    const userDiv = document.createElement('div');
                    userDiv.classList.add('user-card');

                    const name = document.createElement('h3');
                    name.textContent = user.name;

                    const email = document.createElement('p');
                    email.textContent = `Email: ${user.email}`;

                    const phone = document.createElement('p');
                    phone.textContent = `Phone: ${user.phone}`;

                    userDiv.appendChild(name);
                    userDiv.appendChild(email);
                    userDiv.appendChild(phone);

                    container.appendChild(userDiv);
                });
            })
            .catch(error => {
                container.innerHTML = '<p class="error">Failed to fetch data.</p>';
                console.error('Error fetching users:', error);
            });
    });
});
