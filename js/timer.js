const timerBlock = document.querySelector('.timer__time');
const deadline = '31 march 2022'
let interval

// Времы до дедлайна

const updateClock = () => {
  const date = new Date().getTime();
  const dateDeadline = new Date(deadline).getTime();
  const timeRemaining = (dateDeadline - date) / 1000; // переводим миллисекунды в секунды
  const days = Math.floor(timeRemaining / 60 / 60 / 24); // переводим секунды в дни  
  const hours = Math.floor((timeRemaining / 60 / 60) % 24); // переводим секунды в часы
  const minutes = Math.floor((timeRemaining / 60) % 60) // переводим часы в минуты, выносим остаток деления на 60
  const seconds = Math.floor(timeRemaining % 60);
  
  /*const formatDays = days < 10 ? '0' + days : days;
  let formatHours //= hours < 10 ? '0' + hours : hours; // тернарный оператор
  const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formatSeconds = seconds < 10 ? '0' + seconds : seconds; */

  //Добавляем нули, если меньше 10
  const formatTime = time => (time < 10 ? `0${time}` : time);
  const numWord = [' день ', ' дня ', ' дней '];  

  const count = function (value, words) {
    if (value <= 1) {
      return words[0]
    } else if (value > 1 && value < 5) {
      return words[1];
    } else if (value > 4 && value < 11) {
      return words[2];
    }
  }
  
    //Вставляем значения
    timerBlock.textContent = `${formatTime(days)}${count(formatTime(days), numWord)}${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    if (timeRemaining <= 0) {
      clearInterval(interval);
      timerBlock.textContent = '00:00:00:00'
    }
  };
  
interval = setInterval(updateClock, 500);

/* Текущее время компьютера
const updateClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formatHours = hours < 10 ? '0' + hours : hours; // тернарный оператор
  const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formatSeconds = seconds < 10 ? '0' + seconds : seconds;

  timerBlock.textContent = `${formatHours}:${formatMinutes}:${formatSeconds}`;
};

setInterval(updateClock, 500);
*/