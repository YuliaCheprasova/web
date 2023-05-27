/*Найти сумму элементов последовательности
Найти минимальный элемент в последовательности
Определить среднее арифметическое элементов последовательности*/

function count_sum() {
  let sequence = document.getElementById("mas").value;
  var sum = 0;
  sequence = sequence.split(",");
  for (let i = 0; i < sequence.length; i++) {
    sum += parseInt(sequence[i]);
  }
  alert(sum);
}

function min_el() {
  let sequence = document.getElementById("mas").value;
  var min;
  sequence = sequence.split(",");
  min = parseInt(sequence[0]);
  for (let i = 0; i < sequence.length; i++) {
    sequence[i] = parseInt(sequence[i]);
    if (sequence[i] < min) {
      min = sequence[i];
    }
  }
  alert(min);
}

function av() {
  let sequence = document.getElementById("mas").value;
  var sum = 0;
  sequence = sequence.split(",");
  for (let i = 0; i < sequence.length; i++) {
    sum += parseInt(sequence[i]);
  }
  res = sum / sequence.length;
  alert(res);
}
