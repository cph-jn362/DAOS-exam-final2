import {
  Body,
  Get,
  Post,
  Param,
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { NewUserDTO } from './dto/new-user.dto';
import { InstrumentDTO } from './dto/instrument.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  login(@Request() req){
    return this.authService.login(req.user);
  }  
  
  @Post('auth/signup')
  async create(@Body() newUser: NewUserDTO): Promise<any> {
    const user = await this.userService.create(newUser);
    return this.authService.login(user)
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): Promise<User> {
    return this.userService.find(id).then((result) => {
      if (result) {
        return result;
      } else {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
    }).catch(() => {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    });
  }


  @Delete(':id/settings')
  delete(@Param('id') id): Promise<User> {
    return this.userService.deleteOne(id).then((result) => {
      if (result) {
        return result;
      } else {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
    }).catch(() => {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    });
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateUser: UpdateUserDTO): Promise <User>{
    return this.userService.update(id, updateUser);
  }


  @Post(':id/instrument')
  addInstrument(@Param('id') id, @Body() addInstrument: InstrumentDTO): Promise<User>{
    return this.userService.addInstrument(id, addInstrument);
  }

}
