'use strict'
const connectA = (className) => {
  let percOffset = 20;
  let joyBars = document.getElementsByClassName(`${className}`);
  for (let i = 0; i< joyBars.length; i++) {
    let myClass = joyBars[i].classList.item(2);
    myClass = myClass.slice(1, myClass.length);
    let hiddenInputClass = `${className}Num${myClass}`;
    let hiddenInput = document.querySelector(`.${hiddenInputClass}`);
    let myScore = parseFloat(hiddenInput.getAttribute('value'));
    let newWidth = myScore * 100 + percOffset;
    joyBars[i].style.width = `${newWidth}%`;
    let aContainer = document.querySelector(`.analysisContainer${myClass}`);
    let tContainer = document.querySelector(`.tweetContainer${myClass}`);
    tContainer.addEventListener('mouseover', (event) => {
      tContainer.addEventListener('mousemove', (event) => {
        mousePos = event.clientY;
        aContainer.style.top = `${mousePos}px`;
      })
      aContainer.style.visibility = "visible";
      aContainer.style.opacity = "1";
    })
    tContainer.addEventListener('mouseout', (event) => {
      let mousePos = event.clientY;
      tContainer.removeEventListener('mousemove', (event) => {
        mousePos = event.clientY;
        aContainer.style.top = `${mousePos}px`;
      })
      aContainer.style.visibility = "hidden";
      aContainer.style.opacity = "0";
    })
  }
  // let joyBar = document.querySelector(`.joyColor${idNum}`);
  // let angerBar = document.querySelector(`.angerColor${idNum}`);
  // let disgustBar = document.querySelector(`.disgustColor${idNum}`);
  // let fearBar = document.querySelector(`.fearColor${idNum}`);
  // let percOffset = 20;
  // joyPerc = joyPerc * 100 + percOffset;
  // angerPerc = angerPerc * 100 + percOffset;
  // disgustPerc = disgustPerc * 100 + percOffset;
  // fearPerc = fearPerc * 100 + percOffset;
  //
  // joyBar.style.width = `${joyPerc}%`;
  // angerBar.style.width = `${angerPerc}%`;
  // disgustBar.style.width = `${disgustPerc}%`;
  // fearBar.style.width = `${fearPerc}%`;
  //
  // if(sentType === 'negative') {
  //   document.querySelector(`.sentColor${idNum}`).style.color = 'red';
  //   sentScore = Math.floor( Math.abs( sentScore ) * 100 ) + '%';
  //   document.querySelector(`.sentimentScore${idNum}`).innerHTML = sentScore;
  // } else if(sentType === 'positive') {
  //   document.querySelector(`.sentColor${idNum}`).style.color = 'green';
  //   sentScore = Math.floor( Math.abs( sentScore ) * 100 ) + '%';
  //   document.querySelector(`.sentimentScore${idNum}`).innerHTML = sentScore;
  // } else if(sentType === 'neutral') {
  //   document.querySelector(`.sentColor${idNum}`).style.color = 'gray';
  // }
}
connectA('joyColor');
connectA('angerColor');
connectA('fearColor');
connectA('disgustColor');
