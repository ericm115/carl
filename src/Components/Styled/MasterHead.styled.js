import styled from "styled-components";
import bgIMG from "../../IMG/bg-masthead.jpg";

export const StyledMasterHead = styled.div`
  position: relative;
  background: linear-gradient(
      to bottom,
      rgba(70, 70, 130, 0.3),
      rgba(70, 70, 130, 0.3)
    ),
    url(${bgIMG}) no-repeat center center;
  background-size: auto;
  background-size: cover;
  padding-top: 12rem;
  padding-bottom: 12rem;

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }
`;
