    let users = [];
    function toggleForm() {
        const form = document.getElementById("userForm");
        form.style.display = form.style.display === "none" ? "block" : "none";
    }
    document.getElementById("userForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const index = document.getElementById("userIndex").value;

        if (index === "") {
            users.push({ name, email });
        } else {
            users[index] = { name, email };
            document.getElementById("userIndex").value = "";
        }

        this.reset();
        displayUsers();
    });

    function displayUsers() {
        const list = document.getElementById("userList");
        list.innerHTML = "";

        users.forEach((user, index) => {
            list.innerHTML += `
                <div class="user">
                    <p><strong>${user.name}</strong></p>
                    <p>${user.email}</p>
                    <div class="actions">
                        <button class="edit" onclick="editUser(${index})">Edit</button>
                        <button class="delete" onclick="deleteUser(${index})">Delete</button>
                    </div>
                </div>
            `;
        });
    }

    function editUser(index) {
        document.getElementById("name").value = users[index].name;
        document.getElementById("email").value = users[index].email;
        document.getElementById("userIndex").value = index;
        document.getElementById("userForm").style.display = "block";
    }

    function deleteUser(index) {
        users.splice(index, 1);
        displayUsers();
    }
