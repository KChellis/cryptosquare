function onlyLetters(string){
  var letters = "";
  for (var i = 0; i < string.length; i++) {
    if(/[a-z]/.test(string[i])){
      letters += string[i];
    }
  }
  return letters;
}
function columns(string){
  var length = string.length;
  var column;
  for (var i = 0; i < length; i++) {
    if(length < i*i){
      column = i;
      i = length;
    }
  }
  return column;
}
function rows(string, number){
  var rows = 0;
  rows = Math.floor(string.length / number);
  if(string.length % number !== 0){
    rows += 1;
  }
  return rows;
}
function square(string, num1, num2) {
  var rows = [];
  for (var i = 0; i < num2; i++) {
    rows[i]= "";
  }
  var j=0
  for (var i = 0; i < string.length; i++) {
    rows[j] += string[i];
    if ((i+1)%num1 === 0) {
      j +=1;
    }
  }
  return rows;
}
function setCode(array, num1, num2, num3) {
  var codeArray= [];
  var elements = Math.floor(num3/5);
  if (num3%5 !== 0) {
    elements +=1;
  }

  for (var i = 0; i < elements; i++) {
    codeArray[i]= "";
  }
  var index = 0;
  for (var i = 0; i < num1; i++) {
    for (var j = 0; j < num2; j++) {
      var word = array[j];
      if (word[i]) {
        codeArray[index] += word[i];
        if (codeArray[index].length === 5) {
          index+=1;
        }
      }
    }
  }
  return codeArray;
}
function coded(string){
  var lowerCase = string.toLowerCase();
  var letters = onlyLetters(lowerCase);
  var length = letters.length;
  var column = columns(letters);
  var row = rows(letters, column);
  var rowArray = square(letters, column, row);
  var codedArray= setCode(rowArray, column, row, length);
  var result = codedArray.join(" ");
  return result;
}



$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var sentence = $("#sentence").val();
    var result = coded(sentence);
    $("#output").text(result);
    $(".output").show();
  });
});
