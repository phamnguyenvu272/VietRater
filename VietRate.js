function calculate() {
    let love = loveStatus(); 

    let result = "Hey boy \n" + love;

    document.getElementById("output1").value = result;
}

function loveStatus() {
    let maleLoveOutput = "Khi nào có bạn gái đây anh giai ơi? \n",
        femaleLoveOutput = "Khi nào có bạn trai đây chị gái ơi? \n",
        loveOutput = "";

    let gen = document.getElementsByName("gender");
    let love = document.getElementsByName("loveStatus");       

    if(gen[0].checked) {
        if (love[1].checked) {
            loveOutput = maleLoveOutput;
        }
    } else {
        if (love[1].checked) {
            loveOutput = femaleLoveOutput;
        }
    }

    return loveOutput;
}