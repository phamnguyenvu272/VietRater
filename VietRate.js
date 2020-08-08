function calculate() {
    let score = scoreCalculator();
    let love = loveStatus();

    let result = "Viet Score: " + score + love;

    document.getElementById("output1").value = result;
}

function loveStatus() {
    let maleLoveOutput = "Khi nào có bạn gái đây anh giai ơi? :) \n",
        femaleLoveOutput = "Khi nào có bạn trai đây chị gái ơi? :) \n",
        loveOutput = "";

    let gen = document.getElementsByName("gender");
    let love = document.getElementsByName("loveStatus");

    if (gen[0].checked) {
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

function scoreCalculator() {
    let score = 0;
    result = "";

    let message05 = "You are bring shame to your family. smh.\n",
        message610 = "You made your family proud!\n";

    //Calculate score from last name
    score += nameScore();

    //Calculate score from occupation
    score += jobScore();

    //Calculate score from loveStatus
    score += loveScore();

    //Calculate score from instruments
    score += instrumentScore();

    //Calculate score from cooking skill
    score += cookingScore();

    //Add the score to out of 10 to result string
    result = score.toString() + "/10\n";

    //if score = ? => then append the appropriate message there
    if (score <= 5) {
        result += message05;
    } else {
        result += message610;
    }

    return result;
}

function nameScore() {
    let nameScore = 0;

    let lastName = document.getElementById("lastName");
    let nameIndex = lastName.value;
    //If last name is "Nguyen", add 1 point
    if (nameIndex.toString() == "Nguyen") {
        nameScore += 1;
    }

    return nameScore;
}

function jobScore() {
    let jobScore = 0;

    let job = document.getElementById("occupation");
    let jobIndex = job.value;

    let highJob = ["Medical", "Law"];
    let midJob = ["Engineering", "Business", "Education", "Student"];
    let lowJob = ["Sales", "Art", "Government"];
    let hobo = "Unemployed";

    //Add 3 point to high prestige jobs
    if (highJob.indexOf(jobIndex) > -1) {
        jobScore += 3;
    }

    //Add 2 point to high prestige jobs
    if (midJob.indexOf(jobIndex) > -1) {
        jobScore += 2;
    }

    //Add 1 point to high prestige jobs
    if (lowJob.indexOf(jobIndex) > -1) {
        jobScore += 1;
    }

    //Take 1 point away of the hobos
    if (jobIndex == hobo) {
        jobScore -= 1;
    }

    return jobScore;
}

function loveScore() {
    let loveScore = 0;

    let love = document.getElementsByName("loveStatus");
    if (love[0].checked) {
        loveScore += 2;
    }

    return loveScore;
}

function instrumentScore() {
    let instrumentsScore = 0;

    let instruments = document.getElementById("instruments");
    let instrumentsIndex = instruments.value;

    let highInstrument = ["Piano", "Violin"];
    let midInstrument = ["Guitar", "Other"];

    //Add 3 point to high prestige jobs
    if (highInstrument.indexOf(instrumentsIndex) > -1) {
        instrumentsScore += 2;
    }

    //Add 2 point to high prestige jobs
    if (midInstrument.indexOf(instrumentsIndex) > -1) {
        instrumentsScore += 1;
    }

    return instrumentsScore;
}

function cookingScore() {
    let cookingScore = 0;

    let cook = document.getElementsByName("cooking");
    if (cook[0].checked) {
        cookingScore += 2;
    }

    return cookingScore;
}
