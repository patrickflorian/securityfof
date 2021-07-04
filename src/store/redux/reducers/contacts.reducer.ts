import  actionTypes from '@store/redux/actions';
import { Alert } from 'react-native';


//const contact = localStorage.get("user") ? JSON.parse(localStorage.get("user")) : {};
 const initialState = {
    items : [
        {
            key: 'Devin', firstname: "Patrick",
            lastname: "Noumbissi",
            email: "noumbissipatrick@gmail.com",
            tel: "695349610",
            origin: "HIHIHIH",
        }
    ],
    selected :{
        key: 'Devin', firstname: "Patrick",
        lastname: "Noumbissi",
        email: "noumbissipatrick@gmail.com",
        tel: "695349610",
        origin: "HIHIHIH",
    },
    result :[]
};

const ContactReducer = (state = initialState, action :any) => {
    switch (action.type) {
        case actionTypes.LIST: {
            return {
                ...state,
                result: state.items.filter(user => (user.firstname.search(action.keyword)!=-1 ||user.lastname.search(action.keyword)!=-1||user.tel.search(action.keyword)!== -1 ))
              };
            }
        case actionTypes.ADD : {
            
            let newItems= [...state.items, action.payload];
            //localStorage.set("user", JSON.stringify({...state, items :newItems,}));
            return {...state, items: newItems};
        }
        case actionTypes.DELETE : {
            return {
                ...state,
                items: state.items.filter(user => user.key !== action.key)
              };
        }
        case actionTypes.UPDATE : {
            return {
                ...state,
                items: state.items.map(user =>
                  user.key === action.user.key
                    ? { ...action.user,}
                    : user
                )
              };
        }

        default: {
            return state;
        }
    }
};

export default ContactReducer;