import { Injectable } from '@nestjs/common';
import { Parameter } from '../entities/parameter.entity';
import { ParameterRepository } from '../repositories/search-parameters.repository';

@Injectable()
export class SearchParameterService {
  constructor(private readonly parameterRepository: ParameterRepository) {}

  create(parameter: Parameter): Promise<Parameter> {
    return this.parameterRepository.create(parameter);
  }

  findAll(): Promise<Parameter[]> {
    return this.parameterRepository.findAll();
  }

  findOne(id: string): Promise<Parameter | null> {
    return this.parameterRepository.findOne(id);
  }

  update(id: string, changes: Partial<Parameter>): Promise<Parameter | null> {
    return this.parameterRepository.update(id, changes);
  }

  delete(id: string): Promise<void> {
    return this.parameterRepository.delete(id);
  }
}
