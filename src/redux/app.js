import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	publicId: null,
	sidebar:false
};

const app = createSlice({
	name: "app",
	initialState,
	reducers: {
		setPublicId: (state, action) => {
			state.publicId = action.payload;
		},
		setSidebar: (state, action) => {
			state.sidebar = action.payload;
		},
	},
});

export const { setPublicId ,setSidebar } = app.actions;

export default app.reducer;
