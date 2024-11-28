let list = [];
const renderUsers = document.getElementById("listItems");
const getUserName = document.getElementById("getListItems");

function ekleCikar(getItem) {
  let whichButton = getItem.innerHTML;
  let trimWhichButton = whichButton.trim();
  let input = getUserName.value.trim();

  if (!input) {
    alert("Lütfen bir değer girin.");
    return;
  }

  if (trimWhichButton == "Ekle") {
    if (list.includes(input)) {
      alert(`Hata: "${input}" listede var .`);
    } else {
      list.push(input);
      console.log(`"${input}" eklendi.`);
      renderUsers.innerHTML = list.map((item) => `<li>${item}</li>`).join(" ");
    }
  } else if (trimWhichButton == "Çıkar") {
    if (!list.includes(input)) {
      alert(`Hata: "${input}" bulunamadı.`);
    } else {
      list = list.filter((item) => item !== input);
      console.log(`"${input}" çıkarıldı.`);
      renderUsers.innerHTML = list.map((item) => `<li>${item}</li>`).join(" ");
    }
  }
}
