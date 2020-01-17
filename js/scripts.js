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
  var duplicateIndex = [];

  for(var i=1; i<array.length; i++){
    if(array[i] === highCount){
      
      if(duplicateCount < highCount){
        duplicateIndex.empty();
      }
      duplicateCount = array[i];
      duplicateIndex.push(i);
    }
    else if(array[i] > highCount){
      highIndex = i;
      highCount = array[i];
    }
  }

  if(!duplicateIndex.isEmpty()){
    duplicateIndex
  }

  // //js > rby
  // if(array[0] > array[1]){
  //   //js > (rby && pyt)
  //   if(array[0]> array[2]){
  //     choice = "javascript";
  //   }
  //   //js === pyt
  //   else if (array[0] === array[2]){
  //     var randomPick = randomizedResult();
  //     if (randomPick === 0){
  //       choice = "javascript";
  //     } else{
  //       choice = "python";
  //     }
  //   }
  //   else{
  //     choice = "python";
  //   }
  // }else if(array[0] == array[1]){

  // }


  // if(array[0] > array[1] && array[0] > array[2]){
  //   choice = "javascript";
  // }
  // else if(array[1] > array[0] && array[1] > array[2]){
  //   choice = "ruby";
  // }
  // else if(array[2] > array[0] && array[2] > array[1]){
  //   choice = "python";
  // }

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