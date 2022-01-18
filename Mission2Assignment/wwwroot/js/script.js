
//function to calculate letter grade
function calcLetter(n) {
    result=""
    if (n >= 94) {
        result = "A"
    }
    else if ((n >= 90) && (n < 94)) {
        result = "A-"
    }
    else if ((n >= 87) && (n < 90)) {
        result = "B+"
    }
    else if ((n >= 84) && (n < 87)) {
        result = "B"
    }
    else if ((n >= 80) && (n < 84)) {
        result = "B-"
    }
    else if ((n >= 77) && (n < 80)) {
        result = "C+"
    }
    else if ((n >= 74) && (n < 77)) {
        result = "C"
    }
    else if ((n >= 70) && (n < 74)) {
        result = "C-"
    }
    else if ((n >= 67) && (n < 70)) {
        result = "D+"
    }
    else if ((n >= 64) && (n < 67)) {
        result = "D"
    }
    else if ((n >= 60) && (n < 64)) {
        result = "D-"
    }
    else {
        result= "E"
    }

    return result
}

//alert for final grade and letter grade when button is clicked 
$("#btnGrade").click(function () {
    //the total grade
    finalPerc = (($("#assignments").val() * .55) + ($("#groupproject").val() * .05) + ($("#quizzes").val() * .10) + ($("#exams").val() * .20) + ($("#intex").val() * .10)).toFixed(2)

    if (($("#assignments").val() < 101 && $("#assignments").val() >= 0) && ($("#groupproject").val() < 101 && $("#groupproject").val() >= 0) && ($("#quizzes").val() < 101 && $("#quizzes").val() >= 0) && ($("#exams").val() < 101 && $("#exams").val() >= 0) && ($("#intex").val() < 101 && $("#intex").val() >= 0)){

        //alert result
        alert("Final Percentage: " + ((finalPerc)) + "%"
            + "\n" + "Letter Grade: " + calcLetter(finalPerc));
    }else {
        alert("Please enter a number between 0-100.")
    }
})