import styled from "styled-components";

const Container = styled.div`
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & > div:nth-child(1) {
    padding-bottom: 5px;

    & > figure {
      width: 50px;
      height: 50px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      border-radius: 50%;
      background-color: var(--black-color-two);
    }

    & > img {
      width: 50px;
      height: 50px;
    }
  }

  & > span {
    font-weight: 600;
    font-size: 13px;
    color: var(--gray-color-two);
  }

  & > p {
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
  }

  & > div:nth-child(4) {
    padding: 15px 0 20px 0;

    & > p {
      font-size: 13px;
      font-weight: 600;
      color: var(--gray-color-two);

      padding-left: 10px;
    }
  }

  & > a {
    width: 100%;
    max-width: 260px;
    height: 45px;

    border-radius: 4px;
    background-color: var(--black-color);
    border: 1.5px solid var(--purple-color);

    font-weight: 600;
    font-size: 14px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: var(--purple-color);

    &:hover {
      background-color: var(--purple-color);
      border-color: var(--purple-color);
      color: var(--black-color);
    }
  }
`;

export { Container };
