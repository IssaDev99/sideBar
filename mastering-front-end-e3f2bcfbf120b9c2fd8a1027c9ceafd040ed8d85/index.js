// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

let sideBar = document.querySelector(".sideBar");
let sideBarRevealed = document.querySelector(".sideBarRevealed");
let content = document.querySelector(".content");

btn.addEventListener("click", () => {
  sideBar.classList.toggle("sideBarRevealed");
});
// Ranger la sidebar si on click sur le contenu principal

content.addEventListener("click", () => {
  sideBar.classList.remove("sideBarRevealed");
});
// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
