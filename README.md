# VueJS + 8base Todos App

## Steps taken to initialize the App

1. Install vue CLI.
```sh
npm install -g @vue/cli
```

2. Create a new project
```sh
vue create vuejs-todos-app
```

3. Select manual configuration.
```sh
Vue CLI v3.10.0
? Please pick a preset: (Use arrow keys)
  default (babel, eslint)
> Manually select features
```

4. Select Babel, PWA Support, Router, Vuex, and Linter as project features.
```sh
? Check the features needed for your project:
 ◉ Babel
 ◯ TypeScript
❯◉ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```

5. Select `history mode` for router.
```sh
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
```

6. ESLint + Prettier for linter config.
```sh
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
❯ ESLint + Prettier
```

7. Lint on save for real-time enforcement.
```sh
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit
```

8. Use dedicated config files.
```sh
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files
  In package.json
```

9. Save this preset for later!
```sh
? Save this as a preset for future projects? Yes
? Save preset as: VueJs-8base-Preset
```

## Installing Dependencies
Feel free to use Yarn or NPM as your prefered package manager.

1. Application dependencies
```sh
npm install --save @8base/web-auth0-auth-client graphql-tag apollo-cache-inmemory apollo-client apollo-link-http
```

## Management Console Setup

1. Create a workspace.
2. Go to Settings > Authentication
3. Create a new Authentication Profile using 8base Auth0

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
