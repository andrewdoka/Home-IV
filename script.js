
// Variable declarations : 



var start = $("#start");

var questionCard = $("#questionsCard");



var questions = [
    { q: "Question 1", question: ["This is Question 1"], a: "1A",
choiceA: "This is choice A1",
choiceB: "This is choice B1",
choiceC: "This is choice C1"
},
    { q: "Question 2", question: ["This is Question 2"], a: "1B", 
    choiceA: "This is choice A2",
    choiceB: "This is choice B2",
    choiceC: "This is choice C2"
},
    { q: "Question 3", question: ["This is Question 3"], a: "1C",
    choiceA: "This is choice A3",
    choiceB: "This is choice B3",
    choiceC: "This is choice C3"
},
    { q: "Question 4", question: ["This is Question 4"], a: "1D", 
    choiceA: "This is choice A4",
    choiceB: "This is choice B4",
    choiceC: "This is choice C4"
},
    { q: "Question 5", question: ["This is Question 5"], a: "1E",
    choiceA: "This is choice A5",
    choiceB: "This is choice B5",
    choiceC: "This is choice C5"
}
  ];

  var correct = 0;
  var wrong = 0;
  var qindex = 0;
  var secondsLeft = 30;



  var choice;

  

  var HeaderQuestionEl = document.querySelector("#questionHeader");
  var questionEl = document.querySelector("#question");
  var timeEl = document.querySelector("#timer");
  var endEl = document.querySelector("#finalCard");
  
  
  var choiceAEl = document.querySelector("#choiceA");
  var choiceBEl = document.querySelector("#choiceB");
  var choiceCEl = document.querySelector("#choiceC");

  
  

  function questionrotation () {

    HeaderQuestionEl.innerHTML = (questions[qindex].q);
    questionEl.innerHTML = (questions[qindex].question);
    choiceAEl.innerHTML = (questions[qindex].choiceA);
    choiceBEl.innerHTML = (questions[qindex].choiceB);
    choiceCEl.innerHTML = (questions[qindex].choiceC);

    qindex++

  }

  // Functions : 

//Start Function : 
$("#start").on("click", function() {

    $("#start").attr("class","d-none");
    
    $("#questionsCard").attr("class","d-all");
    
    questionrotation();

    setTime ();

    });

//Question Function : 
    $("#submit").on("click", function() {
        
        questionrotation()
        

    
    });
   


// Time Function : 
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left for exam";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }


  function sendMessage() {
    timeEl.textContent = " Time is up ";
   
    $("#start").attr("class","d-none");
    
    $("#questionsCard").attr("class","d-none");

    $("#finalCard").attr("class","d-all");

$('#theDiv').prepend('<img id="theImg" src="https://i.pinimg.com/originals/7f/29/60/7f296084de561f6444a115475961af23.png" />')

  }








  
    
    
    
    
    
 


    
