# Twitter Search
https://ts-wdi.herokuapp.com/

#### Web Developement Immersive Project 2. 

An application utilizing the Twitter API and IBM Watson's AlchemyLanguage API to analyze the emotional content, concepts, and genral sentiment of user selected tweets.

###### Technologies used:
* Javascript
* HTML/CSS
* Node.js
* Express.js
* Mongo DB

### Design
MVC design pattern. Utilizes Twitter and Watson API services to analyze tweets based on emotional content, sentiment, and key concepts. Uses MongoDB to save user favorites. User has the ability to create an account, and save/delete favorites that persist in the mongo database.

User will login or create an account. User will be prompted to login, then will be redirected to the search page.  User will enter search terms, and will be given a list of tweets matching the search.

User will choose a tweet to analyze, the tweet will be displayed with information about emotional content, sentiment, and key concepts.

![Main Page](https://github.com/mattBedell/TwitterSearch/blob/master/public/Imgs/Site%20Screenshot.png?raw=true "Main Page")

User will have the ability to save the tweet and analysis into user's personal database, which will be displayed alongside the search and currently analyzed tweet.

#### User Story
As a Twitter user, I want to search tweets relevant to me, and see information about what those tweets contain.

![Main Page](https://github.com/mattBedell/TwitterSearch/blob/master/public/Imgs/Initial%20Design.png?raw=true "Main Page")

The main page makes use of iframes to reduce the number of redirects after user action.

![Flow](https://github.com/mattBedell/TwitterSearch/blob/master/public/Imgs/Flow2.png?raw=true "Site Flow")

### Issues
* Better error handling
     * Error from API calls causes pages to break, needs logic to determine which page / info to render in the event of API failure.
* Empty Space / Styling
     * Better utilization of space when no info is being displayed
     * Styling needs more consistency
     * Design not responsive, breaks on window resize
* Text Parsing
     * Needs improved parsing of Twitter text content to be passed to Watson API.  Some symbols and special characters break URL encoding, resulting in incorrect data or error returned from Watson API.
     
### Improvements
* Consistent styling and color schemes
* More analysis info displayed
* Search user database according to analysis data
* Better display of searched tweets, and links to user profiles, hashtags and embedded links
* Login with twitter credentials

### Sources
* Thanks to the WDI instructional staff for providing a User Authentication template for creating user accounts, encrypting passwords
* REGEX references: 
     * http://stackoverflow.com/questions/23571013/how-to-remove-url-from-a-string-completely-in-javascript
     * http://stackoverflow.com/questions/9153582/how-to-remove-from-twitter-hashtags
