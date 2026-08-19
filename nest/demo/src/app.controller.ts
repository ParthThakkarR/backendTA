import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hello')
  helloWorlD(): string{
    return this.appService.helloWorld();
  }
  @Get(':id') 
    getById(@Param ('id') id:string){
      return this.appService.getbyid(id);
    }
  @Post('insert')
    create():string{
      return `student entered successfully`
    }
  @Delete('delete/:id')
    delete(@Param('id') id:string ):string{
      return `student ${id} deleted successfully `
    }
  @Put('update/:id')
    update(@Param ('id') id:string):string{
      return `student ${id} updated successfully`
    }  
}
