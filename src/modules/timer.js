
export function countdown(hours, minutes, seconds) {
  let totalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;
  let hoursElement = document.querySelector('.time-count-hours');
  let minutesElement = document.querySelector('.time-count-minutes');
  let secondsElement = document.querySelector('.time-count-seconds');

  let timer = setInterval(function() {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      return;
    }

    let remainingHours = Math.floor(totalSeconds / (60 * 60));
    let remainingMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    let remainingSeconds = Math.floor(totalSeconds % 60);

    hoursElement.textContent = remainingHours.toString().padStart(2, '0');
    minutesElement.textContent = remainingMinutes.toString().padStart(2, '0');
    secondsElement.textContent = remainingSeconds.toString().padStart(2, '0');

    totalSeconds--;
  }, 1000);
}



