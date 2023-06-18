import {} from './js/btnHandler.js';
import {inputEl, wrapper} from './js/domElements.js'


let userNum = null

const data = [
  `какой-то очень длинный ПЕРВЫЙ текст и значение - ${userNum} - по середине этого супер длинного текста`,
  `какой-то очень длинный ВТОРОЙ текст и значение - ${userNum} - по середине этого супер длинного текста`,
  `какой-то очень длинный ТРЕТИЙ текст и значение - ${userNum} - по середине этого супер длинного текста`,
  `какой-то очень длинный ЧЕТВЕРТЫЙ текст и значение - ${userNum} - по середине этого супер длинного текста`,
  `какой-то очень длинный ПЯТЫЙ текст и значение - ${userNum} - по середине этого супер длинного текста`,
  `какой-то очень длинный ШЕСТОЙ текст и значение - ${userNum} - по середине этого супер длинного текста`,
]

async function handler(e) {
  if(!e.target.classList.contains('copy')) return

  const dataValue = e.target.getAttribute('data');

  try {
    await navigator.clipboard.writeText(dataValue); // копируем значение в буфер обмена

    console.log(`Значение ${dataValue} успешно скопировано в буфер обмена`);

    const copiedValue = await navigator.clipboard.readText(); // получаем доступ к скопированному значению

    console.log(`Скопированное значение: ${copiedValue}`);
  } catch (err) {
    console.error(`Не удалось скопировать значение в буфер обмена: ${err}`);
  }
}

const readNumber = e => userNum = e.target.value

function saveNumber(e) {
  if(e.key !== 'Enter' || userNum === null) return

  const btns = document.querySelectorAll('.copy')
  btns.forEach(btn => {
    btn.setAttribute('data', `${btn.getAttribute('data')} ${userNum} DUDE`)
  })
  console.log('enter has been peresed! yay')
}

wrapper.addEventListener('click', handler)
inputEl.addEventListener('input', readNumber)
inputEl.addEventListener('keypress', saveNumber)