import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateUsuariosDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;    
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly lastname: string;   
    
    @IsNumber()
    @IsNotEmpty()
    readonly celNumber: number;    
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender: string;    
    
}