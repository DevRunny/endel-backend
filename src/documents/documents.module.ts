import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DocumentModel } from './document.model';

@Module({
  providers: [DocumentsService],
  controllers: [DocumentsController],
  imports: [
    SequelizeModule.forFeature([DocumentModel])
  ]
})
export class DocumentsModule {}
