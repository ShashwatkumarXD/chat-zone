import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  // console.log("message sent",req.params.id);
  try {
    const { message } = req.body;//getting message from user as input.
    const { id: receiverId } = req.params;//get the user id/receiver id from req.params and then it get renamed as "receiverId".
    const senderId = req.user._id;//getting sender id from "req.user._id"

    //check for the conversation between two user 1.senderId & 2.receiverId
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    //So if the conversation does not exist then we create one this the participants
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    //then we create new message
    const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

    //and then put this message into the "messages array" in this conversation
    if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

//SOCKET IO 

    // await conversation.save(); we didnt use it because if we run first statement and if it take 10sec the second statement have to wait for that 10sec before execution.
		// await newMessage.save();

    // this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

    //and then sended it as response
    res.status(201).json(newMessage);


  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
} 

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};