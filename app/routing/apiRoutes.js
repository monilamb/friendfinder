

module.exports = (function() {
    'use strict';
    var apiExternalRoutes = require('express').Router();
    var friends = require("../data/friends.js");
    var path = require("path");

    apiExternalRoutes.get("/api/friends", function (req, res) {
        console.log("Showing the friends array.");
        res.json(friends);
    });

    apiExternalRoutes.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
       
        var sum = scoreSum(newFriend);

        console.log("This is the new Friend's sum: " +sum);
        var friendMatch;
        var diff1 = 100;
        for (var i = 0; i < friends.length; i++){
            var sumFriend = scoreSum(friends[i]);
            var diff2 = Math.abs(sum-sumFriend);
            if (diff1 > diff2){
                diff1 = diff2;
                friendMatch = friends[i];
            }
        }
        console.log(friendMatch);
        //  bloops
        friends.push(newFriend);
        //return ASK HOW IM GOING TO RETURN THE RESULT IF THERES A RETURN DOWN THERE :C
       res.json(friendMatch);
    });

    return apiExternalRoutes;
})();

function scoreSum(friend){
    var sum = 0;
    console.log("scores array size: "+friend.scores.length);
    for (var i = 0; i < friend.scores.length; i++){
        sum += parseInt(friend.scores[i]);
    }
    return sum;

}

//   Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
