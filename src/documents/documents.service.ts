import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DocumentModel } from './document.model';
import { CreateDocumentDto } from './dto/documents-create.dto';
import { DeleteDocumentsDto } from './dto/documents-delete.dto';
import { EditDocumentNameDto } from './dto/documents-edit.dto';
import { IDeleteDocumentsResponse, IDocument, IEditDocumentNameResponse } from './interface/documents.interface';

@Injectable()
export class DocumentsService {
    constructor(@InjectModel(DocumentModel) private documentsRepository: typeof DocumentModel) {}

    public async getAllDocuments(): Promise<IDocument[]> {
        const allDocumentsModel: DocumentModel[] = await this.documentsRepository.findAll();
        const response: IDocument[] = this.mapDocumentsModelToDocuments(allDocumentsModel);
        return response;
    }

    public async createDocument(dto: CreateDocumentDto): Promise<DocumentModel> {
        return await this.documentsRepository.create(dto);
    }

    public async setDocumentName(dto: EditDocumentNameDto): Promise<IEditDocumentNameResponse> {
        const documentModel = await this.getDocumentById(dto.id);
        documentModel.documentName = dto.documentName;
        await documentModel.save();

        const response: IEditDocumentNameResponse = {
            documentName: documentModel.documentName
        }
        return response;
    }

    public async deleteDocuments(dto: DeleteDocumentsDto): Promise<IDeleteDocumentsResponse[]> {
        const response: IDeleteDocumentsResponse[] = [];

        for(let i = 0; i < dto.ids.length; i++) {
            const documentModel: DocumentModel = await this.getDocumentById(dto.ids[i]);
            const documentName: string = documentModel.documentName;
            await documentModel.destroy();
            response.push({documentName});
        }

        return response;
    }

    private async getDocumentById(id: number): Promise<DocumentModel> {
        return await this.documentsRepository.findByPk(id);
    }

    private mapDocumentsModelToDocuments(documentsModel: DocumentModel[]): IDocument[] {
        return documentsModel.map((documentModel: DocumentModel) => this.mapDocumentModelToDocument(documentModel));
    }

    private mapDocumentModelToDocument(documentModel: DocumentModel): IDocument {
        const document: IDocument = {
            id: documentModel.id,
            documentName: documentModel.documentName,
            urlDocument: documentModel.urlDocument
        }
        return document;
    }
}
