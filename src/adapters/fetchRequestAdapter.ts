import { AlovaRequestAdapter, RequestElements } from 'alova';

const fetchRequestAdapter: AlovaRequestAdapter<unknown, unknown, unknown> = (requestElements: RequestElements) => {
  const { url, data, headers } = requestElements;

  const controller = new AbortController();

  const fetchPromise = fetch(url, {
    method: data ? 'POST' : 'GET', // Use POST if data is present, else GET
    body: data ? JSON.stringify(data) : undefined, // Send data as JSON if present
    headers: new Headers(headers), // Set headers
    signal: controller.signal, // Handle request abortion
  });

  // Parse the JSON response
  const responsePromise = fetchPromise.then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });

  // Extract headers as an object
  const headersPromise = fetchPromise.then(response => {
    return Object.fromEntries(response.headers.entries());
  });

  return {
    response: () => responsePromise, // Method to get the response data
    headers: () => headersPromise,   // Method to get the response headers
    abort: () => controller.abort(), // Method to abort the request

    // Optional handlers (left empty as not used)
    onDownload: () => {},
    onUpload: () => {},
  };
};

export default fetchRequestAdapter;
