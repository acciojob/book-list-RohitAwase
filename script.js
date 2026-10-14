        const bookForm = document.getElementById("book-form");
        const titleInput = document.getElementById("title");
        const authorInput = document.getElementById("author");
        const isbnInput = document.getElementById("isbn");
        const bookList = document.getElementById("book-list");

        bookForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const title = titleInput.value.trim();
            const author = authorInput.value.trim();
            const isbn = isbnInput.value.trim();

            if (!title || !author || !isbn) {
                return;
            }

            const row = document.createElement("tr");

            [title, author, isbn].forEach(function (value) {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            const actionCell = document.createElement("td");
            const deleteButton = document.createElement("button");

            deleteButton.type = "button";
            deleteButton.className = "delete";
            deleteButton.textContent = "Clear";

            deleteButton.addEventListener("click", function () {
                row.remove();
            });

            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);
            bookList.appendChild(row);

            bookForm.reset();
            titleInput.focus();
        });