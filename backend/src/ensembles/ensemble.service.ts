import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ensemble, EnsembleDocument } from './schema/ensemble.schema';
import { NewEnsembleDTO } from './dto/new-ensemble.dto';
import { UpdateEnsembleDTO } from './dto/update-ensemble.dto';

@Injectable()
export class EnsembleService {
  constructor(
    @InjectModel(Ensemble.name)
    private readonly ensembleModel: Model<EnsembleDocument>,
  ) {}

  async findAll(): Promise<Ensemble[]> {
    return this.ensembleModel.find().populate('admin');
  }

  async find(id: string): Promise<Ensemble> {
    return this.ensembleModel.findById(id).populate('admin');
  }

  async findAdmin(id: string): Promise<Ensemble[]> {
    return await this.ensembleModel.find({ admin: id }).populate('admin');
  }

  async create(ensemble: NewEnsembleDTO): Promise<Ensemble> {
    const newEnsemble = new this.ensembleModel(ensemble);
    return await newEnsemble.save();
  }

  async update(id: string, ensemble: UpdateEnsembleDTO): Promise<Ensemble> {
    return this.ensembleModel.findByIdAndUpdate(id, ensemble).exec();
  }

  async delete(id: string): Promise<Ensemble> {
    return this.ensembleModel.findByIdAndDelete(id).exec();
  }
}
