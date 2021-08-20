# Front-end testing guide

Soon on medium [maniero.medium.com](https://maniero.medium.com/)

## WORD: The four front-end test strategy pillars

- `W`: It **Works**!
  - If all tests are green, you are safe to ship!
- `O`: It **Orients** the code design.
  - You must face too complex to read tests as an application code smell.
- `R`: It is easy to **Refactor**.
  - The rule is tests must only break if you change the application behavior.
  - No implementation detail tests
- `D`: It is a **Debugging** tool
  - Ok, there is no bullet proof application! Bugs must be easily to reproduce.


# Setup

```bash
yarn setup
```

# Running tests

### Unit tests

```bash
yarn test
```

### Visual Regression tests

```bash
yarn test:visual:ci
```

The command above will `start` storybook, `run` visual tests and `stop` storybook.

#### Visual Regression tests During development

If you are developing visual tests it may be faster to do not `start` and `stop` storybook every time.

In this scenario, starts storybook:

```bash
yarn storybook
```

and run visual tests individually:

```bash
yarn test:visual
```


### E2E tests

```bash
yarn test:e2e:ci
```

The command above will `build` the application and `run` e2e tests against a static server.

#### E2E tests During development

If you are developing it may be faster to do not `build` the application every time.

In this scenario, starts the application:

```bash
yarn start
```

and run e2e tests individually:

```bash
yarn test:e2e
```

# Pre-requisites

- yarn
- docker