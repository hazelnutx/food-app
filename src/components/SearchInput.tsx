import { ReactNode, useCallback, useRef, useState } from "react";
import {
  CircularProgress,
  ClickAwayListener,
  debounce,
  Popper,
  TextField,
} from "@material-ui/core";
import { Food } from "../state/Food";
import { useMountState } from "../hooks/useMountState";
import styled from "styled-components";

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
  const [query, setQuery] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<Food[]>();
  const [isSearching, setSearching] = useState(false);
  const textFieldRef = useRef(null);
  const mountState = useMountState();

  // Semantics
  const hasQuery = !!query;
  const showResults = isFocused && hasQuery;
  const focus = () => setFocused(true);
  const blur = () => setFocused(false);
  const clearInput = () => setQuery("");

  // Operations

  // Debounce to not search while typing fast
  const performSearchMemoized = useCallback(
    async (newQuery: string) => {
      let items: Food[] = [];

      // Ignore empty text fields
      if (newQuery) {
        setSearching(true);
        try {
          items = await search(newQuery);
        } catch (e) {
          // noop, assume happy case,
          // error will reset results to []
        }
      }

      // Don't set state on unmounted components
      if (mountState.isMounted) {
        setSearching(false);
        setSearchResults(items);
      }
    },
    [search, mountState]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const performSearchDebounced = useCallback(
    // We know that debounce returns a function with the same dependencies, which is why we disable the above rule
    debounce(performSearchMemoized, searchDebounceWait),
    [performSearchMemoized, searchDebounceWait]
  );

  // Try to search every time we set the query
  const setQueryAndSearch = (newQuery: string) => {
    setQuery(newQuery);
    performSearchDebounced(newQuery);
  };

  return (
    <ClickAwayListener onClickAway={blur}>
      <div>
        <SearchTextField
          ref={textFieldRef}
          value={query}
          onFocus={focus}
          label={label}
          variant="outlined"
          onChange={(e) => setQueryAndSearch(extractQuery(e.target.value))}
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
