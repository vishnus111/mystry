import { Message } from "@/model/User";


export interface ApiResponse{
    success:boolean;
    message:string;
    isAcceptingMesssages?:boolean
    messages?:Array<Message>
}