module.exports = function myTools(){
  const buildTweets = (tweetObj) => {
    const tweetList = [];
    tweetObj.forEach( (tEntries) => {
      //let removeHash = tEntries.text.replace(/#([\w]+)/g, "");
      tEntries.entities.symbols.forEach((obj) => {
        let symbolLocation = obj.indices;
      });
      const tweetFormat = {
        text: tEntries.text.replace(/#([\w]+)/g, ""),
        tweetId: tEntries.id,
        urls: tEntries.entities.urls,
        hashtags: tEntries.entities.hashtags,
        mentions: tEntries.entities.user_mentions,
        user: {
          screenName: tEntries.user.screen_name,
          twitterId: tEntries.user.id,
          location: tEntries.user.location,
          description: tEntries.user.description,
          profileImg: tEntries.user.profile_image_url,
        }

      }
      tweetList.push(tweetFormat)
    })
    return tweetList;
  }
  return { buildTweets };
}
