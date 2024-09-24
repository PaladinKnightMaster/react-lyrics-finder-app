import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';
import useFetchLyrics from '../hooks/useFetchLyrics';

type LyricsDisplayProps = {
  title: string;
  artist: string;
};

const LyricsDisplay: React.FC<LyricsDisplayProps> = ({ title, artist }) => {
  const { data, loading, error } = useFetchLyrics(title, artist);

  if (loading) {
    return (
      <Box mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" mt={4}>
        Error fetching lyrics. Please try again.
      </Typography>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <Box mt={4}>
      <Typography variant="h6">Lyrics:</Typography>
      <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
        {data.lyrics}
      </Typography>
    </Box>
  );
};

export default LyricsDisplay;
