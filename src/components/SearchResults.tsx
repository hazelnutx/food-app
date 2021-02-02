import { RenderSearchResultsProps } from "./SearchInput";
import { Food } from "../state/Food";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { describeServing } from "../functions/describeServing";
import { Add as AddIcon } from "@material-ui/icons";

export type SearchResultsProps = Pick<
  RenderSearchResultsProps,
  "searching" | "items"
> & {
  searchingText: string;
  emptyText: string;
  onFoodSelected: (food: Food) => void;
};

/**
 * Renders the search results provided by SearchInput.tsx.
 * Takes loading and empty state into account and provides a view for each state.
 */
export const SearchResults = ({
  searching,
  items,
  onFoodSelected,
  searchingText,
  emptyText,
}: SearchResultsProps) => {
  if (searching) {
    return (
      <SearchResultsContainer>
        <FallbackText>{searchingText}</FallbackText>
      </SearchResultsContainer>
    );
  }
  if (!items) {
    // Search not yet started
    return null;
  }
  if (items.length === 0) {
    return (
      <SearchResultsContainer>
        <FallbackText>{emptyText}</FallbackText>
      </SearchResultsContainer>
    );
  }
  return (
    <SearchResultsContainer>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} onClick={() => onFoodSelected(item)} button>
            <ListItemText
              primary={item.name}
              secondary={describeServing(item)}
            />
            <Action>
              <AddIcon />
            </Action>
          </ListItem>
        ))}
      </List>
    </SearchResultsContainer>
  );
};

/**
 * Wrap search results in a Paper with some top margin
 * to provide space between results and input field.
 */
const SearchResultsContainer = styled(Paper)`
  margin-top: 8px;
  max-height: 50vh;
  overflow-y: auto;
`;

/**
 * Align fallback text with the search result list text
 */
const FallbackText = styled(Typography)`
  padding: 16px 18px;
`;

/**
 * Disable pointer events so action surface doesn't interrupt ListItem mouse effects
 */
const Action = styled(ListItemSecondaryAction)`
  pointer-events: none;
`;
