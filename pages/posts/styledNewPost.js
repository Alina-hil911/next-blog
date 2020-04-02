import styled from "styled-components";

export const NewPost = styled.div`
  width: 80%;
  padding: 1rem 2rem;
  background: lightgrey;

  box-sixing: border-box;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    text-align: center;
    font-weight: 700;
  }
  div {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    padding: 1rem 4rem;
    justify-content: space-between;
  }
  input {
    padding: 1rem 2rem 0.5rem;
    border: none;

    background: white;
    opacity: 0.7;
    transition: 0.3s ease;
    &:focus {
      outline: none;
      opacity: 1;
    }
  }
  textarea {
    border: none;
    background: white;
    opacity: 0.7;
    transition: 0.3s ease;

    &:focus {
      outline: none;
      opacity: 1;
    }
  }
  button {
    padding: 1rem 2rem;
    cursor: pointer;
    font-weight: 800;
    border: none;
    opacity: 0.8;
    transition: 0.3s ease;

    &:focus,
    &:hover {
      border: none;
      outline: none;
      opacity: 1;
    }
  }
`;
