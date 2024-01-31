import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchParameterService } from './domain/services/search-parameter.service';
import { SearchParameterController } from './controllers/search-parameter.controller';
import { ParameterRepository } from './domain/repositories/search-parameters.repository';
import { Parameter, ParameterSchema } from './domain/entities/parameter.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: Parameter.name, schema: ParameterSchema },
    ]),
  ],
  controllers: [SearchParameterController],
  providers: [SearchParameterService, ParameterRepository],
})
export class AppModule {}
