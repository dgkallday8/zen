const app = document.getElementById('app')
app.classList.add('app')
app.innerHTML = `
    <h2>Задание для</h2>
    <h1><span>Я</span>ндекс.Дзен</h1>
    <div class="rules">
        <p>Открыть консоль</p>
        <p>Запустить поле с помощью команды start(m,n)</p>
        <p>где m - высота поля,</p>
        <p>а n - ширина поля</p>
        <h3>Состояния клетки</h3>
        <p>1 - живая</p>
        <p>0 - мертвая</p>
        <p>С помощью команды stop() можно остановить выполнение программы</p>
    </div>
`

let fieldArray = []
let someArray = []
function createField(m, n) {
    for (let i = 0; i < m; i++) {
        fieldArray[i] = []
        for (let j = 0; j < n; j++) {
            fieldArray[i][j] = Math.floor(Math.random() * 2)
        }
    }
    console.log('- - - - - Стартовое поле - - - - -')
    fieldArray.forEach(el => console.log(el))
    return fieldArray
}

function start(m, n) {
    const startField = createField(m, n)
    const newField = createNewField(startField)
    setInterval(() => {
        createNewField(someArray)
    }, 1000)

}
const stop = () => {
    for (let i = 0; i < 1000; i++) {
        clearInterval(i)
    }
}

function createNewField(twoDArray) {
    let newArray = []
    for (let i = 0; i < twoDArray.length; i++) {
        newArray[i] = []
        for (let j = 0; j < twoDArray[0].length; j++) {
            let counter = 0
            if (twoDArray[firstVerticalElement(i) - 1][j] === 1) counter++
            if (twoDArray[i][lastHorizontalElement(j) + 1] === 1) counter++
            if (twoDArray[lastVerticalElement(i) + 1][j] === 1) counter++
            if (twoDArray[i][firstHorizontalElement(j) - 1] === 1) counter++
            if (twoDArray[firstVerticalElement(i) - 1][firstHorizontalElement(j) - 1] === 1) counter++
            if (twoDArray[firstVerticalElement(i) - 1][lastHorizontalElement(j) + 1] === 1) counter++
            if (twoDArray[lastVerticalElement(i) + 1][firstHorizontalElement(j) - 1] === 1) counter++
            if (twoDArray[lastVerticalElement(i) + 1][lastHorizontalElement(j) + 1] === 1) counter++
            (((counter === 2 || counter === 3) && twoDArray[i][j] === 1) || (twoDArray[i][j] === 0 && counter === 3))
                ? newArray[i].push(1)
                : newArray[i].push(0)
        }
    }
    console.log('- - - - - Обновленное поле - - - - -')
    newArray.forEach(el => console.log(el))
    someArray = newArray
    return someArray
}

function firstVerticalElement(i) {
    if (i === 0) return fieldArray.length
    else return i
}
function lastVerticalElement(i) {
    if(i === fieldArray.length - 1) return -1
    else return i
}
function firstHorizontalElement(i) {
    if (i === 0) return fieldArray[0].length
    else return i
}
function lastHorizontalElement(i) {
    if(i === fieldArray[0].length - 1) return -1
    else return i
}