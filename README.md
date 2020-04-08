# configuration

configuration for developer on our projects

# Docker

Use lightweight up to date images preferably alpine
i.e. for Node node:12.16.1-alpine, for golang from scratch

Avoid running a container with the root user.
We want to run the container as an unprivileged user wherever possible.

In the docker folder there are some base image that we can use for different kind of projects

# winston ?and for golang ?

# ESLint

'plugin:@typescript-eslint/recommended',
'plugin:@typescript-eslint/recommended-requiring-type-checking',
'prettier/@typescript-eslint',
'airbnb-base',
'eslint:recommended',
'plugin:import/errors',
'plugin:import/warnings',
'plugin:import/typescript',

'plugin:prettier/recommended',
eslint
use the airbnb https://www.npmjs.com/package/eslint-config-airbnb-base as it covers a lot of important rules (equality operator(eqeqeq), destructuring (prefer-destructuring) , use const or let (no-undef prefer-const), use templating for string concatenation etc..)

for react project
npx install-peerdeps --dev eslint-config-airbnb
"extends": ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"]

for node project
npx install-peerdeps --dev eslint-config-airbnb-base
"extends": ["airbnb-base", "plugin:prettier/recommended"

# Prettier

Use Prettier in every Javascrpit based project.

To exclude files from formatting, add entries to a .prettierignore file in the project root or set the --ignore-path CLI option. .prettierignore uses gitignore syntax. For instance exclude `dist` or `build` folder.

Install the following npm packages:

npm install --save-dev eslint-config-prettier eslint-plugin-prettier
Then, extend your ESLint config with Prettier's recommended config:

.eslintrc

```
{
  "extends": ["plugin:prettier/recommended"]
}
```

It's recommended that `"plugin:prettier/recommended"` is the last entry in the "extends" array.

to check the files in your project:

```
npx prettier --check
``


# .editorconfig

- It makes coding styles consistent across different projects
- It Avoids Setting up the code editor for different projects / editor
- [EditorConfig](https://editorconfig.org/) help us automatically configure our code editor and thus help maintain consistent coding styles.
- EditorConfig comes as a plugin for VSCode

```

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

```

# .gitattributes

Recommended base .gitattributes file:

this is to avoid OS-related issues (i.e. different file encoding).

```

# Auto detect text files and perform LF normalization

- text=auto

```

If the project contains Solidity files, add this to correctly apply syntax highlighting on Solidity files

```

\*.sol linguist-language=Solidity

```

```
