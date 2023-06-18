import {
  eltex, tplink,
  overlay, modal,
  modalName, modalText,
  newEltex, newTplink,
} from './domElements.js'

let newBtnName = null
let newBtnText = null

function showOverlay() {
  overlay.classList.add('overlay_show')
}
function hideOverlay() {
  overlay.classList.remove('overlay_show')
}
function showModal() {
  showOverlay()
  modal.classList.add('modal_show')
}
function hideModal() {
  hideOverlay()
  modal.classList.remove('modal_show')
}

function setModalName(e) {
  newBtnName = e.target.value
}
function setModalText(e) {
  newBtnText = e.target.value
}

function createNewButton() {
  console.log('creating new button'); // TODO
}

newEltex.addEventListener('click', showModal)
newTplink.addEventListener('click', showModal)
overlay.addEventListener('click', hideModal)
overlay.addEventListener('click', hideOverlay)

modalName.addEventListener('input', setModalName)
modalText.addEventListener('input', setModalText)