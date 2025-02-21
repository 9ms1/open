document.addEventListener("DOMContentLoaded", function () {
    let loadingText = document.getElementById("loading");
    let countdownText = document.getElementById("countdown");
    let countdownTimer = document.getElementById("timer");
    let matrixEffect = document.getElementById("matrix");
    let progressText = document.getElementById("progress");
    let doneText = document.getElementById("done-text");
    let unlockButton = document.getElementById("unlock-btn");
    let finalMessage = document.getElementById("final-message");
    let alarmSound = document.getElementById("alarm-sound");

    let timeLeft = 5;
    let countdownInterval = setInterval(() => {
        timeLeft--;
        countdownTimer.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownText.style.display = "none";
            startHacking();
        }
    }, 1000);

    function startHacking() {
        loadingText.style.opacity = "1";
        alarmSound.play();

        setTimeout(() => {
            loadingText.style.display = "none";
            matrixEffect.style.display = "block";
            startMatrixEffect();
        }, 2000);

        setTimeout(() => {
            matrixEffect.style.display = "none";
            progressText.style.opacity = "1";

            let progress = 0;
            let progressInterval = setInterval(() => {
                progress += 5;
                progressText.innerText = `اختراق ${progress}%...`;
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    progressText.style.display = "none";
                    doneText.style.opacity = "1";
                    document.body.style.animation = "shake 0.2s infinite";
                    
                    setTimeout(() => {
                        unlockButton.style.display = "block";
                        document.body.style.animation = "none";
                    }, 2500);
                }
            }, 300);
        }, 4000);
    }

    unlockButton.addEventListener("click", function () {
        unlockButton.style.display = "none";
        doneText.style.display = "none";
        finalMessage.style.display = "block";
    });
});

function startMatrixEffect() {
    let matrix = document.getElementById("matrix");
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
    let maxColumns = 50;
    
    let content = "";
    for (let i = 0; i < 500; i++) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)];
        content += randomChar + " ";
        if (i % maxColumns === 0) content += "<br>";
    }
    
    matrix.innerHTML = content;
    setInterval(() => {
        let newContent = "";
        for (let i = 0; i < 500; i++) {
            let randomChar = chars[Math.floor(Math.random() * chars.length)];
            newContent += randomChar + " ";
            if (i % maxColumns === 0) newContent += "<br>";
        }
        matrix.innerHTML = newContent;
    }, 100);
}
