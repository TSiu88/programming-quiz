//Back-end logic

//Count each answer for each programming language into array
function tallyResults(program, learning, company, flexibility, partner){
  var jsCount = 0;
  var rbyCount = 0;
  var pytCount = 0;
  var resultArray = [program, learning, company, flexibility, partner];

  resultArray.forEach(function(element){
    if(element === "js"){
      jsCount++;
    }else if(element === "rby"){
      rbyCount++;
    }else if (element === "pyt"){
      pytCount++;
    }
  });

  var countArray = [jsCount, rbyCount, pytCount];

  return countArray;
}

//Find highest count in choices for a language, randomize btwn highest if tied
function highestCount(array){
  var choice;

  var highCount = array[0];
  var highIndex = 0;
  var duplicateCount = array[0];
  var duplicateIndex = [0];
  var duplicateFound = false;

  for(var i=1; i<array.length; i++){
    if(array[i] === highCount){
      
      if(duplicateCount < highCount && duplicateFound === true){
        duplicateIndex.length = 0;
      }
      duplicateFound = true;
      duplicateCount = array[i];
      duplicateIndex.push(i);
    }
    else if(array[i] > highCount){
      highIndex = i;
      highCount = array[i];
      if(duplicateFound === false){
        duplicateIndex.length = 0;
        duplicateCount = i;
        duplicateIndex.push(highIndex);
      }
    }
  }

  if(duplicateCount === highCount){
    var randomPick = randomizedResult(duplicateIndex.length);
    choice = convertToResult(duplicateIndex[randomPick]);
  }
  else{
    choice = convertToResult(highIndex);
  }

  return choice;
}

//Convert random number to one of tied language results
function convertToResult(index){
  var resultTag;
  if(index === 0){
    resultTag = "javascript";
  }
  else if(index === 1){
    resultTag = "ruby";
  }
  else if(index === 2){
    resultTag = "python";
  }
  return resultTag;
}

//Get randomized index number for array of duplicated indexes
function randomizedResult(length){
  return Math.floor(Math.random() * length);
}

//Front-end logic
$(document).ready(function () {
  $(".inputs").submit(function (event) {
    
    var nameInput = $("#name").val();
    var programInput = $("input:radio[name=programType]:checked").val();
    var learningInput = $("input:radio[name=learningEase]:checked").val();
    var companyInput = $("input:radio[name=companyType]:checked").val();
    var flexibilityInput = $("input:radio[name=flexibility]:checked").val();
    var partnerInput = $("input:radio[name=partner]:checked").val();

    var counts = tallyResults(programInput, learningInput, companyInput, flexibilityInput, partnerInput);

    console.log(counts);

    var result = highestCount(counts);
    var greeting = "";
    if(nameInput !== ""){
      $(".nameInsert").text("");
      greeting = "Hi " + nameInput + ", ";
    }
    

    $(".nameInsert").append(greeting);

    $(".results").show();
    $("#ruby").hide();
    $("#python").hide();
    $("#javascript").hide();
    $(".logo").hide();

    if(result === "javascript"){
      $(".logo").hide();
      $("#javascript").show();
      $(".logo").fadeIn("slow");
    }else if(result === "ruby"){
      $(".logo").hide();
      $("#ruby").show();
      $(".logo").fadeIn("slow");
    }else if(result === "python"){
      $(".logo").hide();
      $("#python").show();
      $(".logo").fadeIn("slow");
    }

    event.preventDefault();
  })
  
});