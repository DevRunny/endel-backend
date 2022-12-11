export interface IMessengerModel {
    icon: string
    messengerName: string
    value: string
};

export interface IMessenger extends IMessengerModel {};

export interface IEditMessengerValueResponse {
    value: string;
};

export interface IEditMessengerNameResponse {
    messengerName: string;
};

export interface IEditMessengerIconResponse {
    icon: string;
};

export interface IDeleteMessengerResponse {
    status: EDeleteMessengerStatus;
}

export enum EDeleteMessengerStatus {
    SUCCESS = "success",
    FAILED = "failed"
}