const smallcups = document.querySelectorAll(".cup-small");
const litres = document.getElementById("litres");
const percentage = document.getElementById("percentage");
const remain = document.getElementById("remained");

updateBigCup();
smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlight(idx);
  });
  
  function highlight(idx) {
    if (
      smallcups[idx].classList.contains("full") &&
      !smallcups[idx].nextElementSibling.classList.contains("full")
    ) {
      idx--;
    }
    smallcups.forEach((cup, idx2) => {
      if (idx2 <= idx) {
        cup.classList.add("full");
      } else {
        cup.classList.remove("full");
      }
    });
    updateBigCup();
  }
});

function updateBigCup() {
  const fullcups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallcups.length;
  if (fullcups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullcups / totalCups) * 330}px`;
    percentage.innerText = `${(fullcups / totalCups) * 100}%`;
  }

  if (fullcups === totalCups) {
    remain.style.visibility = "hidden";
    remain.style.height = 0;
  } else {
    remain.style.visibility = "visible";
    litres.innerText = `${2 - (250 * fullcups) / 1000}L`;
  }
}
