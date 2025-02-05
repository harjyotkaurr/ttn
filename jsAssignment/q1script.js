document.getElementById('fetchButton').onclick = function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const container = document.getElementById('userContainer');
            container.innerHTML = '';
            users.forEach(user => {
                const div = document.createElement('div');
                div.className = 'user';
                div.innerHTML = `<strong>${user.name}</strong><br>Email: ${user.email}<br>Phone: ${user.phone}`;
                container.appendChild(div);
            });
    });
};
