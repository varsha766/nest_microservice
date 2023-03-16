import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop({ require: true })
  userId: string;
  @Prop({ required: true })
  name: string;
  @IsEmail()
  @Prop({ required: true })
  email: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
AuthSchema.index({ email: 1 }, { unique: true });
AuthSchema.index({ userId: 1 }, { unique: true });
