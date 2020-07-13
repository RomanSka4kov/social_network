type FriendType = {
    id: number
    name: string
}

const initialState = {
    friends: [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Lilya'},
        {id: 3, name: 'Misha'}
    ] as Array<FriendType>
}

export type InitialStateType = typeof initialState;

const sitebarReducer = (state = initialState): InitialStateType => {
    return state;
}

export default sitebarReducer;