import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { RouteModule } from './route/route.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [StudentModule, RouteModule, DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
