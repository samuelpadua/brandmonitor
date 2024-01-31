import { Test, TestingModule } from '@nestjs/testing';
import { SearchParameterService } from './search-parameter.service';

describe('SearchParameterService', () => {
  let service: SearchParameterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchParameterService],
    }).compile();

    service = module.get<SearchParameterService>(SearchParameterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
