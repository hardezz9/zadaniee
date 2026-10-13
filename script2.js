// ========================================
// ЗАДАНИЕ 155. УЧЁТ IT-ПРОЕКТОВ
// ========================================

const projects155 = [
    { name: "AI Chatbot", progress: 90 },
    { name: "Smart Campus", progress: 45 },
    { name: "Mobile App", progress: 100 },
    { name: "Web Platform", progress: 70 }
];

function analyzeProjects155() {
    const completed = projects155.filter(project => project.progress === 100);
    const lowProgress = projects155.filter(project => project.progress < 50);

    const totalProgress = projects155.reduce(
        (sum, project) => sum + project.progress, 0
    );

    const average = totalProgress / projects155.length;

    const slowestProject = projects155.reduce((min, project) =>
        project.progress < min.progress ? project : min
    );

    document.getElementById("projectStats").innerHTML = `
        <div class="stat">Всего проектов<strong>${projects155.length}</strong></div>
        <div class="stat">Завершено<strong>${completed.length}</strong></div>
        <div class="stat">Средний прогресс<strong>${average.toFixed(2)}%</strong></div>
    `;

    document.getElementById("projectList").innerHTML =
        projects155.map(project => `
            <div class="project">
                <strong>${project.name}</strong>
                <span style="float:right">${project.progress}%</span>
                <div class="progress">
                    <div style="width:${project.progress}%"></div>
                </div>
            </div>
        `).join("");

    document.getElementById("projectSummary").innerHTML = `
        <p><strong>Завершённые проекты:</strong>
        ${completed.map(project => project.name).join(", ") || "Нет"}</p>

        <p><strong>Прогресс менее 50%:</strong>
        ${lowProgress.map(project => project.name).join(", ") || "Нет"}</p>

        <p><strong>Наименьший прогресс:</strong>
        ${slowestProject.name} — ${slowestProject.progress}%</p>

        <p><strong>Общая средняя готовность:</strong>
        ${average.toFixed(2)}%</p>
    `;
}

analyzeProjects155();


// ========================================
// ЗАДАНИЕ 156. ТАЙМЕР
// ========================================

const secondsInput156 = document.getElementById("secondsInput");
const timerDisplay156 = document.getElementById("timerDisplay");
const timerMessage156 = document.getElementById("timerMessage");

let remainingSeconds156 = 60;
let timerInterval156 = null;

function formatTime156(seconds) {
    const minutes = Math.floor(seconds / 60);
    const restSeconds = seconds % 60;

    return String(minutes).padStart(2, "0") + ":" +
        String(restSeconds).padStart(2, "0");
}

function showTime156() {
    timerDisplay156.textContent = formatTime156(remainingSeconds156);
}

function stopTimer156() {
    clearInterval(timerInterval156);
    timerInterval156 = null;
}

document.getElementById("startTimer").addEventListener("click", function () {
    if (timerInterval156 !== null) {
        return;
    }

    if (!Number.isInteger(remainingSeconds156) || remainingSeconds156 <= 0) {
        const seconds = Number(secondsInput156.value);

        if (!Number.isInteger(seconds) || seconds < 1 || seconds > 86400) {
            timerMessage156.textContent =
                "Введи целое число секунд от 1 до 86400.";
            return;
        }

        remainingSeconds156 = seconds;
    }

    timerMessage156.textContent = "Таймер работает.";
    showTime156();

    timerInterval156 = setInterval(function () {
        remainingSeconds156--;
        showTime156();

        if (remainingSeconds156 <= 0) {
            stopTimer156();
            remainingSeconds156 = 0;
            showTime156();
            timerMessage156.textContent = "Время вышло!";
        }
    }, 1000);
});

document.getElementById("pauseTimer").addEventListener("click", function () {
    if (timerInterval156 !== null) {
        stopTimer156();
        timerMessage156.textContent = "Таймер на паузе.";
    }
});

document.getElementById("resetTimer").addEventListener("click", function () {
    stopTimer156();

    const seconds = Number(secondsInput156.value);

    if (Number.isInteger(seconds) && seconds >= 1 && seconds <= 86400) {
        remainingSeconds156 = seconds;
    } else {
        remainingSeconds156 = 60;
    }

    showTime156();
    timerMessage156.textContent = "Таймер сброшен.";
});

secondsInput156.addEventListener("input", function () {
    if (timerInterval156 !== null) {
        return;
    }

    const seconds = Number(secondsInput156.value);

    if (Number.isInteger(seconds) && seconds >= 1 && seconds <= 86400) {
        remainingSeconds156 = seconds;
        showTime156();
        timerMessage156.textContent = "Таймер готов к запуску.";
    }
});

showTime156();


// ========================================
// ЗАДАНИЕ 157. ЦВЕТОВАЯ ПАЛИТРА
// ========================================

const colorInput157 = document.getElementById("colorInput");
const colorPreview157 = document.getElementById("colorPreview");
const hexValue157 = document.getElementById("hexValue");

function updateColor157() {
    const selectedColor = colorInput157.value.toUpperCase();

    colorPreview157.style.backgroundColor = selectedColor;
    hexValue157.textContent = selectedColor;
}

colorInput157.addEventListener("input", updateColor157);

document.getElementById("resetColor").addEventListener("click", function () {
    colorInput157.value = "#4658d8";
    updateColor157();
});

updateColor157();


// ========================================
// ЗАДАНИЕ 158. КАЛЬКУЛЯТОР ПОЕЗДКИ
// ========================================

document.getElementById("calculateTrip").addEventListener("click", function () {
    const distance = Number(document.getElementById("distance").value);
    const consumption = Number(document.getElementById("fuelConsumption").value);
    const price = Number(document.getElementById("fuelPrice").value);
    const result = document.getElementById("tripResult");

    if (
        document.getElementById("distance").value.trim() === "" ||
        document.getElementById("fuelConsumption").value.trim() === "" ||
        document.getElementById("fuelPrice").value.trim() === "" ||
        !Number.isFinite(distance) ||
        !Number.isFinite(consumption) ||
        !Number.isFinite(price) ||
        distance <= 0 ||
        consumption <= 0 ||
        price <= 0
    ) {
        result.textContent =
            "Ошибка: введи корректные положительные значения во все поля.";
        return;
    }

    const fuelNeeded = (distance * consumption) / 100;
    const tripCost = fuelNeeded * price;

    result.innerHTML = `
        <p>Расстояние: <strong>${distance} км</strong></p>
        <p>Необходимое топливо: <strong>${fuelNeeded.toFixed(2)} л</strong></p>
        <p>Стоимость поездки: <strong>${tripCost.toLocaleString("ru-RU", {
            maximumFractionDigits: 2
        })} ₸</strong></p>
    `;
});


// ========================================
// ЗАДАНИЕ 159. ГЕНЕРАТОР ВОПРОСОВ
// ========================================

const questions159 = [
    "Что такое переменная в JavaScript?",
    "Для чего используется оператор if?",
    "Чем let отличается от const?",
    "Что делает цикл for?",
    "Для чего нужен массив?",
    "Что такое функция?",
    "Что возвращает Math.random()?",
    "Для чего используется addEventListener()?",
    "Что делает метод filter()?",
    "Что такое localStorage?"
];

let remainingQuestions159 = [...questions159];
let shownQuestions159 = 0;

const questionDisplay159 = document.getElementById("questionDisplay");
const questionCounter159 = document.getElementById("questionCounter");
const nextQuestion159 = document.getElementById("nextQuestion");

function updateQuestionCounter159() {
    questionCounter159.textContent =
        `Вопросов показано: ${shownQuestions159} из ${questions159.length}`;
}

nextQuestion159.addEventListener("click", function () {
    if (remainingQuestions159.length === 0) {
        questionDisplay159.textContent = "Вопросы закончились!";
        nextQuestion159.disabled = true;
        return;
    }

    const randomIndex = Math.floor(
        Math.random() * remainingQuestions159.length
    );

    const selectedQuestion = remainingQuestions159.splice(randomIndex, 1)[0];

    shownQuestions159++;

    questionDisplay159.textContent = selectedQuestion;
    updateQuestionCounter159();

    if (remainingQuestions159.length === 0) {
        nextQuestion159.disabled = true;
    }
});

document.getElementById("restartQuestions").addEventListener("click", function () {
    remainingQuestions159 = [...questions159];
    shownQuestions159 = 0;

    questionDisplay159.textContent = "Нажми «Следующий вопрос».";
    nextQuestion159.disabled = false;

    updateQuestionCounter159();
});

updateQuestionCounter159();


// ========================================
// ЗАДАНИЕ 160. РЕГИСТРАЦИЯ IT-ПРОЕКТОВ
// ========================================

const storageKey160 = "itProjectLabProjects160";

const directions160 = [
    "Искусственный интеллект",
    "Веб-разработка",
    "Мобильные приложения",
    "Робототехника"
];

const statuses160 = [
    "На рассмотрении",
    "В работе",
    "Завершён"
];

let registeredProjects160 = loadProjects160();

function loadProjects160() {
    try {
        const saved = localStorage.getItem(storageKey160);

        if (saved === null) {
            return [];
        }

        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("Не удалось загрузить проекты:", error);
        return [];
    }
}

function saveProjects160() {
    try {
        localStorage.setItem(
            storageKey160,
            JSON.stringify(registeredProjects160)
        );
        return true;
    } catch (error) {
        console.error("Не удалось сохранить проекты:", error);
        document.getElementById("registrationMessage").textContent =
            "Ошибка сохранения. Проверь настройки браузера.";
        return false;
    }
}

function renderDirectionStats160() {
    const stats = document.getElementById("directionStats");

    stats.innerHTML = directions160.map(direction => {
        const count = registeredProjects160.filter(
            project => project.direction === direction
        ).length;

        return `
            <div class="stat">
                ${direction}
                <strong>${count}</strong>
            </div>
        `;
    }).join("");
}

function renderProjects160() {
    const tbody = document.getElementById("registeredProjects");
    const tableMessage = document.getElementById("tableMessage");
    const search = document.getElementById("projectSearch").value
        .trim()
        .toLowerCase();

    const filteredProjects = registeredProjects160.filter(project =>
        project.name.toLowerCase().includes(search)
    );

    tbody.innerHTML = "";

    filteredProjects.forEach(project => {
        const tr = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = project.name;

        const participantCell = document.createElement("td");
        participantCell.textContent = project.participant;

        const directionCell = document.createElement("td");
        directionCell.textContent = project.direction;

        const dateCell = document.createElement("td");
        dateCell.textContent = project.date;

        const statusCell = document.createElement("td");
        const statusSelect = document.createElement("select");

        statuses160.forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            statusSelect.appendChild(option);
        });

        statusSelect.value = statuses160.includes(project.status)
            ? project.status
            : statuses160[0];

        statusSelect.addEventListener("change", function () {
            const originalStatus = project.status;
            project.status = statusSelect.value;

            if (saveProjects160()) {
                document.getElementById("registrationMessage").textContent =
                    "Статус проекта обновлён.";
            } else {
                project.status = originalStatus;
                statusSelect.value = originalStatus;
            }
        });

        statusCell.appendChild(statusSelect);

        tr.append(nameCell, participantCell, directionCell, dateCell, statusCell);
        tbody.appendChild(tr);
    });

    if (filteredProjects.length === 0) {
        tableMessage.textContent = search
            ? "По запросу ничего не найдено."
            : "Пока нет зарегистрированных проектов.";
    } else {
        tableMessage.textContent = `Найдено проектов: ${filteredProjects.length}`;
    }

    renderDirectionStats160();
}

document.getElementById("projectForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("projectName").value.trim();
    const participant = document.getElementById("participantName").value.trim();
    const direction = document.getElementById("projectDirection").value;
    const date = document.getElementById("submissionDate").value;
    const status = document.getElementById("initialStatus").value;

    if (!name || !participant || !direction || !date || !status) {
        document.getElementById("registrationMessage").textContent =
            "Заполни все обязательные поля.";
        return;
    }

    if (!directions160.includes(direction) || !statuses160.includes(status)) {
        document.getElementById("registrationMessage").textContent =
            "Выбрано некорректное направление или статус.";
        return;
    }

    const newProject = {
        id: Date.now().toString() + Math.random().toString(16).slice(2),
        name: name,
        participant: participant,
        direction: direction,
        date: date,
        status: status
    };

    registeredProjects160.push(newProject);

    if (!saveProjects160()) {
        registeredProjects160.pop();
        return;
    }

    document.getElementById("registrationMessage").textContent =
        `Проект «${name}» успешно зарегистрирован.`;

    document.getElementById("projectForm").reset();

    renderProjects160();
});

document.getElementById("projectSearch").addEventListener("input", renderProjects160);

renderProjects160();