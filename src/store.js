// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import generateMcqsReducer from "./features/generateMcqs/generateMcqsSlice";
import { createLogger } from "redux-logger";

// Initialize Redux Logger (optional)
const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: true,
});

// Determine if we're in development mode
const isDevelopment = process.env.NODE_ENV === "development";

// Configure the store
const store = configureStore({
  reducer: {
    generateMcqs: generateMcqsReducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) => {
    // Conditionally add logger middleware only in development
    return isDevelopment
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware();
  },
  devTools: isDevelopment, // Enable Redux DevTools only in development
});

export default store;
