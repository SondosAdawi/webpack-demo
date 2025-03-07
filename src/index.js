import { startTimer, pauseTimer, isRunning, resetTimer } from "./timer.js";
import { updateUI, changeBackground } from "./ui.js";
import { playSound } from "./notice.js";
import "./styles.css";

// تعريف الأوقات لكل وضع (بالثواني)
const workTime = 25 * 60;       // 25 دقيقة
const shortBreakTime = 5 * 60;    // 5 دقائق
const longBreakTime = 15 * 60;    // 15 دقيقة

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-btn");

    // تهيئة الوضع الافتراضي (work) عند تحميل الصفحة
    resetTimer(workTime, updateUI);
    changeBackground("work");

    // زر وضع العمل
    document.getElementById("work-btn").addEventListener("click", () => {
        pauseTimer();
        resetTimer(workTime, updateUI);
        changeBackground("work");
        startButton.textContent = "Start";
    });

    // زر الاستراحة القصيرة
    document.getElementById("short-break-btn").addEventListener("click", () => {
        pauseTimer();
        resetTimer(shortBreakTime, updateUI); // هنا نعيد تعيين العداد لـ 5 دقائق
        changeBackground("shortBreak");
        startButton.textContent = "Start";
    });

    // زر الاستراحة الطويلة
    document.getElementById("long-break-btn").addEventListener("click", () => {
        pauseTimer();
        resetTimer(longBreakTime, updateUI); // هنا نعيد تعيين العداد لـ 15 دقيقة
        changeBackground("longBreak");
        startButton.textContent = "Start";
    });

    // زر البدء/الإيقاف المؤقت للمؤقت
    startButton.addEventListener("click", () => {
        if (isRunning()) {
            pauseTimer();
            startButton.textContent = "Start";
        } else {
            startTimer(updateUI, () => {
                playSound();
            }, playSound);
            startButton.textContent = "Pause";
        }
    });
});
