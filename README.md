# tsconfig-paths-jest

This module loads `tsconfig.json`'s `paths` and transforms to `moduleNameMapper` used in `jest.config.js`

**Warning:** Use [`pathsToModuleNameMapper`](https://kulshekhar.github.io/ts-jest/user/config/#jest-config-with-helper) with ts-jest version 23 or above.

## Usage

tsconfig.json

```json
"paths": {
  "@app/*": ["src/*"]
}
```

jest.config.js

```js
const tsconfig = require("./tsconfig.json")
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig)

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper,
}
```

Result

```js
moduleNameMapper: {
  "@app/(.*)": "<rootDir>/src/$1"
}
```

## Limitation

This module does not support the following definition that has multiple paths.

```js
"paths": {
  "@app/*": ["src/*", "src/app/*"]
}
```
