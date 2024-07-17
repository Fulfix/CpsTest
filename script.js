let ClickCount = 0;
const reset = document.querySelector('.reset')
const cps = document.querySelector('button');
const count = document.querySelector('p');

cps.addEventListener('click', StartTimer);
cps.addEventListener('click', ClickCountfunc);
reset.addEventListener('click', ResetCpsTest);

function ClickCountfunc() {
  ClickCount++;
  count.textContent = `ClickCount : ${ClickCount}`;
}

function StartTimer() {
  timer = setTimeout(CalculCps, 10000);
}

function CalculCps() {
  cps.disabled = true;
  let result = ClickCount / 10;
  count.textContent = `${result} CPS`;
}

function ResetCpsTest() {
    location.reload();
}