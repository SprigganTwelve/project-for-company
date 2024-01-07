var join = document.getElementById("join");
var more = document.getElementById("more");
join.addEventListener("click", () => {
  window.location.assign("../Connexion/ConnectBase.php");
});
more.addEventListener("click", () => {
  window.location.assign("../Presentation/index.html");
});
