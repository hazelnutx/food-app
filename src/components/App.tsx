import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "../state/Theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import { SearchInput, SearchInputProps } from "./SearchInput";
import { NutrientTable } from "./NutrientTable";
import { Container } from "./Container";
import { SearchResults } from "./SearchResults";
import { useUniqueContainer } from "../hooks/useUniqueContainer";
import { isFoodEqual } from "../functions/isFoodEqual";
import { MyFoodList } from "./MyFoodList";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { summarizeNutrients } from "../functions/summarizeNutrients";
import { insertNetCarbs } from "../functions/insertNetCarbs";
import { PoweredBy } from "./PoweredBy";

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
          <PoweredBy />

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
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Nutrition Summary</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <NutrientTable items={nutrients} />
              </AccordionDetails>
            </Accordion>
          )}
        </Container>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};
