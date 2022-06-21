console.log("**********10 - 1**********");
//array.reduce((previousValue, element, index, array) => {
// Body of callback function
// }, initialValue); initialValue - start value of previousValue

//TASK From array of Twiter's posts, personal users, nessesary count amount all likes.
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];
const likes = tweets.reduce((totalLikes, tweet) => totalLikes += tweet.likes, 0);
console.log(`Total likes of twits: ${likes}`);

console.log("**********10 - 1 var-2**********");
//The same but make function to use it for other places

const countLikes_V2 = function(tweets){
    return tweets.reduce((totalLikes, tweets) => totalLikes += tweets.likes, 0);
}
console.log("Total likes of twits_V2:", countLikes_V2(tweets));

const countLikes_V2_1 = tweets => {
    return tweets.reduce((totalLikes, tweets) => totalLikes += tweets.likes, 0);
}
console.log("Total likes of twits_V2_1:", countLikes_V2(tweets));

console.log("**********10 - 2**********");
//Get all Tags to array
const allTags = tweets.reduce((tagArray, tweet) => {
    tagArray.push(...tweet.tags);
    return tagArray;
},
    []);
console.log(`All tags from posts: ${allTags}`);

console.log("**********10 - 2 var-2**********");
const getTags = tweets =>
    tweets.reduce((tagArray, tweet) => {
        tagArray.push(...tweet.tags);
        return tagArray;
    }, []);
console.log("Total tags from posts V2:", getTags(tweets));

console.log("**********10 - 3 **********");
//Counc amount of unicue tags from tweets
const allTagsArray = getTags(tweets);

const getUnicTags = (acc, tag) =>{
    if(!acc.hasOwnProperty(tag)){
        acc[tag] = 0;
    }
    acc[tag] += 1;
    return acc;
}
 const countTags = tags => tags.reduce(getUnicTags, {});
 const tagCount = countTags(allTagsArray);
 console.log("Total amount of tags: ", tagCount);