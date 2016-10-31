module.exports = function myTools(){
  const buildTweets = (tweetObj) => {
    const tweetList = [];
    tweetObj.forEach( (tEntries) => {
      let stripText = tEntries.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''); //REGEX SOURCE: "stackoverflow.com/questions/23571013/how-to-remove-url-from-a-string-completely-in-javascript
       stripText = stripText.replace(/#([^\\s]*)/g, '');//REGEX SOURCE: stackoverflow.com/questions/3514357/strip-hashtags-from-string-using-javascript
       stripText = stripText.replace(/@([^\\s]*)/g, '');
      const tweetFormat = {
        text: stripText,
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
