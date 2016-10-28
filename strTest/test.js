console.log("LOADED");
let mystr = 'RT @gntlman: TRUMP on Track to Win More Black Votes Than Any GOP Candidate Since 1960 https://t.co/LuXlBslIng'

let mysplit = mystr.split(/(http*\S*)/g);

///(http*\S*)/g
let myDiv = document.querySelector('.displayText');
const checkLink = (myArr) => {
  let confirmedLink;
  myArr.forEach( (myVal) => {
    if(myVal.indexOf('http', 0) === 0) {
      let confirmedLink = myVal;
      //console.log(confirmedLink);
    }
  })
  return confirmedLink;
}
let displaythis = checkLink(mysplit);
//myDiv.innerHTML = displaythis;
console.log(displaythis);
