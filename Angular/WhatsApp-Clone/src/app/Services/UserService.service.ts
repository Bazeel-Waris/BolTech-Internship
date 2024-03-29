import { Injectable } from "@angular/core";
import { User } from "../Models/User";

@Injectable({
     providedIn: 'root',
})
export class UserService {
     users: User[] = [
          {
               "id": 1,
               "name": 'Ahmad Bin Waris',
               "image": '../../assets/dp.png',
               "lastMessage": { 
                    "messageText": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 3', 
                    "messageTime": '3:00 am'
               },
          },
          {
               "id": 2,
               "name": 'Bazeel Bin Waris',
               "image": '../../assets/dp1.jpeg',
               "lastMessage": { 
                    "messageText": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, velit.', 
                    "messageTime": '9:37 pm'
               }
          },
          {
               "id": 3,
               "name": "Charlie",
               "image": "../../assets/dp2.jpeg",
               "lastMessage": {
                   "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 3",
                   "messageTime": "7:00 am"
               }
           },
           {
               "id": 4,
               "name": "David",
               "image": "../../assets/dp3.jpeg",
               "lastMessage": {
                   "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 4",
                   "messageTime": "2:45 pm"
               }
           },
           {
               "id": 5,
               "name": "Eva",
               "image": "../../assets/dp4.jpeg",
               "lastMessage": {
                   "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 5",
                   "messageTime": "7:00 am"
               }
           },
           {
               "id": 6,
               "name": "Frank",
               "image": "../../assets/dp5.jpeg",
               "lastMessage": {
                   "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 6",
                   "messageTime": "1:30 pm"
               }
           },
           {
               "id": 7,
               "name": "Grace",
               "image": "../../assets/dp6.jpeg",
               "lastMessage": {
                   "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 7",
                   "messageTime": "11:20 pm"
               }
           },
           {
               "id": 8,
               "name": "Hannah",
               "image": "../../assets/user.png",
               "lastMessage": {
                   "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 8",
                   "messageTime": "4:10 pm"
               }
           },
           {
               "id": 9,
               "name": "Isaac",
               "image": "../../assets/dp1.jpeg",
               "lastMessage": {
                   "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 9",
                   "messageTime": "9:00 am"
               }
           },
           {
               "id": 10,
               "name": "Julia",
               "image": "../../assets/dp1.jpeg",
               "lastMessage": {
                   "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 10",
                   "messageTime": "6:20 pm"
               }
           }
     ];
}