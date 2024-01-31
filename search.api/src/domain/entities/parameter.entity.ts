import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ParameterDocument = HydratedDocument<Parameter>;

@Schema()
export class Parameter extends Document {
  @Prop({ type: String, required: true })
  location: string;

  @Prop({ type: String, required: true })
  frequency: string;

  @Prop({ type: [String], required: true })
  keyWords: string[];
}

export const ParameterSchema = SchemaFactory.createForClass(Parameter);
