import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnsembleSchema } from './schema/ensemble.schema';
import { EnsembleController } from './ensemble.controller';
import { EnsembleService } from './ensemble.service'; 

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Ensemble', schema: EnsembleSchema}])],
    controllers: [EnsembleController],
    providers: [EnsembleService]
})
export class EnsembleModule {}