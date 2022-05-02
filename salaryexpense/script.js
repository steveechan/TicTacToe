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

