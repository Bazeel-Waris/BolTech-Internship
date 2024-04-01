// import { Message } from "./Message";

export class User {
     id: number;
     name: string;
     image: string;
     lastMessage: LastMessage;
     allMessages: Message[] = [];
}

class Message {
     id: number;
     messageText: string;
     messageTime: string;
     date: string;
     writtenByMe: boolean;
}

class LastMessage {
     messageText: string;
     messageTime: string;
}