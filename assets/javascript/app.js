document.addEventListener("DOMContentLoaded", function (event) {


    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var startQuiz = document.getElementById("start-game");
    var quiz = document.getElementById("quiz");
    var submit = document.getElementById("submit")
    var results = document.getElementById("grade")
    var answers = ["b", "c", "c", "a", "b", "c"]
    var timeLeft = 60;

    var intervalId;


    //add a timer 

    function timeLeftFunction() {
        timeLeft--;
        $("#timeLeft").html("Time remaining: " + timeLeft);
    }


    $("#start").on("click", function () {
        startQuiz.style.display = "none";
        quiz.style.display = "block";
        console.log("beef")
            setInterval(timeLeftFunction, 1000);
            console.log("chicken")




        //make the timer start


    })

    function grading() {

        function getCheckedValue(radioName) {
            var radios = document.getElementsByName(radioName); // Get radio group by-name
            for (var y = 0; y < radios.length; y++) {
                var checkedAnswer = false
                if (radios[y].checked) {
                    return radios[y].value;
                }
            }
            if (checkedAnswer === false) {
                return 0;
            }
        }

        for (var i = 0; i < answers.length; i++) {
            if (getCheckedValue("question" + i) === answers[i]) {
                correct++
            }
            else if (getCheckedValue("question" + i) === 0) {
                unanswered++
            }
            else {
                incorrect++
            }

        }
    }





    $("#submit").on("click", function () {
        quiz.style.display = "none";
        grading();
        results.style.display = "block";
        $("#results").append("Results:")
        $("#correct").append("You answered " + correct + " correctly");
        $("#incorrect").append("You answered " + incorrect + " incorrectly");
        $("#unanswered").append("You did not answer " + unanswered + " questions.");

    })






















});