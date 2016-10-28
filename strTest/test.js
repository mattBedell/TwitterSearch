console.log("LOADED");
let mystr = 'RT @gntlman: TRUMP on Track to Win More Black Votes Than Any GOP Candidate Since 1960 https://t.co/LuXlBslIng'
let myotherstr = 'RT @JohnFromCranber: ....They\'re Preparing to Flee The Country if #Hillary Loses, Because an Honest Trump DOJ Will Put Them in Jail? #tcot…'
let myotherstr2 = 'POLL: Trump Voters Want The 1950s Back https://t.co/CHBDKVsVcg via @YouTube';


const cleanText = (str) => {
  let originalText = str;

  let extractedLinks = str.match(/(http*\S*)/g);
  let extractedHashtags = str.match(/(# *\S*)/g);
  let extractedMentions = str.match(/(@ *\S*)/g);

  let cleanedText = str.replace(/(http*\S*)/g, '');//Clean links
  cleanedText = cleanedText.replace(/(# *\S*)/g);//Clean hastags
  cleanedText = cleanedText.replace(/(@ *\S*)/g, '');//Clean mentions

  return { cleanedText, originalText, extractedHashtags, extractedLinks, extractedMentions };
}



let myclean = cleanText(myotherstr2);
console.log(myclean);
