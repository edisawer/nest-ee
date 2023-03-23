import { Document } from 'mongoose';export interface IUsuarios extends Document{
    readonly name: string;
    readonly lastname: string; 
    readonly celNumber: number;  
    readonly gender: string;   
}