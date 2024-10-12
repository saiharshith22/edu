import { createSlice } from "@reduxjs/toolkit";
import {
  generateMcqsFromFile,
  generateMcqsFromText,
} from "./generateMcqsServices";

const initialState = {
  mcqs: [],
  loading: false,
  error: null,
  text: "",
  uploadedFile: null,
};

const generateMcqsSlice = createSlice({
  name: "generateMcqs",
  initialState,
  reducers: {
    // Synchronous action to clear MCQs
    clearMcqs(state) {
      state.mcqs = [];
      state.error = null;
      state.loading = false;
      state.text = "";
      state.uploadedFile = null;
    },
  },
  extraReducers: (builder) => {
    // handle generate mcqs from text
    builder
      .addCase(generateMcqsFromText.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateMcqsFromText.fulfilled, (state, action) => {
        console.log("action", action);
        state.loading = false;
        state.mcqs = action.payload.text;
      })
      .addCase(generateMcqsFromText.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to generate MCQs from text.";
      });

    // Handle generate Mcqs From File
    builder
      .addCase(generateMcqsFromFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateMcqsFromFile.fulfilled, (state, action) => {
        state.loading = false;
        state.mcqs = action.payload.mcqs;
      })
      .addCase(generateMcqsFromFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to generate MCQs from file.";
      });
  },
});

export const { clearMcqs } = generateMcqsSlice.actions;
export default generateMcqsSlice.reducer;
