import React, { useEffect, useState } from "react";

import {
  TextField,
  Box,
  Icon,
  faSearch,
  Typography,
  IconButton,
} from "@/common/components/components";

type Properties = {
  handleSearchTermChange: (value: string) => void;
};

const SearchBar: React.FC<Properties> = ({ handleSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearchTermChange(searchTerm);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <>
      <TextField
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        slotProps={{
          input: {
            startAdornment: (
              <Box sx={{ mr: 2 }}>
                <Icon icon={faSearch} />
              </Box>
            ),
          },
        }}
        placeholder="Search for users"
        fullWidth
      />
      {searchTerm && (
        <Box display="flex" alignItems="center">
          <Typography variant="caption" sx={{ p: 1 }}>
            '{searchTerm}'
          </Typography>
          <IconButton
            size="small"
            onClick={() => {
              setSearchTerm("");
            }}
          >
            x
          </IconButton>
        </Box>
      )}
    </>
  );
};

export { SearchBar };
