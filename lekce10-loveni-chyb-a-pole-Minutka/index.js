const setAlarm = (event) => {
    event.preventDefault()
    let timeInput = Number(document.querySelector(".time-input").value)

    if (Number.isInteger(timeInput) && (timeInput > 0) && (timeInput !== null)) {
        const alarmSeconds = document.querySelector(".alarm__seconds")
        const alarm = document.querySelector(".alarm")
        const audio = document.querySelector(".audio")
        alarmSeconds.textContent = String(timeInput).padStart(2, "0")

        const deduct = () => {
            if (timeInput > 0) {
                timeInput = (timeInput - 1)
                alarmSeconds.textContent = String(timeInput).padStart(2, "0")
            } else if (timeInput <= 0) {
                clearInterval(timerId)
                alarm.classList.add("alarm--ring")
                document.querySelector("audio").play()
            }
        }
        const timerId = setInterval(deduct, 1000)

    } else {
        alert("Zadej celé kladné číslo!")
    }
}

const formular = document.querySelector(".controls")
formular.addEventListener("submit", (event) => setAlarm(event))