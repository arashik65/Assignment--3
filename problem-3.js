function finalScore (omr) {
      if(typeof omr !== "object"){
        return "Invalid";
      } 
      if(Array.isArray(omr) == true){
        return "Invalid";
      }
      if(!omr.hasOwnProperty("right") || !omr.hasOwnProperty("wrong") || !omr.hasOwnProperty("skip") ){
         return "Invalid";
      }
      const sum = omr.right + omr.wrong + omr.skip;
      if(sum == 100){
        const totalScore=  omr.right*1 + omr.wrong*-0.5 + omr.skip*0;
        return Math.round(totalScore);
      }
      return "Invalid";  
}

const output =finalScore({ right: 67, wrong: 23, skip: 10 });
const output1 =finalScore({ right: 80, wrong: 25, skip: 0 });
const output2 =finalScore({ right: 50, wrong: 10, skip: 40 });
const output3 =finalScore({ right: 30, wrong: 30, skip: 40 });
const output4 =finalScore("!@#");
const output5 =finalScore(["Raj"]);
console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);

/**output----
 * 56
Invalid
45
15
Invalid
Invalid
 */


