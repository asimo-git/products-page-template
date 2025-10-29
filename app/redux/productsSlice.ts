import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "../utils/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await response.json();

  return data.results;
});

const initialState: ProductsState = {
  items: [],
  likedItems: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      const index = state.likedItems.indexOf(action.payload);

      if (index === -1) {
        state.likedItems.push(action.payload);
      } else {
        state.likedItems.splice(index, 1);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.likedItems = state.likedItems.filter((id) => id !== action.payload);
    },
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

export const { toggleLike, removeItem } = productsSlice.actions;

export default productsSlice.reducer;
