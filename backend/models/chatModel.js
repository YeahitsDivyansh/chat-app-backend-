//all these r schemas to represent data on our database
const mongoose = require('mongoose');

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,//will contain the id of that particular user
            ref: "User",
        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin
