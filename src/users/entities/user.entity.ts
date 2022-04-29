import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class User extends Document {
  @Prop()
  readonly username: string;

  @Prop()
  readonly account: string;

  @Prop()
  readonly password: string;

  @Prop()
  readonly email: string;

  @Prop()
  readonly mobileNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
