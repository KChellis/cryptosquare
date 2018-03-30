function onlyLetters(string){
  var letters = "";
  for (var i = 0; i < string.length; i++) {
    if(/[a-z]/.test(string[i])){
      letters += string[i];
    }
  }
  return letters;
}
function columns(length){
  var column;
  for (var i = 0; i < length; i++) {
    if(length < i*i){
      column = i;
      i = length;
    }
  }
  return column;
}
function rows(length, column){
  var rows = 0;
  rows = Math.floor(length / column);
  if(length % column !== 0){
    rows += 1;
  }
  return rows;
}
function square(string, column, row) {
  var rows = [];
  for (var i = 0; i < row; i++) {
    rows[i]= "";
  }
  var index=0
  for (var i = 0; i < string.length; i++) {
    rows[index] += string[i];
    if ((i+1)%column === 0) {
      index +=1;
    }
  }
  return rows;
}
function setCode(array, column, row, length) {
  var codeArray= [];
  var elements = Math.floor(length/5);
  if (length%5 !== 0) {
    elements +=1;
  }

  for (var i = 0; i < elements; i++) {
    codeArray[i]= "";
  }
  var index = 0;
  for (var i = 0; i < column; i++) {
    for (var j = 0; j < row; j++) {
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

function unravelCode(string, length, column, row) {
  var rows = [];
  var leftover = (length%column);
  for (var i = 0; i < row; i++) {
    rows[i]= "";
  }
  console.log(rows);
  var index = 0
  for (var i = 0; i < column; i++) {
    for (var j = 0; j < row; j++) {
      if(j===(row-1) && i>=leftover){

      }else {
        rows[j] += string[index]
        index+=1
        console.log(rows);
      }
    }
  }
  return rows;
}
function encoded(string){
  var lowerCase = string.toLowerCase();
  var letters = onlyLetters(lowerCase);
  var length = letters.length;
  var column = columns(length);
  var row = rows(length, column);
  var rowArray = square(letters, column, row);
  var codedArray= setCode(rowArray, column, row, length);
  var result = codedArray.join(" ");
  return result;
}
function decoded(string) {
  var code = onlyLetters(string);
  var length = code.length;
  var column = columns(length);
  var row = rows(length, column);
  var array = unravelCode(code, length, column, row);
  var result = array.join("");
  return result;
}


$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var sentence = $("#sentence").val();
    var result = encoded(sentence);
    $("#output").text(result);
    $(".output").show();
  });
  $("#formTwo").submit(function(event){
    event.preventDefault();
    var sentence = $("#sentence2").val();
    var result = decoded(sentence);
    $("#output").text(result);
    $(".output").show();
  });
  $("#encode").click(function() {
    $(".encode").show();
    $(".decode").hide();
  });
  $("#decode").click(function() {
    $(".decode").show();
    $(".encode").hide();
  });
});
