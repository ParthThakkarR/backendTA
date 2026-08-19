import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  helloWorld(){
    return "hello World"
  }
  getbyid(id:string){
    return `user with id :${id}`;
  }
}
