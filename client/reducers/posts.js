
const INITIAL_STATE = [];


const posts = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // case 'GET_POSTS': {
        //     // console.log(action.payload)
            
        //     //  action.payload.forEach((post)=>{
        //     //   let postObject =  Object.assign({}, post)
        //     //   state.push(postObject);
        //     // }) 
        //    console.log('the state in Reducer:', state)
        //    return state;
          
        // } 
   
        case 'INCREMENT_LIKES': {
            // console.log(action.index);
            // console.log('the state in postsReducer:', state)

            let postId = action.index;

            return [
                ...state.slice(0,postId),
                {...state[postId], likes: state[postId].likes+1},
                ...state.slice(postId+1),
            ]            
        }

        default: {
            return state;
        }

    }
}

export default posts;