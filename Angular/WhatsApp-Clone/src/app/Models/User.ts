// import { Message } from "./Message";

export class User {
     id: number;
     name: string;
     image: string;
     lastMessage: LastMessage;
     // messages: Message = {
     //      sentMessages: [],
     //      receivedMessages: []
     // };
}

class Message {

}

class LastMessage {
     messageText: string;
     messageTime: string;
}