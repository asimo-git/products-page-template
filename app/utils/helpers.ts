import { NewProductFormData } from "./interfaces";

export function validateInputEpisodes(input: string): string | null {
  if (!input.trim()) return "At least one episode required";
  const episodeInput = input.trim();

  const validFormat = /^(\d+\s*,\s*)*\d+$/.test(episodeInput);
  if (!validFormat) {
    return "Episodes must be comma-separated positive integers (e.g. 1, 2, 3)";
  }

  const numbers = episodeInput.split(",").map((n) => parseInt(n.trim(), 10));
  if (numbers.some((n) => isNaN(n) || n <= 0)) {
    return "Episodes must be positive integers only";
  }

  return null;
}

export function validateForm(formData: NewProductFormData) {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) errors.name = "Name is required";
  if (!formData.origin.trim()) errors.origin = "Origin is required";
  if (!formData.location.trim()) errors.location = "Location is required";

  const episodeError = validateInputEpisodes(formData.episode);
  if (episodeError) errors.episode = episodeError;

  return errors;
}
