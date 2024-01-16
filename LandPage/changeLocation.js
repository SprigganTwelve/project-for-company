var join = document.getElementById("join");
var more = document.getElementById("more");
join.addEventListener("click", () => {
  window.location.assign("../Connexion/ConnectBase.php");
});
more.addEventListener("click", () => {
  window.location.assign("../Presentation/index.html");
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 1500);
});
