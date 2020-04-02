import styled from "styled-components";

export const Post = styled.div`
  min-height: 90vh;
  margin: 0 auto;
  background-color: lightgrey;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-weight: 800;
  }
  a {
    color: black;
    font-weight: 700;
    margin-top: 1.5rem;
  }
`;

export const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
  }
  span {
    display: block;
    margin-top: 0.5rem;
    text-align: center;
  }
`;
