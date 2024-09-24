// src/hooks/useFetchLyrics.ts
import { useEffect, useState } from 'react';
import { createAlova } from 'alova';
import fetchRequestAdapter from '../adapters/fetchRequestAdapter';

const alovaInstance = createAlova({
  baseURL: 'https://api.lyrics.ovh/v1',
  timeout: 5000,
  requestAdapter: fetchRequestAdapter,
});

const useFetchLyrics = (title: string, artist: string) => {
  const [data, setData] = useState<{ lyrics: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Changed to string for error messages

  const fetchLyrics = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await alovaInstance.Get<{ lyrics: string }>(`/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`).send();
      if (response.lyrics) {
        setData({ lyrics: response.lyrics });
      } else {
        setError('Lyrics not found.');
      }
    } catch (err: any) {
      console.error('Error fetching lyrics:', err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (title && artist) {
      fetchLyrics();
    }
  }, [title, artist]);

  return { data, loading, error };
};

export default useFetchLyrics;
