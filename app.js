const formAddTodo = document.querySelector(".form-add-todo");
const inputSearchTodo = document.querySelector(".form-search input");
const todosContainer = document.querySelector(".todos-container");

const addTodo = (inputValue) => {
  if (inputValue.length) {
    todosContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
      </li>`;
    event.target.reset();
  }
};

formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = event.target.add.value.trim();
  addTodo(inputValue);
});

const removeTodo = (clickedElement) => {
  const trashDataValue = clickedElement.dataset.trash;
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`);
  if (trashDataValue) {
    todo.remove();
  }
};

todosContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  removeTodo(clickedElement);
});

inputSearchTodo.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim().toLowerCase();
  Array.from(todosContainer.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => {
      todo.classList.remove("d-flex");
      todo.classList.add("hidden");
    });

  Array.from(todosContainer.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => {
      todo.classList.remove("hidden");
      todo.classList.add("d-flex");
    });
});
