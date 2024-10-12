// src/features/generateMcqs/generateMcqsSlice.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the base URL for your API

// Async thunk for generating MCQs from text
export const generateMcqsFromText = createAsyncThunk(
  "generateMcqs/generateFromText",
  async ({ text, number }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DOMAIN_URL}/text`,
        { text, number }
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      // Handle errors and return a rejected value
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for generating MCQs from file
export const generateMcqsFromFile = createAsyncThunk(
  "generateMcqs/generateFromFile",
  async (file, { rejectWithValue }) => {
    try {
      // Create form data
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        `${process.env.REACT_APP_DOMAIN_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      // Handle errors and return a rejected value
      return rejectWithValue(error.response.data);
    }
  }
);
