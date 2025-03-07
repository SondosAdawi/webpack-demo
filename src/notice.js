export function playSound() {
    const audio = new Audio("alarm.mp3"); // تأكد من وجود ملف الصوت في src/
    audio.play();
}