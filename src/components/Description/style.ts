import styled from "styled-components";

const Container = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: var(--gray-color);

  width: 100%;
  max-width: 260px;
  height: 121px;

  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-top: 15px;
`;

export { Container };
