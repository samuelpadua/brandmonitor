import { Test, TestingModule } from '@nestjs/testing';
import { SearchParameterController } from './search-parameter.controller';
import { SearchParameterService } from '../domain/services/search-parameter.service';
import { Parameter } from '../domain/entities/parameter.entity';

describe('SearchParameterController', () => {
  let controller: SearchParameterController;
  let service: SearchParameterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchParameterController],
      providers: [SearchParameterService],
    }).compile();

    controller = module.get<SearchParameterController>(SearchParameterController);
    service = module.get<SearchParameterService>(SearchParameterService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of parameters', async () => {
      const result: Parameter[] = [/* create sample parameters here */];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a parameter by ID', async () => {
      const id = 'sample-id';
      const result: Parameter = /* create sample parameter here */;
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne(id)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new parameter', async () => {
      const parameter: Parameter = /* create sample parameter here */;
      const createdParameter: Parameter = /* create sample created parameter here */;
      jest.spyOn(service, 'create').mockResolvedValue(createdParameter);

      expect(await controller.create(parameter)).toBe(createdParameter);
    });
  });

  describe('update', () => {
    it('should update a parameter by ID', async () => {
      const id = 'sample-id';
      const changes: Partial<Parameter> = /* create sample changes here */;
      const updatedParameter: Parameter = /* create sample updated parameter here */;
      jest.spyOn(service, 'update').mockResolvedValue(updatedParameter);

      expect(await controller.update(id, changes)).toBe(updatedParameter);
    });
  });

  describe('delete', () => {
    it('should delete a parameter by ID', async () => {
      const id = 'sample-id';
      jest.spyOn(service, 'delete').mockResolvedValue();

      expect(await controller.delete(id)).toBeUndefined();
    });
  });
});