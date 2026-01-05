const state = {
  data: [],
  search: "",
  sortField: "name",
  sortOrder: "asc"
};

function matches(str, query) {
  return str.toLowerCase().includes(query.toLowerCase());
}

function applySearch() {
  let filtered = state.data.filter(item =>
    matches(item.name, state.search)
  );


  filtered.sort((a, b) => {
    let fieldA = a[state.sortField];
    let fieldB = b[state.sortField];

   
    if (typeof fieldA === "string") fieldA = fieldA.toLowerCase();
    if (typeof fieldB === "string") fieldB = fieldB.toLowerCase();

    if (fieldA < fieldB) return state.sortOrder === "asc" ? -1 : 1;
    if (fieldA > fieldB) return state.sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  renderList(filtered);
}

function renderList(items) {
  const list = document.getElementById("list");
  const empty = document.getElementById("empty");
  list.innerHTML = "";

  if (items.length === 0) {
    empty.classList.remove("hidden");
    empty.textContent = "No items found."
    return;
  }
  empty.classList.add("hidden");

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    list.appendChild(li);
  });
}


document.getElementById("searchInput").addEventListener("input", e => {
  state.search = e.target.value;
  applySearch();
});


document.getElementById("sortOrderBtn").addEventListener("click", e => {
  state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
  e.target.textContent = `Order: ${state.sortOrder === "asc" ? "Asc " : "Desc "}`;
  applySearch();
});

document.getElementById("sortField").addEventListener("change", e => {
  state.sortField = e.target.value;
  applySearch();
});

document.getElementById("ClearBtn").addEventListener("click",()=>{
    document.getElementById("searchInput").value = "";
    state.search = "";
    applySearch();
})

document.getElementById("empty").classList.add("hidden");


async function loadDataFromAPI() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos"); 
    const items = await res.json();
    state.data = items.slice(0, 20).map(todo => ({
      name: todo.title
    }));
    applySearch();
  } catch (err) {
    console.error("Error loading API data:", err);
  }
}

loadDataFromAPI();
