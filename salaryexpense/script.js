function weekly() {
    const form = document.getElementById('form');
    let sum = 0;
    for(let i = 0; i < form.length; i++) {
        if(form[i].value === "") {
            continue;
        }
        else {
        sum += parseFloat(form[i].value);
        }
    }
    let hourlyPay = document.getElementById("hourly").value;
        let result = sum * hourlyPay;

    let p = document.getElementById("amountweekly");
    p.innerText = "\n" + "The amount you made this week is $" + result.toFixed(2);
    p.style.display = "block";
    }

function daily() {

    let dailyHourlyPay = document.getElementById("dailyhourly").value;
    let hours = document.getElementById("dailytoday").value;
    if(hours === "") {
        hours = 0;
    }
    let todayWork = dailyHourlyPay * parseFloat(hours);

    let p2 = document.getElementById("amountdaily");
    p2.innerText = "\n" + "The amount you made today is $" + todayWork.toFixed();
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
    let monthWork = monthlyHourPay * parseFloat(days_worked) * parseFloat(hoursWorked);

    let p3 = document.getElementById("amountmonthly");
    
    p3.innerText = "\n" + "The amount you made today is $" + monthWork.toFixed(2);
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
            sum += parseFloat(elements[i].value);
        }
    
    }
    let p2 = document.getElementById("expensecalculations");
    p2.innerText = "\n" + "The amount you spent today is $" + sum.toFixed(2);
    p2.style.display = "block";
}

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

    function calculateTime() {
            let valuestart = document.getElementById('timestart').value;
            let valuestop = document.getElementById('timestop').value;
              
    
            let hourStart = new Date("01/01/2007 " + valuestart).getHours();
            let hourEnd = new Date("01/01/2007 " + valuestop).getHours();
             
            let hourDiff = hourEnd - hourStart;    

            let minuteStart = new Date("01/01/2007 " + valuestart).getMinutes();
            let minuteEnd = new Date("01/01/2007 " + valuestop).getMinutes();
            
            let minuteDiff = minuteEnd - parseInt(minuteStart);

            if(minuteDiff < 0) {
                minuteDiff += 60;
                hourDiff = hourDiff - 1;
            }

            let totalTime = hourDiff + minuteDiff/60;
            let p1 = document.getElementById("timeworked");
            p1.innerText = "Time worked: " + totalTime.toFixed(2) + "hours";
             
    }
