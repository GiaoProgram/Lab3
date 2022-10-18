function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return 'username':action.username;
      case "LOGOUT":
        return 'username':undefined;
        return "";
      default:
        return state;
    }
}

function todoReducer(state, action) {
    switch(action.type) {
        case 'CREATE_TODO':
        const newTodo = {
            title: action.title,
            content: action.content,
            createDate: action.createDate,
            completeDate: action.completeDate,
            FinishToggle: action.FinishToggle,
            index:action.index
        };
        return [newTodo, ...state];
        
        case 'TOGGLE_TODO':
            state[action.index]={
                title: action.title,
                content: action.content,
                createDate: action.createDate,
                completeDate:action.completeDate,
                FinishToggle: action.FinishToggle,
                index:action.index
            };
            return state;
        default:
        return state;
    }
}


export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: postReducer(state.todo, action),
        users: usersReducer(state.users, action)
    }
}