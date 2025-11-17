/**
 * Formats a date string to French locale format (e.g., "12 janvier 2024")
 * @param dateString - ISO date string or parseable date string
 * @returns Formatted date string in French format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString; // Return original if invalid
  }

  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
