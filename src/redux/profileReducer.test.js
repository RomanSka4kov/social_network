import profileReducer, { addPost, deletePost } from './profileReducer';

let state = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: '11'},
        {id: 2, message: 'My too', likesCount: '12'},
        {id: 3, message: 'My too', likesCount: '12'},
        {id: 4, message: 'My too', likesCount: '12'}
    ],
};

it('length of posts should be incremented', () => {

    // 1. test data
    let action = addPost('test post');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('text of post shoul be correct', () => {

    // 1. test data
    let action = addPost('test post');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe('test post');
});

it('length of posts should be decrement after deleting', () => {

    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`length of posts shouldn't be change if postId incorrect`, () => {

    // 1. test data
    let action = deletePost(9999);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});