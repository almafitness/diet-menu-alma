function showMenu() {
  const day = Math.floor(Math.random() * 30) + 1;
  window.location.href = `menus/day${day}.html`;
}