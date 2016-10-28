console.log("LOADED");
let mystr = 'RT @gntlman: TRUMP on Track to Win More Black Votes Than Any GOP Candidate Since 1960 https://t.co/LuXlBslIng'
let myotherstr = 'RT @JohnFromCranber: ....They\'re Preparing to Flee The Country if #Hillary Loses, Because an Honest Trump DOJ Will Put Them in Jail? #tcot…'
let myotherstr2 = 'POLL: Trump Voters Want The 1950s Back https://t.co/CHBDKVsVcg via @YouTube';


// const cleanText = (str) => {
//   let originalText = str;
//
//   let extractedLinks = str.match(/(http*\S*)/g);
//   let extractedHashtags = str.match(/(# *\S*)/g);
//   let extractedMentions = str.match(/(@ *\S*)/g);
//
//   let cleanedText = str.replace(/(http*\S*)/g, '');//Clean links
//   cleanedText = cleanedText.replace(/(# *\S*)/g);//Clean hastags
//   cleanedText = cleanedText.replace(/(@ *\S*)/g, '');//Clean mentions
//
//   return { cleanedText, originalText, extractedHashtags, extractedLinks, extractedMentions };
// }


//let myclean = cleanText(myotherstr2);
// const cleanTweet = ((tweetList) =>{
//   tweetList.forEach( (myTweets) => {
//     let tweetCleanerStr = myTweets.text;
//     const returnedTweets = {
//       cleanedText: [],
//       originalText: [],
//       urls: [],
//       hashtags: [],
//       mentions: [],
//       user: [],
//     }
    // if(myTweets.entities.urls.length > 0){// URLS
    //   myTweets.entities.urls.forEach( (myObj) => {
    //     let searchTerm = myTweets.text.substring(myObj.indices[0], myObj.indices[1]);
    //     for(let i =0; i < searchTerm.length; i++) {
    //       if(searchTerm[i] === '/') {
    //       }
    //     }
    //     tweetCleanerStr.replace(searchTerm, '');
    //     console.log(tweetCleanerStr);
    //   })
    // }
    // if(myTweets.entities.user_mentions.length > 0){// Mentions
    //   myTweets.entities.user_mentions.forEach( (myObj) => {
    //     tweetCleanerStr = `${myTweets.text.substring(0, myObj.indices[0])}${myTweets.text.substring(myObj.indices[1], myTweets.text.length)}`;
    //   })
    // }
    // if(myTweets.entities.hashtags.length > 0){// Hashtags
    //   myTweets.entities.hashtags.forEach( (myObj) => {
    //     tweetCleanerStr = `${myTweets.text.substring(0, myObj.indices[0])}${myTweets.text.substring(myObj.indices[1], myTweets.text.length)}`;
    //   })
    // }
    // if(myTweets.entities.symbols.length > 0){// Hashtags
    //   myTweets.entities.symbols.forEach( (myObj) => {
    //     tweetCleanerStr = `${myTweets.text.substring(0, myObj.indices[0])}${myTweets.text.substring(myObj.indices[1], myTweets.text.length)}`;
    //   })
    // }
    //console.log(tweetCleanerStr);





























//
