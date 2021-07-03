
const initialState = 'fr';


const translationReducer = (state=initialState,action: any) =>{

    switch(action.type){
        case 'setLanguage' :{console.log('reducer :'+action.value); return action.value};
        default : return state;

    }
}

export default translationReducer;