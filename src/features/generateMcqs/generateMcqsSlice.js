import { createSlice } from "@reduxjs/toolkit";
import {
  generateMcqsFromFile,
  generateMcqsFromText,
  generateMcqsFromWikiUrl,
} from "./generateMcqsSaga";

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
  // TODO: need to refractor duplicate code
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
        state.mcqs = action.payload.text;
      })
      .addCase(generateMcqsFromFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to generate MCQs from file.";
      });
    // Handle generate Mcqs From wiki url
    builder
      .addCase(generateMcqsFromWikiUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateMcqsFromWikiUrl.fulfilled, (state, action) => {
        state.loading = false;
        state.mcqs = action.payload.text;
      })
      .addCase(generateMcqsFromWikiUrl.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to generate MCQs from Wiki url.";
      });
  },
});

export const { clearMcqs } = generateMcqsSlice.actions;
export default generateMcqsSlice.reducer;
