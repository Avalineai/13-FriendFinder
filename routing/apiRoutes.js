var friendData = require("../app/data/friends.js");//this lives on the server

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    })

    app.post("/api/friends", function(req, res){
        //res.json(friendData);
        friendData.push(req.body)
            var userScore = req.body.scores
            var scoreDifference = []
        for (var i = 0; i < (friendData.length -1); i++) {
            var total = 0;
            var friendScore = friendData[i].scores

            for(var j = 0; j < friendScore.length; j++) {
                total += Math.abs(parseInt(friendScore[j]) - parseInt(userScore[j]))
                if (j === (friendScore.length - 1)){
                    scoreDifference.push(total)
                    

                
                }console.log(scoreDifference)
            }
        }
        //find lowest data, and create modal pop-up
        var closestMatchScore = (Math.min(...scoreDifference))
        console.log(friendData[scoreDifference.indexOf(closestMatchScore)])

        res.json(friendData[scoreDifference.indexOf(closestMatchScore)])




    })
}