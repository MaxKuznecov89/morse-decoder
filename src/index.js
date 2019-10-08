const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   let arrStr = [];
    let start = 0 ;
    let end = 10;
    
  for (var i = 0; i <= expr.length; i = end ){
    arrStr.push(expr.slice(start,end));
    start = start + 10;
    end = end + 10
  }
  for (var j = 0; j < arrStr.length; j++){
    let word = "";
    let str = arrStr[j].split("");
    let flag = 0;
    for (var i = 0; i < str.length; i++){
      if(str[i] == "0" && flag == 0){
        continue;
      }
else{
    flag = 1;
    word = word + str[i];
   }
    }
    
    arrStr[j] = word;
  }

  let newArrStr = arrStr.map(function (item, i, arr){
  
    if (item == "**********"){
      return " "
    }

    let str = "";
    for (var nach = 0; nach < item.length; nach = nach+2){
      if (item.substr(nach,2) == "10"){
        str = str + ".";
      }else if(item.substr(nach,2) == "11"){
        str = str + "-";
      }
    }
    return str
  });
  
 for (var i = 0; i<newArrStr.length; i++ ){
   if(newArrStr[i] !== " "){
     newArrStr[i] = MORSE_TABLE[newArrStr[i]];
   }

 }
  let res = newArrStr.join("");
  return res ;
}


module.exports = {
    decode
}
