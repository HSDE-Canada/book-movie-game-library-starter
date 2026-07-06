const libraryItems = [
  { title: "The Hobbit", creator: "J.R.R. Tolkien", category: "books", status: "Read", favorite: true, coverTitle: "The Hobbit", coverSubtitle: "Adventure Fantasy", coverIcon: "⛰️", coverClass: "cover-green" },
  { title: "Spider-Verse", creator: "Sony Pictures", category: "movies", status: "Watched", favorite: true, coverTitle: "Spider-Verse", coverSubtitle: "Animated Action", coverIcon: "🕷️", coverClass: "cover-red" },
  { title: "Minecraft", creator: "Mojang Studios", category: "games", status: "Played", favorite: true, coverTitle: "Minecraft", coverSubtitle: "Build and Explore", coverIcon: "⛏️", coverClass: "cover-green" }

  // Challenge 1: Add your own objects here.
];

const categoryInfo = {
  books: { title: "My Books 📖", subtitle: "Read, learn, and get inspired!", totalLabel: "Books", doneStatus: "Read", progressStatus: "Reading", wantStatus: "Want to Read", doneLabel: "Read", progressLabel: "Currently Reading", wantLabel: "Want to Read" },
  movies: { title: "My Movies 🎬", subtitle: "Watch, imagine, and discover new stories!", totalLabel: "Movies", doneStatus: "Watched", progressStatus: "Watching", wantStatus: "Want to Watch", doneLabel: "Watched", progressLabel: "Currently Watching", wantLabel: "Want to Watch" },
  games: { title: "My Games 🎮", subtitle: "Play, explore, and track your favorites!", totalLabel: "Games", doneStatus: "Played", progressStatus: "Playing", wantStatus: "Want to Play", doneLabel: "Played", progressLabel: "Currently Playing", wantLabel: "Want to Play" }
};

// Challenge 2: Select the library grid element.
const libraryGrid = document.querySelector("");
// Challenge 3: Select the stats bar element.
const statsBar = document.querySelector("");
// Challenge 4: Select the search input element.
const searchInput = document.querySelector("");
// Challenge 5: Select the page title element.
const pageTitle = document.querySelector("");
// Challenge 6: Select the page subtitle element.
const pageSubtitle = document.querySelector("");

const tabs = document.querySelectorAll(".tab");
const openFormButton = document.querySelector("#open-form-button");
const addFormSection = document.querySelector("#add-form-section");
const addItemForm = document.querySelector("#add-item-form");
const cancelFormButton = document.querySelector("#cancel-form-button");
const newTitleInput = document.querySelector("#new-title");
const newCreatorInput = document.querySelector("#new-creator");
const newIconInput = document.querySelector("#new-icon");
const newCoverColorInput = document.querySelector("#new-cover-color");

let currentCategory = "books";
let searchText = "";

function renderPage() {
  updateHero();
  renderLibrary();
  renderStats();
}

function updateHero() {
  // Challenge 7: Update the page title using categoryInfo and currentCategory.
  // Challenge 8: Update the page subtitle using categoryInfo and currentCategory.
}

function renderLibrary() {
  const filteredItems = libraryItems.filter(function (item) {
    // Challenge 9: Compare the item's category with currentCategory.
    const matchesCategory = ;
    const matchesSearch = item.title.toLowerCase().includes(searchText) || item.creator.toLowerCase().includes(searchText);
    return matchesCategory && matchesSearch;
  });

  libraryGrid.innerHTML = "";

  if (filteredItems.length === 0) {
    libraryGrid.innerHTML = `<div class="empty-message"><h3>No items found</h3><p>Try searching for a different title or creator.</p></div>`;
    return;
  }

  // Challenge 10: Write the full for loop setup.
  for () {
    const item = filteredItems[i];
    const originalIndex = libraryItems.indexOf(item);

    libraryGrid.innerHTML += `
      <article class="item-card">
        <button class="favorite-button" data-index="${originalIndex}">${item.favorite ? "⭐" : "☆"}</button>
        <div class="cover ${}">
          <div class="cover-content">
            <div class="cover-title">${}</div>
            <div class="cover-subtitle">${}</div>
            <div class="cover-icon">${}</div>
          </div>
        </div>
        <div class="card-info">
          <h3>${}</h3>
          <p>${}</p>
          <button class="status-button" data-index="${originalIndex}">${item.status}</button>
        </div>
      </article>
    `;
  }
}

function renderStats() {
  const currentItems = libraryItems.filter(function (item) { return item.category === currentCategory; });
  statsBar.innerHTML = `<div class="stat-card"><strong>${currentItems.length}</strong><span>Items</span></div>`;
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (otherTab) { otherTab.classList.remove("active"); });
    tab.classList.add("active");
    currentCategory = tab.dataset.category;
    searchInput.value = "";
    searchText = "";
    renderPage();
  });
});

searchInput.addEventListener("input", function () {
  searchText = searchInput.value.toLowerCase();
  renderLibrary();
});

openFormButton.addEventListener("click", function () { addFormSection.hidden = false; });
cancelFormButton.addEventListener("click", function () { addFormSection.hidden = true; addItemForm.reset(); });

addItemForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const info = categoryInfo[currentCategory];
  const title = newTitleInput.value.trim();
  const creator = newCreatorInput.value.trim();
  if (title === "" || creator === "") return;
  libraryItems.push({ title, creator, category: currentCategory, status: info.wantStatus, favorite: false, coverTitle: title, coverSubtitle: "New Library Item", coverIcon: newIconInput.value.trim() || "✨", coverClass: newCoverColorInput.value });
  addFormSection.hidden = true;
  addItemForm.reset();
  renderPage();
});

renderPage();
