import { ReactNode, useCallback, useRef, useState } from "react";
import {
  CircularProgress,
  ClickAwayListener,
  debounce,
  Popper,
  TextField,
} from "@material-ui/core";
import { Food } from "../state/Food";
import styled from "styled-components";
import useSWR from "swr/esm";

export type SearchInputProps = {
  /**
   * The label of the TextField
   */
  label: string;
  /**
   * The search operation.
   */
  search: (query: string) => Promise<Food[]>;
  /**
   * How long the search debounce should to wait before searching (in milliseconds).
   */
  searchDebounceWait?: number;
  /**
   * Renders the results returned from the search operation
   */
  children: (props: RenderSearchResultsProps) => ReactNode;
};

export type RenderSearchResultsProps = {
  /**
   * Is true while the search operation is pending.
   */
  searching: boolean;
  /**
   * The Food items returned from the most recent search operation.
   * Is undefined when no search operation has returned results yet.
   */
  items?: Food[];
  /**
   * Callback for the renderer to signal to the SearchInput that
   * the Popper displaying the search results should be closed.
   */
  closePopper: () => void;
  /**
   * Callback for the renderer to signal to the SearchInput
   * that the query should be cleared.
   */
  clearInput: () => void;
};

/**
 * A TextField that automatically and debounced calls the specified search
 * operation using the TextField value as query and displays the results
 * using a Popper anchored below the TextField.
 */
export const SearchInput = ({
  label,
  search,
  searchDebounceWait = defaultSearchDebounceWait,
  children: renderSearchResults,
}: SearchInputProps) => {
  // State

  // The difference between displayedQuery and searchQuery is that
  // displayedQuery is always immediately representing what is in the search text field,
  // while searchQuery is debounced and will only have its value updated as the debounce timer expires.
  const [displayedQuery, setDisplayedQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { data: searchResults = [], isValidating: isSearching } = useSWR(
    searchQuery,
    search
  );
  const [isFocused, setFocused] = useState(false);
  const textFieldRef = useRef(null);

  // Semantics
  const hasQuery = !!searchQuery;
  const showResults = isFocused && hasQuery;
  const focus = () => setFocused(true);
  const blur = () => setFocused(false);
  const clearInput = () => setQuery("");

  // Operations
  const setQuery = (query: string) => {
    setDisplayedQuery(query);
    setSearchQueryDebounced(extractQuery(query));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setSearchQueryDebounced = useCallback(
    // We know that debounce returns a function with the same dependencies, which is why we disable the above rule
    debounce(setSearchQuery, searchDebounceWait),
    [searchDebounceWait]
  );

  return (
    <ClickAwayListener onClickAway={blur}>
      <div>
        <SearchTextField
          ref={textFieldRef}
          value={displayedQuery}
          onFocus={focus}
          label={label}
          variant="outlined"
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            endAdornment: isSearching ? (
              <CircularProgress color="inherit" size={20} />
            ) : null,
          }}
        />
        <Popper
          placement="bottom-start"
          open={showResults}
          anchorEl={textFieldRef.current}
        >
          {renderSearchResults({
            searching: isSearching,
            items: searchResults,
            closePopper: blur,
            clearInput,
          })}
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

const SearchTextField = styled(TextField)`
  width: 100%;
`;

/**
 * Long enough to avoid a good amount of unintentional searches, short enough to still be responsive.
 */
const defaultSearchDebounceWait = 333;

/**
 * Prepares the raw input string to be sent as a query.
 * Trims to make sure we treat ie. "" and " " the same.
 */
const extractQuery = (textFieldValue: string) => textFieldValue.trim();
