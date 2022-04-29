import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  username: string;

  @Prop()
  account: string;

  @Prop()
  password: string;

  @Prop()
  mail: string;

  @Prop()
  phone: string;

  @Prop([String])
  teams: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
