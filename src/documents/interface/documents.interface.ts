export interface IDocumentModel {
    id: number;
    documentName: string;
    urlDocument: string;
};

export interface IDocument extends IDocumentModel {};

export interface IDeleteDocumentsResponse {
    documentName: string;
}

export interface IEditDocumentNameResponse {
    documentName: string;
}