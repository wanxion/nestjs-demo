import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { Event, EventSchema } from 'src/events/entities/event.entity';
import { User, UserSchema } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name, // 模型名称
        schema: UserSchema, // 模型编译模式
      },
      // {
      //   name: Event.name,
      //   schema: EventSchema,
      // },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
