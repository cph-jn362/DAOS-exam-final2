import {
    Body,
    Get,
    Post,
    Param,
    Controller,
    Put,
    Delete
  } from '@nestjs/common';
  import { Ensemble } from './schema/ensemble.schema';
  import { EnsembleService } from './ensemble.service'; 
  import { NewEnsembleDTO } from './dto/new-ensemble.dto';
import { UpdateEnsembleDTO } from './dto/update-ensemble.dto';

  
  @Controller('ensemble')
  export class EnsembleController {
    constructor(private readonly ensembleService: EnsembleService) {}

    
    @Get()
    findAll(): Promise<Ensemble[]> {
      return this.ensembleService.findAll(); 
    }
    
    @Get(':id') 
    findOne(@Param('id') id): Promise<Ensemble>{
      return this.ensembleService.find(id);
    }

    @Get("/user/:id")
    findAdmin(@Param('id') id): Promise<Ensemble[]>{
      return this.ensembleService.findAdmin(id);
    }
    
    @Post()
    create(@Body() createEnsemble: NewEnsembleDTO): Promise<Ensemble>{
        return this.ensembleService.create(createEnsemble);
    }
    
    @Put(':id')
    update(@Param('id') id, @Body() updateEnsemble: UpdateEnsembleDTO): Promise<Ensemble>{
      return this.ensembleService.update(id, updateEnsemble);
    }

    @Delete(':id')
    DeleteOne(@Param('id') id): Promise<Ensemble>{
      return this.ensembleService.delete(id);
  }
  }
  