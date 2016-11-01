'use strict'
//Function to create tweet analysis data display overlay on mouseover favorite tweets
const connectA = (className) => {
  let percOffset = 20;
  // Get emotion percentage bar elements
  let joyBars = document.getElementsByClassName(`${className}`);
  // Loop through all grabbed elements
  for (let i = 0; i< joyBars.length; i++) {
    // Get second classname as ID number
    let myClass = joyBars[i].classList.item(2);
    // Slice to get just the number
    myClass = myClass.slice(1, myClass.length);
    // Use number to find related elements
    let hiddenInputClass = `${className}Num${myClass}`;
    let hiddenInput = document.querySelector(`.${hiddenInputClass}`);
    // Get percentage to determine width of color bars
    let myScore = parseFloat(hiddenInput.getAttribute('value'));
    // Set width of color bars
    let newWidth = myScore * 100 + percOffset;
    joyBars[i].style.width = `${newWidth}%`;
    // Get container elements of analysis display
    let aContainer = document.querySelector(`.analysisContainer${myClass}`);
    let tContainer = document.querySelector(`.tweetContainer${myClass}`);
    // Set container to visible when related tweet is moused over
    tContainer.addEventListener('mouseover', (event) => {
      tContainer.addEventListener('mousemove', (event) => {
        // When mouse is moved set anylysis container to mouse position
        mousePos = event.clientY;
        aContainer.style.top = `${mousePos}px`;
      })
      // Set to visible and full opacity
      aContainer.style.visibility = "visible";
      aContainer.style.opacity = "1";
    })
    // When mouse is moved off favorite tweet
    tContainer.addEventListener('mouseout', (event) => {
      let mousePos = event.clientY;
      // Remove mousemove listener
      tContainer.removeEventListener('mousemove', (event) => {
        mousePos = event.clientY;
        aContainer.style.top = `${mousePos}px`;
      })
      // Set container not not visible
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
