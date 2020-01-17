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

  //js > rby
  if(array[0] > array[1]){
    //js > (rby && pyt)
    if(array[0]> array[2]){
      choice = "javascript";
    }
    //js === pyt
    else if (array[0] === array[2]){
      var randomPick = randomizedResult();
      if (randomPick === 0){
        choice = "javascript";
      } else{
        choice = "python";
      }
    }
    else{
      choice = "python";
    }
  }else if(array[0] == array[1]){

  }

  

}

function convertToPoints(input){
  var points;
  if(input === "js"){
    points = 1;
  }
  else if(input === "rby"){
    points = 2;
  }
  else if(input === "pyt"){
    points = 3;
  }
  return points;
}

function randomizedResult(){
  return Math.getRandomInt(2);
}

//Front-end logic
$(document).ready(function () {
  $(".inputs").submit(function (event) {
    
    var programInput = $("input:radio[name=programType]:checked").val();
    var learningInput = $("input:radio[name=learningEase]:checked").val();
    var companyInput = $("input:radio[name=companyType]:checked").val();
    var flexibilityInput = $("input:radio[name=flexibility]:checked").val();
    var partnerInput = $("input:radio[name=partner]:checked").val();
    
    var programPoints = convertToPoints(programInput);
    var learningPoints = convertToPoints(learningInput);
    var companyPoints = convertToPoints(companyInput);
    var flexibilityPoints = convertToPoints(flexibilityInput);
    var partnerPoints = convertToPoints(partnerInput);

    console.log(programInput);
    console.log(learningInput);
    console.log(companyInput);
    console.log(flexibilityInput);
    console.log(partnerInput);

    var counts = tallyResults(programInput, learningInput, companyInput, flexibilityInput, partnerInput);

    console.log(counts);

    var result = highestCount(counts);

    event.preventDefault();
  })
  
});