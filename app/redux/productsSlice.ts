import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  NewProductFormData,
  Product,
  ProductsState,
} from "../utils/interfaces";
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
  filter: "all",
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
    setFilter(state, action: PayloadAction<"all" | "liked">) {
      state.filter = action.payload;
    },
    addNewItem(state, action: PayloadAction<NewProductFormData>) {
      const newItem = {
        name: action.payload.name,
        status: action.payload.status,
        species: action.payload.species,
        gender: action.payload.gender,
        origin: { name: action.payload.origin },
        location: { name: action.payload.location },
        image: action.payload.image,
        episode: action.payload.episode
          .split(",")
          .map((n) => n.trim())
          .filter(Boolean)
          .map((n) => `https://rickandmortyapi.com/api/episode/${n}`),
        id: state.items.length + 1,
      };
      state.items.push(newItem);
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
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

export const { toggleLike, removeItem, setFilter, addNewItem, setProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
