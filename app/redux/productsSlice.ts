import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "../utils/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await response.json();

  return data.results;
});

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // hydrate: (state, action: PayloadAction<CartState>) => {
    //   return action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Ошибка загрузки";
    });
  },
});

// export const {  } = productsSlice.actions;

export default productsSlice.reducer;
