let joyBar = document.querySelector('.joyColor');
let angerBar = document.querySelector('.angerColor');
let disgustBar = document.querySelector('.disgustColor');
let fearBar = document.querySelector('.fearColor');
let percOffset = 20;
joyPerc = joyPerc * 100 + percOffset;
angerPerc = angerPerc * 100 + percOffset;
disgustPerc = disgustPerc * 100 + percOffset;
fearPerc = fearPerc * 100 + percOffset;

joyBar.style.width = `${joyPerc}%`;
angerBar.style.width = `${angerPerc}%`;
disgustBar.style.width = `${disgustPerc}%`;
fearBar.style.width = `${fearPerc}%`;

if(sentType === 'negative') {
  document.querySelector('.sentColor').style.color = 'red';
  sentScore = Math.floor( Math.abs( sentScore ) * 100 ) + '%';
  document.querySelector('.sentimentScore').innerHTML = sentScore;
} else if(sentType === 'positive') {
  document.querySelector('.sentColor').style.color = 'green';
  sentScore = Math.floor( Math.abs( sentScore ) * 100 ) + '%';
  document.querySelector('.sentimentScore').innerHTML = sentScore;
} else if(sentType === 'neutral') {
  document.querySelector('.sentColor').style.color = 'gray';
}
