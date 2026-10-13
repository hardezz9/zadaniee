
console.clear();
console.log("=== ПРАКТИЧЕСКИЕ ЗАДАНИЯ №136–154 ===");

// №136. Проверка заполненности накопителя
{
    console.log("\n--- Задание 136 ---");

    let totalMemory136 = 64;
    let usedMemory136 = 48;

    if (totalMemory136 <= 0 || usedMemory136 < 0 || usedMemory136 > totalMemory136) {
        console.log("Ошибка данных");
    } else {
        let percent136 = usedMemory136 / totalMemory136 * 100;
        console.log("Занято памяти:", percent136 + "%");

        if (percent136 < 50) {
            console.log("Достаточно места");
        } else if (percent136 <= 89) {
            console.log("Память заполняется");
        } else {
            console.log("Память почти заполнена");
        }
    }
}

// №137. Уровень сложности игры
{
    console.log("\n--- Задание 137 ---");

    let wins137 = 18;

    if (wins137 < 0) {
        console.log("Ошибка данных");
    } else if (wins137 <= 4) {
        console.log("Новичок");
    } else if (wins137 <= 14) {
        console.log("Любитель");
    } else if (wins137 <= 29) {
        console.log("Профессионал");
    } else {
        console.log("Мастер");
    }
}

// №138. Срок действия подписки
{
    console.log("\n--- Задание 138 ---");

    let daysLeft138 = 3;

    if (daysLeft138 < 0) {
        console.log("Ошибка данных");
    } else if (daysLeft138 === 0) {
        console.log("Подписка истекла");
    } else if (daysLeft138 <= 7) {
        console.log("Подписка скоро закончится");
    } else {
        console.log("Подписка активна");
    }
}

// №139. Категория заказа
{
    console.log("\n--- Задание 139 ---");

    let orderAmount139 = 25000;

    if (orderAmount139 < 0) {
        console.log("Ошибка суммы");
    } else if (orderAmount139 < 5000) {
        console.log("Маленький заказ");
    } else if (orderAmount139 < 20000) {
        console.log("Средний заказ");
    } else if (orderAmount139 < 50000) {
        console.log("Большой заказ");
    } else {
        console.log("VIP-заказ");
    }
}

// №140. Проверка роли пользователя
{
    console.log("\n--- Задание 140 ---");

    let role140 = "editor";
    let isBlocked140 = false;

    if (isBlocked140) {
        console.log("Пользователь заблокирован");
    } else if (role140 === "admin") {
        console.log("Доступ к управлению");
    } else if (role140 === "editor") {
        console.log("Доступ к редактированию");
    } else if (role140 === "viewer") {
        console.log("Доступ только для просмотра");
    } else {
        console.log("Неизвестная роль");
    }
}

// №141. Подсчёт успешных попыток
{
    console.log("\n--- Задание 141 ---");

    let attempts141 = [true, false, true, true, false, true, false];
    let success141 = 0;
    let failure141 = 0;

    for (let i141 = 0; i141 < attempts141.length; i141++) {
        if (attempts141[i141] === true) {
            success141++;
        } else {
            failure141++;
        }
    }

    let percent141 = success141 / attempts141.length * 100;

    console.log("Успешные попытки:", success141);
    console.log("Неуспешные попытки:", failure141);
    console.log("Процент успеха:", percent141.toFixed(2) + "%");
}

// №142. Анализ времени работы компьютеров
{
    console.log("\n--- Задание 142 ---");

    let hours142 = [5, 8, 3, 12, 7, 10, 4];
    let totalHours142 = 0;
    let maxHours142 = hours142[0];
    let overEight142 = 0;

    for (let i142 = 0; i142 < hours142.length; i142++) {
        totalHours142 += hours142[i142];

        if (hours142[i142] > maxHours142) {
            maxHours142 = hours142[i142];
        }

        if (hours142[i142] > 8) {
            overEight142++;
        }
    }

    console.log("Общее время:", totalHours142);
    console.log("Среднее время:", (totalHours142 / hours142.length).toFixed(2));
    console.log("Максимальное время:", maxHours142);
    console.log("Работали более 8 часов:", overEight142);
}

// №143. Замена запрещённых слов
{
    console.log("\n--- Задание 143 ---");

    let message143 = "This is a bad example. BAD words are not allowed.";
    let cleanMessage143 = message143.replaceAll(/bad/gi, "***");

    console.log("Исходное сообщение:", message143);
    console.log("Новое сообщение:", cleanMessage143);
}

// №144. Анализ результатов соревнований
{
    console.log("\n--- Задание 144 ---");

    let results144 = [78, 96, 85, 92, 67, 88, 99, 74];
    let maxScore144 = Math.max(...results144);
    let sortedResults144 = [...results144].sort((a, b) => b - a);
    let topThree144 = sortedResults144.slice(0, 3);
    let totalScore144 = results144.reduce((sum, score) => sum + score, 0);
    let count90_144 = results144.filter(score => score >= 90).length;

    console.log("Максимальный балл:", maxScore144);
    console.log("Результаты по убыванию:", sortedResults144);
    console.log("Три лучших результата:", topThree144);
    console.log("Средний балл:", (totalScore144 / results144.length).toFixed(2));
    console.log("Баллов не менее 90:", count90_144);
}

// №145. Создание массива случайных чисел
{
    console.log("\n--- Задание 145 ---");

    let numbers145 = [];

    for (let i145 = 0; i145 < 10; i145++) {
        numbers145.push(Math.floor(Math.random() * 50) + 1);
    }

    console.log("Массив:", numbers145);
    console.log("Минимум:", Math.min(...numbers145));
    console.log("Максимум:", Math.max(...numbers145));
}

// №146. Сравнение списков студентов
{
    console.log("\n--- Задание 146 ---");

    let groupA146 = ["Алия", "Арман", "Руслан", "Мадина"];
    let groupB146 = ["Руслан", "Данияр", "Алия", "Тимур"];

    let commonStudents146 = groupA146.filter(name =>
        groupB146.includes(name)
    );

    let onlyA146 = groupA146.filter(name =>
        !groupB146.includes(name)
    );

    console.log("В обеих группах:", commonStudents146);
    console.log("Только в группе A:", onlyA146);
}

// №147. Подсчёт частоты чисел
{
    console.log("\n--- Задание 147 ---");

    let numbers147 = [2, 4, 2, 5, 4, 2, 7, 5, 4];
    let frequency147 = {};

    for (let number147 of numbers147) {
        frequency147[number147] = (frequency147[number147] || 0) + 1;
    }

    let mostFrequent147 = numbers147[0];

    for (let number147 in frequency147) {
        if (frequency147[number147] > frequency147[mostFrequent147]) {
            mostFrequent147 = Number(number147);
        }
    }

    console.log("Частота чисел:", frequency147);
    console.log("Самое частое число:", mostFrequent147);
}

// №148. Фильтрация сообщений
{
    console.log("\n--- Задание 148 ---");

    let messages148 = [
        "Привет",
        "Изучаем программирование",
        "JavaScript",
        "Практическая работа",
        "Код"
    ];

    let longMessages148 = messages148.filter(message => message.length > 10);

    console.log("Сообщения длиннее 10 символов:", longMessages148);
    console.log("Количество:", longMessages148.length);
}

// №149. Среднее время выполнения теста
{
    console.log("\n--- Задание 149 ---");

    let testTimes149 = [12, 15, 10, 18, 14];

    function calculateAverageTime149(times) {
        if (times.length === 0) {
            return 0;
        }

        let sum149 = times.reduce((sum, time) => sum + time, 0);
        return sum149 / times.length;
    }

    console.log("Среднее время:", calculateAverageTime149(testTimes149));
}

// №150. Проверка доступности имени пользователя
{
    console.log("\n--- Задание 150 ---");

    let usernames150 = ["student", "admin", "developer", "tester"];
    let newUsername150 = "Student";

    function isUsernameAvailable150(username) {
        return !usernames150.some(name =>
            name.toLowerCase() === username.toLowerCase()
        );
    }

    console.log(
        isUsernameAvailable150(newUsername150)
            ? "Имя доступно"
            : "Имя уже занято"
    );
}

// №151. Подсчёт баллов за задачи
{
    console.log("\n--- Задание 151 ---");

    let tasks151 = [
        { name: "Задача 1", points: 10, completed: true },
        { name: "Задача 2", points: 20, completed: false },
        { name: "Задача 3", points: 15, completed: true },
        { name: "Задача 4", points: 25, completed: false }
    ];

    function calculatePoints151(tasks) {
        let earned151 = tasks
            .filter(task => task.completed)
            .reduce((sum, task) => sum + task.points, 0);

        let unfinished151 = tasks.filter(task => !task.completed).length;

        console.log("Набрано баллов:", earned151);
        console.log("Незавершённых задач:", unfinished151);
    }

    calculatePoints151(tasks151);
}

// №152. Статистика заказов
{
    console.log("\n--- Задание 152 ---");

    let orders152 = [
        { id: 1, amount: 5000, status: "paid" },
        { id: 2, amount: 8000, status: "pending" },
        { id: 3, amount: 12000, status: "paid" },
        { id: 4, amount: 3000, status: "cancelled" },
        { id: 5, amount: 7000, status: "pending" }
    ];

    let paidTotal152 = orders152
        .filter(order => order.status === "paid")
        .reduce((sum, order) => sum + order.amount, 0);

    let pendingCount152 = orders152.filter(
        order => order.status === "pending"
    ).length;

    let cancelledCount152 = orders152.filter(
        order => order.status === "cancelled"
    ).length;

    console.log("Сумма оплаченных заказов:", paidTotal152);
    console.log("Ожидают оплаты:", pendingCount152);
    console.log("Отменено заказов:", cancelledCount152);
}

// №153. Управление устройствами
{
    console.log("\n--- Задание 153 ---");

    let devices153 = [
        { name: "Компьютер", status: "available" },
        { name: "Принтер", status: "busy" },
        { name: "3D Printer", status: "busy" },
        { name: "Проектор", status: "available" }
    ];

    function getAvailableDevices153() {
        return devices153.filter(device => device.status === "available");
    }

    function changeDeviceStatus153(name, status) {
        let device = devices153.find(item => item.name === name);

        if (device) {
            device.status = status;
            console.log("Статус обновлён:", device.name, device.status);
        } else {
            console.log("Устройство не найдено");
        }
    }

    console.log("Доступные устройства:", getAvailableDevices153());

    changeDeviceStatus153("3D Printer", "available");

    console.log("После изменения:", getAvailableDevices153());
}

// №154. Формирование электронного чека
{
    console.log("\n--- Задание 154 ---");

    let cart154 = [
        { name: "Мышь", price: 5000, quantity: 2 },
        { name: "Клавиатура", price: 12000, quantity: 1 },
        { name: "Наушники", price: 8000, quantity: 1 }
    ];

    function generateReceipt154(cart) {
        if (cart.length === 0) {
            console.log("Корзина пуста");
            return;
        }

        let total154 = 0;

        console.log("=== ЧЕК ПОКУПКИ ===");

        for (let item of cart) {
            let itemTotal = item.price * item.quantity;
            total154 += itemTotal;

            console.log(
                item.name + " — " +
                item.quantity + " шт. × " +
                item.price + " = " +
                itemTotal + " ₸"
            );
        }

        console.log("ИТОГО:", total154, "₸");
    }

    generateReceipt154(cart154);
}
