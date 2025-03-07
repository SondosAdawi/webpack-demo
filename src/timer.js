let running = false;
let timerInterval = null;
let timeLeft = 1500; // القيمة الافتراضية 1500 ثانية (25 دقيقة)

export function isRunning() {
  return running;
}

export function startTimer(updateUI, onTimerEnd, playSound) {
  if (running) return;
  running = true;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateUI(timeLeft);
    } else {
      clearInterval(timerInterval);
      running = false;
      playSound();       // تشغيل الصوت عند انتهاء العداد
      onTimerEnd();      // يمكنك وضع أي دالة إضافية هنا عند انتهاء العداد
    }
  }, 1000);
}

export function pauseTimer() {
  running = false;
  clearInterval(timerInterval);
}

export function resetTimer(defaultTime, updateUI) {
  running = false;
  clearInterval(timerInterval);
  timeLeft = defaultTime;  // تحديث قيمة العداد للوقت الجديد
  updateUI(timeLeft);
}
