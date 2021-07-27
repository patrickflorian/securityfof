import {getStringData, storeObjectData, storeStringData} from '../store/asyncStorage'

export const firstUse =()=>{
    return getStringData('first_use')===null?true: false
}

export const setFirstUse =()=>{
    storeStringData('first_use','not_first_use')
}