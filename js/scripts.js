//Back-end logic
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

    console.log(programInput + " is " + programPoints);
    console.log(learningInput + " is " + learningPoints);
    console.log(companyInput + " is " + companyPoints);
    console.log(flexibilityInput + " is " + flexibilityPoints);
    console.log(partnerInput + " is " + partnerPoints);


    event.preventDefault();
  })
  
});