const initState = {
    users: [
        { id: 1, name: 'TaiVu' },
        { id: 2, name: 'babyShark' }
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'ADD_USER':
            let id = Math.floor(Math.random() * 100001);
            let user = { id: id, name: `name random: ${id}` }
            console.log('user:', user)
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer;