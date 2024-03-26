import { Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService {
    users: User[] = [
        new User('Ahmad Bin Waris', 'Male', 'Monthly', 'Active'),
        new User('Bazeel Bin Waris', 'Male', 'Yearly', 'Inactive'),
        new User('Yasir Khan', 'Male', 'Quaterly', 'Active')
    ];

    constructor(private logger: LoggerService) {
        
    }
    
    getAllUsers() {
        return this.users;
    }

    createUser(name: string, gender: string, subType: string, status: string) {
        let user = new User(name, gender, subType, status);
        this.users.push(user);
        // let logger = new LoggerService;
        this.logger.LogMessage(name, status);
    }
}