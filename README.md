## Tutorial

AvtoperevirkaModule-1:

1.

Змінні використовуються для зберігання даних. У кожної змінної є ідентифікатор
(назва змінної). Значення кожної змінної зберігається в оперативній пам'яті.

Змінну можна уявити як коробку з написом (ім'я змінної), в якій щось знаходиться
(значення змінної).

<ключове слово> <назва змінної> = <значення>

Оголошення змінної починається з ключового слова const. Така змінна має бути
одразу ініціалізована початковим значенням, і такій змінній не можна надати інше
значення після її ініціалізації. Увага

Створення змінної без ключового слова const призведе до помилки.

const age = 20; const userName = "Mango"; const socialProfileTag = "@gluck";
const totalWorkerSalary = 4052;

В JavaScript назва змінної записується в camelCase-нотації. Перше слово пишеться
маленькими буквами, а кожне наступне починається з великої. Назви змінних
чутливі до регістру, тобто user, usEr і User - це різні змінні.

<!--  ЗАВДАННЯ 1 -->

Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання
ціни за штуку. При оголошенні надай змінним наступні значення:

    назва - рядок "Droid";
    ціна за штуку - число 2000.

    Оголошена змінна productName
    Значення змінної productName - це рядок "Droid"
    Оголошена змінна pricePerItem
    Значення змінної pricePerItem - це число 2000

2.

Для того щоб оголосити змінну, якій у майбутньому можна буде присвоїти нове
значення, використовується ключове слово let. Створення змінної без ключового
слова let або const призведе до помилки.

let age = 5; age = 10;

let username = "Mango"; username = "Poly";

Спроба звернутися до змінної за ім'ям до її оголошення, викличе помилку.

Наприклад, не можна намагатися прочитати або змінити значення змінної до її
оголошення:

// ❌ Неправильно, буде помилка age = 15; // ReferenceError: Cannot access 'age'
before initialization console.log(age); // ReferenceError: age is not defined

// Оголошення змінної age let age = 20;

// ✅ Правильно, звертаємося після оголошення age = 25; console.log(age); // 25

<!--  ЗАВДАННЯ 2 -->

3.

<!--  ЗАВДАННЯ 3 -->

4.

<!--  ЗАВДАННЯ 4 -->

5.

<!--  ЗАВДАННЯ 5 -->

6.

<!--  ЗАВДАННЯ 6 -->

7.

<!--  ЗАВДАННЯ 7 -->

8.

<!--  ЗАВДАННЯ 8 -->

9.

<!--  ЗАВДАННЯ 9 -->

10.

<!--  ЗАВДАННЯ 10 -->
