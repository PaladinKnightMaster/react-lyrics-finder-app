import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Button, Stack, Typography, Box } from '@mui/material';
import { lightTheme, darkTheme } from './styles/theme';
import SearchBar from './components/SearchBar';
import LyricsDisplay from './components/LyricsDisplay';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchParams, setSearchParams] = useState<{ title: string; artist: string } | null>(null);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSearch = (title: string, artist: string) => {
    setSearchParams({ title, artist });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          padding: '2rem',
          textAlign: 'center',
          animation: `${fadeIn} 0.5s ease-in-out`,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Lyrics Finder
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2} marginBottom={4}>
          <Button onClick={toggleDarkMode} variant="contained" color="secondary">
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </Button>
        </Stack>
        <SearchBar onSearch={handleSearch} />
        {searchParams && (
          <LyricsDisplay title={searchParams.title} artist={searchParams.artist} />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;
