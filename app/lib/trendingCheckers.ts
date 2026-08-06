export function hasMV(title: string): boolean {
  return title.toLowerCase().includes("mv");
}
export function isRecent(publishedAt: string): boolean {
    const today = new Date();
    today.setDate(today.getDate() - 21);
    const cutoff = today;
    const published = new Date(publishedAt);
    if (published >= cutoff) {
        return true;
    } else {
        return false;
    }
}