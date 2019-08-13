document.addEventListener("DOMContentLoaded", function (event) { //wrap everything in this to keep from polluting global

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var startQuiz = document.getElementById("start-game");
    var quiz = document.getElementById("quiz");                     //global variables
    var results = document.getElementById("grade")
    var answers = ["b", "b", "c", "a", "b", "c"]
    var timeLeft = 60;

    function timeLeftFunction() {
        timeLeft--;                 //used to keep track of time and populate the DOM
        $("#timeLeft").html("Time remaining: " + timeLeft);
    }

    function endResults(){
        quiz.style.display = "none";        //function to run if submit button is hit or if time runs out
        grading();
        results.style.display = "block";
        $("#results").append("Results:")
        $("#correct").append("You answered " + correct + " correctly");
        $("#incorrect").append("You answered " + incorrect + " incorrectly");
        $("#unanswered").append("Questions left unanswered: " + unanswered + ".");
    }

    $("#start").on("click", function () {
        startQuiz.style.display = "none";       //when the quiz is started the button to start the quiz is hidden and the quiz is shown with the .style.display = "block"
        quiz.style.display = "block";
        setInterval(timeLeftFunction, 1000);    //interval set to the timeLeft function which counts down every second per the 1000

    })

    function grading() {
        function getCheckedValue(radioName) {
            var radios = document.getElementsByName(radioName); // Get radio group by-name
            for (var j = 0; j < radios.length; j++) {  //going through the radio name values. (multiple choice answers). If one is selected its taking its value and returning it 
                var checkedAnswer = false               //if the value isn't defined (no answer given) the function is returning a zero to compare to the answer array above.
                if (radios[j].checked) {
                    return radios[j].value;
                }
            }
            if (checkedAnswer === false) {
                return 0;
            }
        }
        for (var i = 0; i < answers.length; i++) {
            if (getCheckedValue("question" + i) === answers[i]) {   //values found above are compared with answer array. if they match correct is incremented. if not, incorrect is incremented.
                correct++                                           //if the value is 0 then no answer was given and incorrect is incremented.
            }
            else if (getCheckedValue("question" + i) === 0) {
                unanswered++
            }
            else {
                incorrect++
            }}}

   setTimeout(function () {
    endResults()                //setTimeOut is how the quiz ends itself. it is set to 61 instead of 60 because I found that this part is being read about a second after the interval is read at the beginning so they sync up well
    }, 61 * 1000)

    $("#submit").on("click", function () {
        endResults()

    })
});