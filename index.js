// startボタンを押したらtimerがスタート
// stopボタンを押したらtimerがストップ
// もう一度startボタンを押すとそこからまた進む
// resetボタンを押したら数字が0に戻る


const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
let startTime;
let timeOutId;
let elapsedTime;
const stopBtn = document.getElementById('stop');
// const resetBtn = document.getElementById('reset');

// startボタンを押した時に起動
startBtn.addEventListener('click', () => {
    startTime = Date.now();

    timeOutId = setInterval(countUp, 10);
    
});


function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    timer.textContent = `${m}分${s}秒${ms}`;
};


// stopボタンを押した時に停止
stopBtn.addEventListener('click', () => {

    clearInterval(timeOutId);

    elapsedTime = Date.now() - startTime;
    console.log(elapsedTime);

});

// resetボタンを押したら0になる
// resetBtn.addEventListener('click', () => {

// });