<p align="center">
  <a href="https://dashvar.com"><img alt="Dashvar Logo Banner" src="https://github.com/dashvars/dashvar/blob/master/docs/dashvar-logo-banner.png" /></a>
</p>

# [dashvar](https://dashvar.com)

[![Build](https://badgen.net/github/checks/dashvars/dashvar)](https://github.com/carlosbaraza/dashvar/actions?query=workflow%3A%22Build%22)
[![GitHub license](https://badgen.net/github/license/dashvars/dashvar)](https://github.com/dashvars/dashvar/blob/master/LICENSE)
[![GitHub release](https://badgen.net/github/tag/dashvars/dashvar)](https://GitHub.com/dashvars/dashvar/releases/)
[![npm version](https://badgen.net/npm/v/dashvar)](https://www.npmjs.com/package/dashvar)

CSS Variables Library. Strong defaults for good looking designs. Inspired by Tailwind CSS.

[Full documentation](https://dashvar.com)

## Getting started

We recommend you follow the [getting started page](https://dashvar.com/default/docs).

## Features:

- [x] Tiny (<1.8KB gzipped)
- [x] Only CSS variables, no global styles. No risk to start using with an existing project.
  - [x] [Colour palette](https://dashvar.com/default/docs/colour-palette)
  - [x] [Sizing and Scaling System](https://dashvar.com/default/docs/sizing-system)
  - [x] Typography:
    - [x] [Font size scale](https://dashvar.com/default/docs/font-size)
    - [x] [Line height scale](https://dashvar.com/default/docs/line-height)
    - [x] [Font family](https://dashvar.com/default/docs/font-family)
  - [x] Many more at [full documentation](https://dashvar.com)
- [x] [Optional modern (and opinionated) CSS reset](https://dashvar.com/default/docs/base-styles
- [x] [VS Code extension with IntelliSense](https://dashvar.com/default/docs/vs-code-extension)
- [x] [NPM package](https://www.npmjs.com/package/dashvar)
  - [x] Export variables as JS object from NPM package
- [x] [Good documentation](https://dashvar.com/default/docs)
- [ ] Examples:
  - [ ] `styled-components`
  - [ ] `styled-jsx`
  - [ ] `CSS modules`

### Usage example:

```css
.component {
  color: var(--gray-800);
  font-size: var(--font-size-2); /* 1rem / 16px */
  line-height: var(--line-height-2); /* 1.5rem / 24px */
  padding: var(--size-5)); /* 1.25rem / 20px	*/
}

/* If preferred, you can use @media queries */
.md .component {
  padding: var(--size-10); /* 2.5rem / 40px	*/
}
```

## Override variables

You can override any of the variables with your own if you need to:

```css
:root {
  /* Just don't ever do this exact ugly override ;) */
  --blue-500: rgb(0, 0, 255);
}
```

## Contributing

Please, we welcome any contributions to the project. Together, we can
build a great, yet simple library for the long run.

## [Donations](https://github.com/sponsors/dashvars)

[Support the project on the Dashvar GitHub Sponsors page](https://github.com/sponsors/dashvars).

The project is maintained, time and financially wise, by me ([Carlos Baraza](https://carlosbaraza.com)). I live in London, UK. And I strive to create an organization that can return some value to society in the best way I know how, technology.

Unfortunately, creating Open Source Software, although a great philanthropic exercise for the mind and the soul, has some disadvantages in comparison with proprietary software. I would love to continue providing value, and your contribution really makes a difference, even if it is really small.

The funds will be used to maintain and create useful projects for the development community.
