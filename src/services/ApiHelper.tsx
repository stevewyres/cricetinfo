export async function RequestFromApi<TResponse>(
    url: string
  ): Promise<TResponse> {
    const response = await fetch(url);
    return await response.json();
  }