/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
 constructor(author, content, timeStamp, likes, comments) {
   this.author = author;
   this.content = content;
   this.timeStamp = timeStamp;
   this.numberOfLikes = likes;
   this.comments = comments;
 }
   increaseLikes() {
     this.numberOfLikes += 1;
   }
    addComment(comment) {
     this.comments.push(comment);
   }

};

var tweetPostOne = new Tweet("Perla", "video_at_the_club", "10 hrs ago", 1, ["yesssss🤩"]);
console.log(tweetPostOne);
tweetPostOne.increaseLikes();
console.log(tweetPostOne);
tweetPostOne.addComment("We had such a good time!!");
console.log(tweetPostOne);
var tweetPostTwo = new Tweet("Josh👺", "Retweet; Libras stay winning", "30 mins ago", 23, ["Og"]);
console.log(tweetPostTwo);
tweetPostTwo.increaseLikes();
tweetPostTwo.addComment("If that ain't the truth 💪🏽");
console.log(tweetPostTwo);
var tweetPostThree = new Tweet("MartinB", "picture_snowboarding", "5 mins ago", 27, ["keep up the good work man!"]);
console.log(tweetPostThree);
tweetPostThree.increaseLikes();
tweetPostThree.increaseLikes();
tweetPostThree.addComment("Man those mountains ain't no joke", "Till next time");
console.log(tweetPostThree);
var tweetPostFour = new Tweet("John 🏀", "picture_at_family_BBQ", "48 mins ago", 72, ["Damn I wish i would've made it", "Those ribs look delicious"]);
console.log(tweetPostFour);
tweetPostFour.increaseLikes();
tweetPostFour.increaseLikes();
tweetPostFour.increaseLikes();
tweetPostFour.increaseLikes();
tweetPostFour.addComment("Save some of those ribs for us");
console.log(tweetPostFour);
