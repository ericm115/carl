import styled from "styled-components";
import IMG1 from "../../IMG/bg-showcase-1.jpg";
import IMG2 from "../../IMG/bg-showcase-2.jpg";
import IMG3 from "../../IMG/bg-showcase-3.jpg";

export const StyledSectionTwo = styled.div`
  .showcase-img {
    min-height: 30rem;
    background-size: cover;
  }
  .IMG1 {
    background-image: url(${IMG1});
  }
  .IMG2 {
    background-image: url(${IMG2});
  }
  .IMG3 {
    background-image: url(${IMG3});
  }
  .showcase-text {
    padding: 7rem;
  }

  h2 {
    font-weight: 600;
  }
`;
