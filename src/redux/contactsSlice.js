import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer} from 'redux-persist';

const contactsInitialState = {
    list:[{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]    
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
        //     // return [...state, action.payload];
                state.list.push(action.payload)
            },
        deleteContact(state, action) {
            return state.list.filter(contact => contact.id !== action.payload);
        },
    },
});

const persistConfig = {
  key: 'contacts',
  storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)
console.log(contactsSlice.reducer)


export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;