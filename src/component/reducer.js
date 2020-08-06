export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:'BQAw7FlcJbFxkVeoczLgOIJz4utni-SNFKm4kqURiV122sk2zDDn5DJ3kZwUtre3o2s9ZKCxd3yFXs_-Ff1oxneGv_GqpDq2RN1cdOM1sQSs9CiZM0o5VXPgNqjSqGQ7u0ckQVTvX1b4RRRz1dM4npIeAJ-2xBoHQaH9yGF1tt4x0f09'
}

const reducer = (state,action) =>{
    console.log(action)
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }
            case 'SET_DISCOVERY':
                return{
                    ...state,
                    discover_weekly:action.discover_weekly

                }
        default:
            return state;
    }
}

export default reducer;