# Daria's Design System
- is a modular component library. Simple. Accessible. And gives you the building blocks to build your own React applications.

[Check it out here](https://daria-s-design-system.vercel.app/)

## Requirements

* React
* React DOM
* Styled System
* Styled Components

## To install in your app
```js
npm i daria-s-design-system
```

```js
import { mainTheme as theme } from 'daria-s-design-system'
import { ThemeProvider } from "styled-components"

export const App = ({ children }) =>
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
```

## Library documentation:

To run locally:
```sh
yarn install
yarn docz:dev
```
