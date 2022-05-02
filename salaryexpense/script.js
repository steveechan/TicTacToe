function weekly() {
    const form = document.getElementById('form');
    let sum = 0;
    for(let i = 0; i < form.length; i++) {
        if(form[i].value === "") {
            continue;
        }
        else {
        sum += parseInt(form[i].value);
        }
    }
    let hourlyPay = document.getElementById("hourly").value;
        let result = sum * hourlyPay;

    let p = document.getElementById("amountweekly");
    p.innerText = "\n" + "The amount you made this week is $" + result;
    p.style.display = "block";
    }

function daily() {

    let dailyHourlyPay = document.getElementById("dailyhourly").value;
    let hours = document.getElementById("dailytoday").value;
    if(hours === "") {
        hours = 0;
    }
    let todayWork = dailyHourlyPay * parseInt(hours);

    let p2 = document.getElementById("amountdaily");
    p2.innerText = "\n" + "The amount you made today is $" + todayWork;
    p2.style.display = "block";
}

function monthly() {
    let monthlyHourPay = document.getElementById("monthly").value;
    if(monthlyHourPay === "") {
        monthlyHourPay = 0;
    }
    let days_worked = document.getElementById("dayswork").value;
    if(days_worked === "") {
        days_worked = 0;
    }
    let hoursWorked = document.getElementById("hourswork").value;
    if(hoursWorked === "") {
        hoursWorked = 0;
    }
    let monthWork = monthlyHourPay * parseInt(days_worked) * parseInt(hoursWorked);

    let p3 = document.getElementById("amountmonthly");
    
    p3.innerText = "\n" + "The amount you made today is $" + monthWork;
    p3.style.display = "block";
}
let count = 0;
function add_more_field() {
    let expenseButton = document.getElementById("expenseGenerator");
    expenseButton.style.display = "none";
    let numOf = document.getElementById("numberofexpense").value;
    let p4 = document.getElementById("expense_form");
    p4.style.display = "block";
    while(count < numOf - 1) {
    count+=1;
    html='<div class="row" id="row1'+count+'">\
    <div class="col">\
        <input type="text" name="expense1" class="form-control" placeholder="Expense">\
        <input type="number" name="price1" class="form-control" placeholder="$">\
    </div>\
</div>'
    let form = document.getElementById('expense_form')
    form.innerHTML+=html; }
    let expenseCalc = document.getElementById("expenseCalc");
    expenseCalc.style.display = "block";
}
function expense() {
    const form = document.getElementById('expense_form');
    const elements = form.querySelectorAll('input[type=number]');
    let sum = 0;
    for(let i = 0; i < elements.length; i++) {
        if(elements[i].value > 0) {
            sum += parseInt(elements[i].value);
        }
    
    }
    let p2 = document.getElementById("expensecalculations");
    p2.innerText = "\n" + "The amount you spent today is $" + sum;
    p2.style.display = "block";
    
}