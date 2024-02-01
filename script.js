function firstNonRepeatedChar(str) {
 // Write your code here
	 const charMap = new Map();

    for(let char of str){
        if(charMap.has(char)){
            charMap.set(char, charMap.get(char)+1);
        }
        else{
            charMap.set(char, 1);
        }
    }

    for(let char of str){
        if(charMap.get(char) === 1){
            return char;
        }
    }

    return null;
   }

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
