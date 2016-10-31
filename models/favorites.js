const { MongoClient, ObjectID } = require('mongodb');

const DB_CONNECTION = process.env.MONGODB_URI || 'mongodb://localhost:27017/twittersearch';

function getFavorites(req, res, next) {
  // find all favorites for your userId
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('favorites')
      .find({ userId: { $eq: req.session.userId } })
      .toArray((toArrErr, data) => {
        if(toArrErr) return next(toArrErr);
        res.tweets = data;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

function saveFavorite(req, res, next) {
  // creating an empty object for the insertObj
  const insertObj = {
    userId: req.session.userId,
    tweet: req.body.tweet,
    analysis: {
      docEmotions: req.body.docEmotions,
      docSentiment: req.body.docSentiment,
      concepts: req.body.concepts,
    }
  };
  //insertObj.favorite.userId = req.session.userId;


  //Adding userId to insertObj

  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('favorites')
      .insert(insertObj, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

// Delete method doesn't change because we are deleting objects from the database
// based on that object's unique _id - you do not need to specify which user as
// the _id is sufficient enough
function deleteFavorites(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);
        res.removed = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

module.exports = { getFavorites, saveFavorite, deleteFavorites };
