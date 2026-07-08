let count = 0;

document.getElementById("btn").addEventListener("click", function () {
  count++;
  document.getElementById("opis").textContent =
    "Gumb deluje in JavaScript se je uspešno izvedel.";

  document.getElementById("counter").textContent =
    "Število klikov: " + count;
});
