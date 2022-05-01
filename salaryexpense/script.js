function calculate() {
    const form = document.getElementById('form');
    var sum = 0;
    for(let i = 0; i < form.length; i++) {
        sum += parseInt(form[i].value);
    }
    var hourlyPay = document.getElementById("hourly").value;
        var result = sum * hourlyPay;
    }

