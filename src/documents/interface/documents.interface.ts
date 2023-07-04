export interface IDocumentModel {
  id: number;
  documentName: string;
  urlDocument: string;
}

export type IDocument = IDocumentModel;

export interface IDeleteDocumentsResponse {
  documentName: string;
}

export interface IEditDocumentNameResponse {
  documentName: string;
}
