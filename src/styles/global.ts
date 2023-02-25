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
    --purple-color: #8257E5;
    --purple-hover: #4A2E8A;
		--gray-color: #CCC;
		--gray-color-two: #818181;
		--shadow: rgba(0, 0, 0, 0.5);
	}

  body {
    background-color: var(--black-color);
    color: var(--white-color);
	}

  button, a {
		transition: .5s;
		cursor: pointer;
	}

  a {
		text-decoration: none;
	}

	.App {
		padding: 250px 100px 0 100px;

		width: 100%;
		max-width: 1600px;

		margin: 0 auto;
	}
`;
