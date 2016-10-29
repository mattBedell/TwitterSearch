module.exports = function myTools(){
  const tweetList = [];
  const buildTweets = (tweetObj) => {
    tweetObj.forEach( (tEntries) => {
      const tweetFormat = {
        text: tEntries.text,
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
