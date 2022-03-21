const btns = document.querySelectorAll('.btn')
const dropdown = document.querySelectorAll('.dropdown')

btns.forEach(function (btn) {
  btn.addEventListener('click', btnDropDown)
})

function btnDropDown() {
  const btnId = this.dataset.id
  const dropDownArray = Array.from(dropdown)
  dropDownArray.filter(drop => {
    if (drop.dataset.id === btnId) {
      drop.classList.toggle('show')
    }
  })
}
