const add = document.querySelector(".add");
const ul = document.querySelector(".listitem");
const search = document.querySelector(".search input");

// add todos
add.addEventListener("submit", (e) => {
  e.preventDefault();
  const x = add.new.value;
  if (x != "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const i = document.createElement("i");
    li.className =
      "todo list-group-item d-flex justify-content-between align-items-center ";
    span.textContent = x;
    i.className = "fa-solid fa-trash delete";
    console.log(x.trim());
    li.appendChild(span);
    li.appendChild(i);
    ul.append(li);
  }
  add.new.value = "";
});

// delete todos
ul.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//search todos

function filterItem(item) {
  const li = Array.from(ul.children);
  for (let i = 0; i < li.length; i++) {
    if (li[i].textContent.toLowerCase().includes(item)) {
      li[i].classList.remove("hidden");
    } else {
      li[i].classList.add("hidden");
    }
  }
}

search.addEventListener("input", () => {
  const itemSearch = search.value.toLowerCase();
  filterItem(itemSearch);
});
