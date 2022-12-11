import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { DocumentModel } from './document.model';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/documents-create.dto';
import { DeleteDocumentsDto } from './dto/documents-delete.dto';
import { EditDocumentNameDto } from './dto/documents-edit.dto';
import { IDeleteDocumentsResponse, IDocument, IEditDocumentNameResponse } from './interface/documents.interface';

@Controller('documents')
export class DocumentsController {
    constructor(private documentsService: DocumentsService) {}

    @Get('getAllDocuments')
    getAllDocuments(): Promise<IDocument[]> {
        return this.documentsService.getAllDocuments();
    }

    @Post('createDocument')
    createDocument(@Body() dto: CreateDocumentDto): Promise<DocumentModel> {
        return this.documentsService.createDocument(dto);
    }

    @Post('editDocumentName')
    editDocumentName(@Body() dto: EditDocumentNameDto): Promise<IEditDocumentNameResponse> {
        return this.documentsService.setDocumentName(dto);
    }

    @Delete('deleteDocuments')
    deleteDocuments(@Body() dto: DeleteDocumentsDto): Promise<IDeleteDocumentsResponse[]> {
        return this.documentsService.deleteDocuments(dto);
    }
}
