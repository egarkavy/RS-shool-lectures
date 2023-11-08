import { User } from "../models/user.model";

export interface UserWithFriends extends User {
    friends: User[];
}