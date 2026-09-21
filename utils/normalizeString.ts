/**
 * Normalizes a string by removing diacritics and converting to lowercase
 * @param label - The string to normalize
 * @returns The normalized string
 */
export const normalizeString = (label: string): string => {
  const normalize = label.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return normalize.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
};
