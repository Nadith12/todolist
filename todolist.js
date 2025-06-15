<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Todo List</title>
</head>
<body>
  <h1>ToDoList</h1>

  <input type="text" class="input" placeholder="Type here">
  <button id="button">Add</button>
  <div class="div"></div>

  <script>
    let List = JSON.parse(localStorage.getItem('todoList')) || [];

    document.getElementById('button').onclick = function () {
      const inputElement = document.querySelector('.input');
      const inputValue = inputElement.value.trim();

      if (inputValue !== '') {
        List.push(inputValue);
        inputElement.value = '';
        updateLocalStorage();
        toDoList();
      }
    };

    function toDoList() {
      let elementHTML = '';

      for (let i = 0; i < List.length; i++) {
        const Listvalue = List[i];
        const html =
          `<p>
            ${Listvalue}
            <button onclick="deleteElement(${i});">Delete</button>
          </p>`;
        elementHTML += html;
      }

      document.querySelector('.div').innerHTML = elementHTML;
    }

    function deleteElement(i) {
      List.splice(i, 1);
      updateLocalStorage();
      toDoList();
    }

    function updateLocalStorage() {
      localStorage.setItem('todoList', JSON.stringify(List));
    }

    toDoList();
  </script>
</body>
</html>
