const Friendship = require("../Models/Friendship");

exports.sendFriendReq = async(req, res) => {
    try{
        const userId = req.userId;
        const friendId = req.body.friendId;
        if (!userId || !friendId) {
            return res.status(400)
            .json(
                {
                    success: false, 
                    message: "userId and friendId are required" 
                }
            );
        }

        // Checking if the friend request already exists or they are already friends
        const existingRequest = await Friendship.findOne({
            $or: [
                { user1: userId, user2: friendId },
                { user1: friendId, user2: userId }
            ]
        });
        if (existingRequest) {
            return res.status(400)
            .json({
                success: false, 
                message: "Friendship request already exist.", 
            });
        }

        // Creating new friend request
        const newRequest = await Friendship.create({user1: userId, user2: friendId});
        if(newRequest){
            return res.status(200)
            .json({
                success: true,
                message: "Friend request sent successfully.",
            });
        }
        else{
            return res.status(400)
            .json({
                success: false,
                message: "Unable to send friend request.Try again after sometime.",
            })
        }
    } catch(error) {
        console.error(error);
        return res.status(500)
        .json({
            success: false,
            message: "Internal Server Error while sending friend request.",
        })
    }
}