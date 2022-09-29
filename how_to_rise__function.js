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

// и второй способ

const x=(radius)=>{return 3.14*radius**2};
const s = x(2);
const getColour =(colour) =>(colour===12 ? "white":"black")
// console.log(getColour(10))

const finalGrade=(exam, projects)=> {
    if (projects>10  || exam>90){
        return 100;
    } else if (exam>75 && projects>=5){
        return 90;

    } else if (exam>50 && projects>= 2){
        return 75;
    } else {
        return 0;
    }

}


document.write(finalGrade(700, 225))


