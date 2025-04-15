import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = moduleRef.get<AppService>(AppService);
    appController = moduleRef.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  it('should return value from AppService using query param', () => {
    const queryParam = 'meu-teste';
    const result = 'meu-teste';

    jest.spyOn(appService, 'getHello').mockReturnValue(result);

    expect(appController.getHello(queryParam)).toBe(result);
    expect(appService.getHello).toHaveBeenCalledWith(queryParam);
  });
});
