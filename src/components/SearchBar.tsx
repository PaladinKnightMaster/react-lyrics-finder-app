import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

type SearchProps = {
  onSearch: (title: string, artist: string) => void;
};

const SearchBar: React.FC<SearchProps> = ({ onSearch }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = () => {
    if (title.trim() && artist.trim()) {
      onSearch(title.trim(), artist.trim());
    }
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <TextField
        label="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Artist Name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Search
      </Button>
    </Stack>
  );
};

export default SearchBar;
