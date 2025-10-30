"use client";
import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addNewItem } from "../redux/productsSlice";
import { NewProductFormData } from "../utils/interfaces";
import { validateForm } from "../utils/helpers";
import { ThumbsUp } from "lucide-react";

export default function CreateProductPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<NewProductFormData>({
    name: "",
    image: "/default.jpeg",
    species: "Human",
    status: "Alive",
    gender: "Male",
    origin: "Earth (C-137)",
    location: "Citadel of Ricks",
    episode: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      dispatch(addNewItem(formData));
    }
  };

  return (
    <div className="w-full p-6 flex flex-col md:flex-row gap-8 bg-background rounded-xl shadow-md">
      <div className="flex-shrink-0">
        <Image
          src={formData.image || "/placeholder.png"}
          alt={formData.name || "Character preview"}
          width={300}
          height={300}
          className="w-72 h-auto rounded-xl object-cover"
        />
      </div>

      {submitted ? (
        <>
          <p className="text-green-600 font-semibold mt-2 flex  gap-2">
            <ThumbsUp />
            Character created successfully!
          </p>
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl flex flex-col gap-4 flex-grow"
        >
          <h1 className="text-3xl font-bold mb-2">Create New Character</h1>

          <label className="flex flex-col">
            <span className="font-semibold">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded px-3 py-2 "
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Species:</span>
            <select
              name="species"
              value={formData.species}
              onChange={handleChange}
              className="border rounded px-3 py-2"
            >
              <option>Human</option>
              <option>Alien</option>
              <option>Robot</option>
              <option>Unknown</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Status:</span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border rounded px-3 py-2"
            >
              <option>Alive</option>
              <option>Dead</option>
              <option>Unknown</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Gender:</span>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border rounded px-3 py-2"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Genderless</option>
              <option>Unknown</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Origin:</span>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              className="border rounded px-3 py-2"
            />
            {errors.origin && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Location:</span>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border rounded px-3 py-2"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">
              Episodes (comma-separated numbers):
            </span>
            <input
              type="text"
              name="episode"
              value={formData.episode}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              placeholder="1, 2, 3"
            />
            {errors.episode && (
              <p className="text-red-500 text-sm">{errors.episode}</p>
            )}
          </label>

          <button type="submit" className="mt-4">
            Create
          </button>
        </form>
      )}
    </div>
  );
}
