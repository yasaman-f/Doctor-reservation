import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('Application')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get the application welcome message' })
  @ApiOkResponse({
    description: 'Welcome message returned successfully.',
    schema: { example: 'welcome to my GA' },
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
