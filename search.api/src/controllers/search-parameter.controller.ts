import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { SearchParameterService } from '../domain/services/search-parameter.service';
import { Parameter } from '../domain/entities/parameter.entity';

@ApiTags('parameters')
@Controller('parameters')
export class SearchParameterController {
  constructor(
    private readonly searchParameterService: SearchParameterService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of parameters',
    type: [Parameter],
  })
  async findAll(): Promise<Parameter[]> {
    return this.searchParameterService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string', description: 'Parameter ID' })
  @ApiResponse({ status: 200, description: 'The parameter', type: Parameter })
  async findOne(@Param('id') id: string): Promise<Parameter | null> {
    return this.searchParameterService.findOne(id);
  }

  @Post()
  @ApiBody({ type: Parameter })
  @ApiResponse({
    status: 201,
    description: 'The created parameter',
    type: Parameter,
  })
  async create(@Body() parameter: Parameter): Promise<Parameter> {
    return this.searchParameterService.create(parameter);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: 'string', description: 'Parameter ID' })
  @ApiBody({ type: Parameter })
  @ApiResponse({
    status: 200,
    description: 'The updated parameter',
    type: Parameter,
  })
  async update(
    @Param('id') id: string,
    @Body() changes: Partial<Parameter>,
  ): Promise<Parameter | null> {
    return this.searchParameterService.update(id, changes);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string', description: 'Parameter ID' })
  @ApiResponse({ status: 204, description: 'Parameter deleted successfully' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.searchParameterService.delete(id);
  }
}
