import { createGlobalStyle } from 'styled-components';

import { colors } from '.';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&family=Roboto:wght@400;500;700&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
  outline:0;
}

@media(max-width: 1080px){
  html{
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html{
    font-size: 87.5%;
  }
}


body{
 background: ${colors.colorBackground};
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
font-family: 'Inter', sans-serif;
font-size: 1rem;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
  font-family: 'Inter', sans-serif;
}

button {
  cursor: pointer;
}


select {
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  // Additional resets for further consistency
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
}

#root{
  margin: 0 auto;
  border: 0;

  --width-container: 1040px;
  --width-menu: 974px;

  --space: 2rem;

  --space-sm-top: 2.6rem;
  --space-sm: 1rem;
  --space-lg: 3rem;
  --space-lgm: 1.7rem;
  --space-lgs: 4rem;
  --space-lm: 9rem;

  --header-text-menu01: #ffffff;
  --text-body-bg: var(--header-text-menu01);
}
`;
