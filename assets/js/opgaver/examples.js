let myExtras = [];
const myExtrasInput = document.getElementById("extraUdstyr");
const myExtrasListElement = document.getElementById("extraList");

myExtrasInput.addEventListener("change", addExtra);

function addExtra() {
  myExtras.push(myExtrasInput.value);
  updateExtras();
}

function updateExtras() {
  let extraText = "<strong>Dine valg:</strong><br><ul> ";
  myExtras.map((items) => {
    extraText = extraText + "<li>" + items + "</li>";
  });
  extraText = extraText + "</ul>";
  myExtrasListElement.innerHTML = extraText;
}
