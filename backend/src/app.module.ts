import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import config from './config/keys';
import { EnsembleModule } from './ensembles/ensemble.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    EnsembleModule,
    AuthModule,
    MongooseModule.forRoot(config.mongoURI, {
      autoIndex: true,
    }),
  ],
})
export class AppModule {}
