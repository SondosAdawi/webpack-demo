import { playSound } from "./notice.js";

export function switchMode(isWorkMode, workTime, breakTime, updateDisplay) {
    playSound(); // تشغيل الصوت عند تبديل الوضع
    isWorkMode = !isWorkMode;
    const newTime = isWorkMode ? workTime : breakTime;
    updateDisplay(newTime * 60);
    return isWorkMode;
}
