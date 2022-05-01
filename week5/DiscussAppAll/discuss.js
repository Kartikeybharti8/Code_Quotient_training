var submitButtonNode = document.getElementById("submitBtn");
var quesTitleNode = document.getElementById("subject");
var quesDescriptionNode = document.getElementById("question");
var leftPaneQuesNode = document.getElementById("dataList");
var rightToggleNode = document.getElementById("toggleDisplay");
var rightPaneQuesNode = document.getElementById("respondQue");
var resolveHolderNode = document.getElementById("resolveHolder");
var resolveNode = document.getElementById("resolveQuestion");
var responseAnsNode = document.getElementById("respondAns");
var commentHolderNode = document.getElementById("commentHolder");
var pickNameNode = document.getElementById("pickName");
var pickCommentNode = document.getElementById("pickComment");
var commentBtnNode = document.getElementById("commentBtn");
var searchQuesNode = document.getElementById("questionSearch")
var upvoteNode = document.getElementById("upvote");
var downvoteNode = document.getElementById("downvote");
var newQuestionFormNode = document.getElementById("newQuestionForm");

searchQuesNode.addEventListener("keyup", function (event) {
  //filter the query entered
  // debugger
  filterSearch(event.target.value);
})

//filter searching
function filterSearch(query) {
  var allQuestions = getAllQues();
  //emptying questions on left
  emptyQuestLt();

  if (query) {
    var allQuestions = getAllQues();

    //filtered question only
    var matchedQuest = allQuestions.filter(function (quest) {
      if (quest.title.includes(query)) {
        return true;
      }
    })
    if (matchedQuest.length) {

      matchedQuest.forEach(function (quest) {
        quesShowLeftPane(quest);
      })
    }
    else {


      leftPaneQuesNode.innerHTML = "NO MATCH FOUND";

    }


  } else {

    //print all question
    reload();

  }

}

//clear questions on left
function emptyQuestLt() {
  leftPaneQuesNode.innerHTML = "";
}


//reload or onload conditions
function reload() {
  var allQuestions = getAllQues();
  allQuestions.sort(function(curQues){
    if(curQues.choice){
      return -1;
    }
    return 1;
  })

  allQuestions.forEach(function (question) {
    quesShowLeftPane(question);
  })

}

//call reload
reload();


//listen the question submit
submitButtonNode.addEventListener("click", onSubmitClick);

//(qes show and save) function onsubmit envoke

function onSubmitClick() {

  var question = {
    title: quesTitleNode.value,
    description: quesDescriptionNode.value,
    responses: [],
    upvote: 0,
    downvote: 0,
    date: Date.now(),
    choice: false,
  }

  saveToStorage(question);
  quesShowLeftPane(question);
  clearPostEntries();
}

// storing question to storage
function saveToStorage(question) {
  //get all the ques first and then append.
  var allQues = getAllQues();
  allQues.push(question);
  localStorage.setItem("question", JSON.stringify(allQues));

}

//getting all question from storage.
function getAllQues() {

  var allQuestions = localStorage.getItem("question");

  if (allQuestions) {
    allQuestions = JSON.parse(allQuestions);
  }
  else {
    allQuestions = [];
  }
  return allQuestions;
}

//diplay question on left
function quesShowLeftPane(question) {

  var quesContainerL = document.createElement("div");

  //setting ques title
  quesContainerL.setAttribute("id", question.title);

  var qTitle = document.createElement("h4");
  qTitle.innerHTML = question.title;
  quesContainerL.appendChild(qTitle);

  var qDescr = document.createElement('p');
  qDescr.innerHTML = question.description;
  quesContainerL.appendChild(qDescr);

  quesContainerL.style.background = "#16b6b6";

  /**here we attach listening point on the ques container
   such that it gets created only once per ques(use onclick) 
   and using higer order function with closure(question) to 
   access question when once its click to ques conrainer happens.
   onlclick receives the returned higher order function.**/

  var upvote = document.createElement("p");
  upvote.innerHTML = "Upvote = " + question.upvote;
  quesContainerL.appendChild(upvote);

  var downvote = document.createElement("p");
  downvote.innerHTML = "Downvote = " + question.downvote;
  quesContainerL.appendChild(downvote);

  var date = document.createElement("p");
  date.innerHTML = new Date(question.date).toLocaleDateString();
  quesContainerL.appendChild(date);

  var time = document.createElement("p");
  time.innerHTML = "created = " + timeAgoCal(question.date);
  quesContainerL.appendChild(time);

  setInterval(function () {
    time.innerHTML = "created = " + timeAgoCal(question.date);
  }, 1000)


  var selectFavButton = document.createElement("button");
  if (question.choice) {
    selectFavButton.innerHTML = "Remove from top"
  } else {
    selectFavButton.innerHTML = "Add to top"
  }
  quesContainerL.appendChild(selectFavButton);

  selectFavButton.onclick = toggleFavChoice(question);


  quesContainerL.onclick = quesShowRtPane(question);
  leftPaneQuesNode.appendChild(quesContainerL);



}



//clearing entries after submit.
function clearPostEntries() {
  quesDescriptionNode.value = "";
  quesTitleNode.value = "";
}

//function to give time ago.
function timeAgoCal(date) {
  var currentTime = Date.now();
  var createdTime = currentTime - new Date(date).getTime();
  var seconds = parseInt(createdTime / 1000);
  var minutes = parseInt(seconds / 60);
  var hours = parseInt(minutes / 60);
  var time = perfectTimeCall(hours, minutes, seconds);
  return time;

}

//time check and return
function perfectTimeCall(hrs, mins, secs) {

  if (hrs == 0) {
    if (mins == 0) {
      return secs + " seconds ago."
    } else {
      return mins + "mins " + parseInt(secs % 60) + "sec ago.";
    }
  } else if (hrs < 24) {
    if (mins == 0) {
      return hrs + "hrs ago."
    } else {
      return hrs + "hrs " + parseInt(mins % 60) + "mins " + parseInt(secs % 60) + "sec ago.";
    }
  } else {
    var days = parseInt(hrs / 24);
    return days + " days ago."
  }
}


//onclick ques diplay on right side
function quesShowRtPane(question) {
  return function () {
    clearRtPanel();
    showDiplayQuesRt(question);
    blockSpaceRt();

    clearPreResponses();

    question.responses.forEach(function (response) {
      showResponses(response);
    })


    commentBtnNode.onclick = saveResponse(question);
    upvoteNode.onclick = doUpVote(question);
    downvoteNode.onclick = doDownVote(question);
    resolveNode.onclick = onResolve(question);

  }
}

//clear right pane.
function clearRtPanel() {
  rightToggleNode.style.display = "none"
}

//show ques function on rt
function showDiplayQuesRt(question) {

  clearOldQues();
  var quesContainerR = document.createElement("div");

  var titleR = document.createElement("h4");
  titleR.innerHTML = question.title;
  quesContainerR.appendChild(titleR);

  var descrR = document.createElement('p');
  descrR.innerHTML = question.description;
  quesContainerR.appendChild(descrR);

  quesContainerR.style.background = "#16b6b6";

  rightPaneQuesNode.appendChild(quesContainerR);



}

//fresh question display on distinct ques click
function clearOldQues() {
  rightPaneQuesNode.innerHTML = "Question"

}

// // showing all the responses for a current ques  clicked
// function showPreResponses(question){
//   showResponses(question);
// }


//block space for diplay on rt.
function blockSpaceRt() {
  rightPaneQuesNode.style.display = "block";
  resolveHolderNode.style.display = "block";
  commentHolderNode.style.display = "block";
  responseAnsNode.style.display = "block";

  //  pickNameNode.style.diplay="block";
  //  pickCommentNode.style.diplay="block";
  //  commentBtnNode.style.diplay="block";

}

//higher function send or activated when submit clicked
function saveResponse(question) {


  return function () {
    var responses = {
      name: pickNameNode.value,
      comment: pickCommentNode.value
    }

    submitResponse(question, responses);
    showResponses(responses);
    clearTextEntries();
  }
}

//actually saves responses for any ques
function submitResponse(question, responses) {
  //adding a response to question.
  var allQuestions = getAllQues();

  var updatedQues = allQuestions.map(function (questRand) {
    if (question.title === questRand.title) {
      questRand.responses.push(responses)
    }
    return questRand;
  });

  localStorage.setItem("question", JSON.stringify(updatedQues));

}

//shows all the reponses on the rt pane for a particular ques clicked
function showResponses(responses) {



  var resContainer = document.createElement("div");

  var name = document.createElement("h4");
  name.innerHTML = responses.name;
  resContainer.appendChild(name);

  var comment = document.createElement('p');
  comment.innerHTML = responses.comment;
  resContainer.appendChild(comment);

  resContainer.style.background = "#16b6b6";

  responseAnsNode.appendChild(resContainer);



}

//clearing the screen for appending updated reponses on the pane. 
function clearPreResponses() {
  responseAnsNode.innerHTML = "Response"
}

//clear the textbox entries for response submitted.
function clearTextEntries() {
  pickNameNode.value = "";
  pickCommentNode.value = "";
}

//upvoting the question
function doUpVote(question) {
  return function () {
    question.upvote++;
    updateQuestion(question);
    realTimeUpdate(question);
  }
}

//downvoting the question
function doDownVote(question) {
  return function () {
    question.downvote++;
    updateQuestion(question);
    realTimeUpdate(question);
  }
}

//updating the question on the storage
function updateQuestion(updtQues) {
  var allQuestions = getAllQues();

  var updatedQues = allQuestions.map(function (questRand) {
    if (updtQues.title === questRand.title) {
      questRand = updtQues;
    }
    return questRand;
  });

  localStorage.setItem("question", JSON.stringify(updatedQues));

}

//change question at real time  (******)
function realTimeUpdate(question) {
  var questContainer = document.getElementById(question.title);
  questContainer.childNodes[2].innerHTML = "Upvote = " + question.upvote;
  questContainer.childNodes[3].innerHTML = "Downvote = " + question.downvote;

}

//removing item from list if resolved
function onResolve(question) {
  return function () {
    var allQuestions = getAllQues();
    var updatedQuesList = allQuestions.filter(function (quest) {
      if (question.title !== quest.title) {
        return true;
      }
    });

    localStorage.setItem("question", JSON.stringify(updatedQuesList));
    window.location.reload();
  }
}

//onclick newform button window reload.
newQuestionFormNode.onclick = function () {
  window.location.reload();
}

//toggle the favourite choice
function toggleFavChoice(question) {
  return function (event) {
    question.choice = !question.choice;
    updateQuestion(question);
    // if (question.choice) {
    //   event.target.innerHTML = "Remove from top"
    // } else {
    //   event.target.innerHTML = "Add to top"

    // }
  }
}


//...........................


function deletFaltu(){
   var request = new XMLHttpRequest();
    var body={data:JSON.stringify([])};
    request.open("POST", "https://storage.codequotient.com/data/save");
    request.setRequestHeader("Content-type", "application/json");

    request.send(JSON.stringify(body));
    //call event onload
    request.addEventListener("load", function () {
      console.log("data: " + request.responseText);
    })
}
deletFaltu();
