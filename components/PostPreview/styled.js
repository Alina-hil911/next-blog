import styled from "styled-components";

export const PostPreview = styled.div`
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;

  &:last-child {
    margin-bottom: 1.5rem;
  }
`;
