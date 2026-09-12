export async function fetchSanity<T = unknown>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch("/api/sanity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, params }),
  });

  if (!response.ok) {
    throw new Error(`Sanity request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
