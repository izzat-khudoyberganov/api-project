export async function getData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
}
