"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setFilter } from "../redux/productsSlice";

export default function DisplayFilter() {
  const dispatch = useDispatch<AppDispatch>();
  const { filter } = useSelector((state: RootState) => state.products);

  return (
    <div>
      <label htmlFor="filter" className="mr-2 font-medium">
        Show:
      </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value as "all" | "liked"))}
        className="border rounded px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        <option value="all">All</option>
        <option value="liked">Liked</option>
      </select>
    </div>
  );
}
