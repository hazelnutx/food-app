import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "../state/Theme";
import {
  AccordionDetails,
  AccordionSummary,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import { SearchInput, SearchInputProps } from "./SearchInput";
import { NutrientTable } from "./NutrientTable";
import { EditPlan } from "./EditPlan";
import { Container } from "./Container";
import { SearchResults } from "./SearchResults";
import { useUniqueContainer } from "../hooks/useUniqueContainer";
import { isFoodEqual } from "../functions/isFoodEqual";
import { MyFoodList } from "./MyFoodList";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { AccordionForTable } from "./AccordionForTable";
import { summarizeNutrients } from "../functions/summarizeNutrients";
import { insertNetCarbs } from "../functions/insertNetCarbs";

export type AppProps = {
  theme: Theme;
  search: SearchInputProps["search"];
};

/**
 * The root of the react application.
 */
export const App = ({ theme, search }: AppProps) => {
  const [myFood, addFood, removeFood] = useUniqueContainer([], isFoodEqual);
  let nutrients = insertNetCarbs(summarizeNutrients(myFood));

  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <SearchInput label="Search food or brand" search={search}>
            {({ closePopper, clearInput, ...props }) => (
              <SearchResults
                {...props}
                searchingText="Searching..."
                emptyText="No results"
                onFoodSelected={(food) => {
                  addFood(food);
                  closePopper();
                  clearInput();
                }}
              />
            )}
          </SearchInput>

          <MyFoodList items={myFood} onRemove={removeFood} />
          {nutrients.length > 0 && (
            <AccordionForTable>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Nutrition Summary</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <NutrientTable items={nutrients} />
              </AccordionDetails>
            </AccordionForTable>
          )}
          <EditPlan />
        </Container>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};
