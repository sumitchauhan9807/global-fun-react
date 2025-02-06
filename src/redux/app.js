import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	publicId: null,
};

const app = createSlice({
	name: "app",
	initialState,
	reducers: {
		setPublicId: (state, action) => {
			state.publicId = action.payload;
		},
	},
});

export const { setPublicId } = app.actions;

export default app.reducer;
