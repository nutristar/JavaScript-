var a=0
function testCase(a) {
    var x;
    switch (a) {
        case 0:
            x = "Ноль";
            break;
        case 1:                               // если a равна единице то записываем
            x = "Один";  // в переменную x фразу "Переменная a равна единице!"
            break;
        case 2:
            x = "Два";
            break;
        case 3:
            x = "Три!";
            break;
        case 4:
            x = "Четыре";
            break;
        case 5:
            x = "Пять";
            break;
        case 6:
            x = "Шесть";
            break;
        case 7:
            x = "Семь";
            break;
        case 8:
            x = "Восемь";
            break;
        case 9:
            x = "Девять";
            break;

    }
    // Тут нужно написать решение
    return x;
}

console.log(  testCase(a));
document.write(testCase(a));
document.write("asasasaasas");
console.log('Hello World');
document.write("Hello World!");