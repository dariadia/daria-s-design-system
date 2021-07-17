# Danni's Web Ui Kit
## Requirements

* React
* React DOM
* Styled System
* Styled Components

```js
import { theme } from '@dariadia/danni-kit'
import { ThemeProvider } from "styled-components"

export const App = ({ children }) =>
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
```


## Docz Documentation

Local Dev:
```sh
yarn docz:dev
```

Build:
```sh
yarn docz:build
```

Serve:
```sh
yarn docz:serve
```

## Build app
```sh
yarn build
```
