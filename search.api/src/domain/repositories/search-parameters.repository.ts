import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parameter } from '../entities/parameter.entity';

@Injectable()
export class ParameterRepository {
  constructor(
    @InjectModel(Parameter.name)
    private readonly parameterModel: Model<Parameter>,
  ) {}

  async create(parameter: Parameter): Promise<Parameter> {
    const createdParameter = new this.parameterModel(parameter);
    return createdParameter.save();
  }

  async findAll(): Promise<Parameter[]> {
    return this.parameterModel.find().exec();
  }

  async findOne(id: string): Promise<Parameter | null> {
    return this.parameterModel.findById(id).exec();
  }

  async update(
    id: string,
    changes: Partial<Parameter>,
  ): Promise<Parameter | null> {
    return this.parameterModel
      .findByIdAndUpdate(id, changes, { new: true })
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.parameterModel.findByIdAndDelete(id).exec();
  }
}
