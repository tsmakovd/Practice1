let money, time;

function start() {
        money = +prompt("Ваш бюджет на месяц?", '');
	    time = prompt('Введите дату в формате YYYY-MM-DD', '');

        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", '');
        }
}
start();




let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
            if ((typeof (a)) === 'string' && (typeof(a)) != null && (typeof(b) != null) && a != '' && b != '' && a.length < 50){
                console.log ("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
    }
}
chooseExpenses();

function chooseOptionalExpenses() {
    for (let i = 0; i < 3; i++) {
        let c = prompt("Введите необязательную статью расходов в этом месяце", '');
    
            if ((typeof (c)) === 'string' && (typeof(c)) != null && c != '' && c.length < 50){
                console.log ("done too!");
                appData.optionalExpenses[i] = c;
            } else {
                i = i - 1;
            }
    }
}
chooseOptionalExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log ("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log ("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log ("Высокий уровень достатка");
} else {
	console.log ("Произошла ошибка!");
}

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: "+ appData.monthIncome);
    }
}

checkSavings();
