/**
 * Convert kebab text format to Title Case
 * @param text The string text
 * @returns
 */
export const kebabToTitleCase = (text: string): string => {
  const titleCase = text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return titleCase;
};
