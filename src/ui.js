export function updateUI(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timer-display").textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export function changeBackground(mode) {
    const container = document.querySelector(".container"); // استخدام class بدلًا من id
    const body = document.body;

    if (!container) {
        console.error("العنصر container غير موجود!");
        return; // يمنع الخطأ إذا لم يكن العنصر موجودًا
    }

    if (mode === "work") {
        body.style.backgroundColor = "#b53d3d"; 
        container.style.backgroundColor = "#cc5252"; 
    } else if (mode === "shortBreak") {
        body.style.backgroundColor = "#2D9596"; 
        container.style.backgroundColor = "#55b3b5"; 
    } else if (mode === "longBreak") {
        body.style.backgroundColor = "#155185"; 
        container.style.backgroundColor = "#24649c";
    }

    // التأكد من أن container لا يغطي الأزرار
    container.style.position = "relative";
    container.style.zIndex = "1";
}

