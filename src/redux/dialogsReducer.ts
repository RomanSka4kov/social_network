const SEND_MESSAGE = 'dialog/SEND_MESSAGE';

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'How is'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Yo'}
    ] as Array<MessageType>,
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Ira'},
        {id: 4, name: 'Petya'},
        {id: 5, name: 'Arsen'},
        {id: 6, name: 'Vartan'}
    ] as Array<DialogType>
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        }
        default: return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;