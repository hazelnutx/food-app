import nutritionixImageUrl from "../assets/powered-by-nutritionix.png";
import styled from "styled-components";

/**
 * By using the Nutritionix API we agree to display
 * their promotional banner and link to their website.
 */
export const PoweredBy = () => (
  <DockedLink href="https://www.nutritionix.com">
    <ScaledImage alt="powered by nutritionix" src={nutritionixImageUrl} />
  </DockedLink>
);

const ScaledImage = styled.img`
  height: 7vh;
`;

const DockedLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
`;
