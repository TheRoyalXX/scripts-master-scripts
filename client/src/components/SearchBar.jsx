import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const SearchBar = () => {
  const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();
  const handleChange = ({ target }) => setSearch({ q: target.value });

  return (
    <Box>
      <FormControl>
        <OutlinedInput
          sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
          placeholder="Search"
          size="small"
          value={searchParams.get("q") ?? ""}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <ManageSearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
