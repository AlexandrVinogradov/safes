import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User])
  ]
})
export class UsersModule {}
