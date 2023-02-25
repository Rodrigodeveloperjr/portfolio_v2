import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Barlow', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
    --white-color: #FAFAFA;
    --black-color: #09090A;
    --black-color-two: #111111;
    --purple-color: #8257e5;
    --purple-hover: #9466ff;
	}

  body {
    background-color: var(--black-color);
    color: var(--white-color);
	}

  button, a {
		cursor: pointer;
	}

  a {
		text-decoration: none;
	}
`;
