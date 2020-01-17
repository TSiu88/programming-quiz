//Back-end logic
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

function randomizedResult(length){
  return Math.floor(Math.random() * length);
}

//Front-end logic
$(document).ready(function () {
  $(".inputs").submit(function (event) {
    
    var programInput = $("input:radio[name=programType]:checked").val();
    var learningInput = $("input:radio[name=learningEase]:checked").val();
    var companyInput = $("input:radio[name=companyType]:checked").val();
    var flexibilityInput = $("input:radio[name=flexibility]:checked").val();
    var partnerInput = $("input:radio[name=partner]:checked").val();

    console.log(programInput);
    console.log(learningInput);
    console.log(companyInput);
    console.log(flexibilityInput);
    console.log(partnerInput);

    var counts = tallyResults(programInput, learningInput, companyInput, flexibilityInput, partnerInput);

    console.log(counts);

    var result = "#" + highestCount(counts);

    console.log("result " + result);

    $(result).show();

    event.preventDefault();
  })
  
});