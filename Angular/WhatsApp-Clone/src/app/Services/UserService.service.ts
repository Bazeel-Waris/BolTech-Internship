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
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '2:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 3,
                         "messageText": ' Received Message 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '2:02 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    }
               ]
          },
          {
               "id": 2,
               "name": 'Bazeel Bin Waris',
               "image": '../../assets/dp1.jpeg',
               "lastMessage": {
                    "messageText": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, velit.',
                    "messageTime": '9:37 pm'
               },
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Received Message 1',
                         "messageTime": '2:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    }
               ]
          },
          {
               "id": 3,
               "name": "Charlie",
               "image": "../../assets/dp2.jpeg",
               "lastMessage": {
                    "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 3",
                    "messageTime": "7:00 am"
               },
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    }
               ]
          },
          {
               "id": 4,
               "name": "David",
               "image": "../../assets/dp3.jpeg",
               "lastMessage": {
                    "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 4",
                    "messageTime": "2:45 pm"
               },
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 3,
                         "messageText": ' Received Message 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:02 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 4,
                         "messageText": ' sent Message 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:45 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 5,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 3,
                         "messageText": ' Received Message 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:02 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 4,
                         "messageText": ' sent Message 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:45 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    }
               ]
          },
          {
               "id": 5,
               "name": "Eva",
               "image": "../../assets/dp4.jpeg",
               "lastMessage": {
                    "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 5",
                    "messageTime": "7:00 am"
               },
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 3,
                         "messageText": ' Received Message 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:02 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 4,
                         "messageText": ' sent Message 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:45 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    }
               ]
          },
          {
               "id": 6,
               "name": "Frank",
               "image": "../../assets/dp5.jpeg",
               "lastMessage": {
                    "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 6",
                    "messageTime": "1:30 pm"
               },
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 3,
                         "messageText": ' Received Message 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:02 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 4,
                         "messageText": ' sent Message 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:45 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    }
               ]
          },
          {
               "id": 7,
               "name": "Grace",
               "image": "../../assets/dp6.jpeg",
               "lastMessage": {
                    "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 7",
                    "messageTime": "11:20 pm"
               },
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 3,
                         "messageText": ' Received Message 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:02 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 4,
                         "messageText": ' sent Message 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:45 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    }
               ]
          },
          {
               "id": 8,
               "name": "Hannah",
               "image": "../../assets/user.png",
               "lastMessage": {
                    "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 8",
                    "messageTime": "4:10 pm"
               },
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 3,
                         "messageText": ' Received Message 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:02 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 4,
                         "messageText": ' sent Message 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:45 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    }
               ]
          },
          {
               "id": 9,
               "name": "Isaac",
               "image": "../../assets/dp1.jpeg",
               "lastMessage": {
                    "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 9",
                    "messageTime": "9:00 am"
               },
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 3,
                         "messageText": ' Received Message 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:02 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 4,
                         "messageText": ' sent Message 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:45 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    }
               ]
          },
          {
               "id": 10,
               "name": "Julia",
               "image": "../../assets/dp1.jpeg",
               "lastMessage": {
                    "messageText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 10",
                    "messageTime": "6:20 pm"
               },
               "allMessages": [
                    {
                         "id": 1,
                         "messageText": 'Received Message 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
                         "messageTime": '2:01 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 2,
                         "messageText": 'Sent Message 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:00 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    },
                    {
                         "id": 3,
                         "messageText": ' Received Message 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:02 pm',
                         "date": '26/03/2024',
                         "writtenByMe": false
                    },
                    {
                         "id": 4,
                         "messageText": ' sent Message 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                         "messageTime": '8:45 pm',
                         "date": '26/03/2024',
                         "writtenByMe": true
                    }
               ]
          }
     ];
}