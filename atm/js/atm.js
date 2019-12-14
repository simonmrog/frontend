function dispenseMoney () {

    dispensed = [0, 0, 0];
    var money = parseInt(text.value);

    if (!possible (money))
        result.innerHTML += "ATM doesn't have notebanks to dispense that money <hr />";
    else if (money > totalCash())
        result.innerHTML += "ATM doesn't have enough money <hr />";
    else {

        for (var i = 0; money > 0 && i < cash.length; i++) {

            dispensed[i] = Math.floor (money / cash[i].faceValue);
            if (dispensed[i] > cash[i].quantity)
                dispensed[i] = cash[i].quantity;

            money = money - cash[i].faceValue * dispensed[i];
            cash[i].quantity -= dispensed[i];
        }

        if (money > 0) {
            return_money ();
            result.innerHTML += "ATM doesn't have notebanks to dispense that money <hr />";
        }

        else {

            for (var i=0; i<cash.length; i++) {
                for (var j=0; j<dispensed[i]; j++)
                    result.innerHTML += "<img src=" + cash[i].image.src + " />";
            }
            result.innerHTML += "<hr />";
        }
    }

    console.log ("Total cash in ATM: " + totalCash());
}

function return_money () {

    for (var i=0; i<dispensed.length; i++)
        cash[i].quantity += dispensed[i];
}

function possible (money) {

    var flag = false;

    for (var i=0; i<cash.length; i++)
        if (money % cash[i].faceValue == 0 && cash[i].quantity != 0)
            flag = true;

    return (flag);
}

function totalCash () {

    var total = 0;
    for (var i=0; i<cash.length; i++)
        total += cash[i].faceValue * cash[i].quantity;
    return total;
}

var images = [];
images["50"] = "img/notebank50.jpg";
images["20"] = "img/notebank20.jpg";
images["10"] = "img/notebank10.jpg";

var cash = []
cash.push (new Banknotes(50, 10));
cash.push (new Banknotes(20, 10));
cash.push (new Banknotes(10, 10));
var dispensed;

console.log ("Total cash in ATM: " + totalCash());

var result = document.getElementById("result");
var button = document.getElementById("dispense");
var text = document.getElementById("money");
button.addEventListener("click", dispenseMoney);
