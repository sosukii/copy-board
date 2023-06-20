import {} from './js/btnHandler.js';
import {inputEl, wrapper} from './js/domElements.js'

let userNum = null
const setUserNum = e => userNum = e.target.value

function returnStringByIndex(index, userNum) {
  const data = [
    `01 ${userNum} какой-то\nочень длинный\nПЕРВЫЙ текст\nи значение - ${userNum} - по середине\nэтого супер длинного текста`,
    `02 какой-то ${userNum}\nочень длинный\nВТОРОЙ текст\nи значение - ${userNum} - по середине\nэтого супер длинного текста`,
    `03 какой-то очень длинный ${userNum}\nТРЕТИЙ текст и значение - ${userNum} - по середине\nэтого супер длинного текста`,
    `04 какой-то очень длинный \nЧЕТВЕРТЫЙ ${userNum} текст и значение - ${userNum} - по середине\nэтого супер длинного текста`,
    `05 какой-то очень длинный \nПЯТЫЙ текст ${userNum} и значение - ${userNum} - по середине\nэтого супер длинного текста`,
    `06 какой-то очень длинный \nШЕСТОЙ текст и значение - ${userNum} - по середине ${userNum}\nэтого супер длинного текста`,
  ]
  return data[index]
}

async function handler(e) {
  if(!e.target.classList.contains('copy')) return

  const index = +e.target.getAttribute('id')
  const str = returnStringByIndex(index, userNum)

  try {
    await navigator.clipboard.writeText(str);

    const copiedValue = await navigator.clipboard.readText();

    alert(`✅Скопировано в буфер обмена:\n${copiedValue}`)
    console.log(`Скопированное значение:\n${copiedValue}`);
  } catch (err) {
    console.error(`Не удалось скопировать значение в буфер обмена: ${err}`);
  }
}

wrapper.addEventListener('click', handler)
inputEl.addEventListener('input', setUserNum)