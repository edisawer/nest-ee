import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Usuarios {
   @Prop()
   name: string;   
   @Prop()
   lastname: string;   
   @Prop()
   celNumber: number;   
   @Prop()
   gender: string;  
}export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);