import { createSlice } from '@reduxjs/toolkit';
import type { UserState } from '../interfaces/User.interface';

const initialState: UserState = { jwt: null };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addJwt: (state) => {
            state.jwt = '42';
        },
        logout: (state) => {
            state.jwt = null;
        }
    }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

