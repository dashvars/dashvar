# dashvar

[![Build](https://github.com/carlosbaraza/dashvar/workflows/Build/badge.svg)](https://github.com/carlosbaraza/dashvar/actions?query=workflow%3A%22Build%22)
[![GitHub license](https://img.shields.io/github/license/dashvars/dashvar)](https://github.com/dashvars/dashvar/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/v/tag/dashvars/dashvar.svg?sort=semver&label=Current%20release)](https://GitHub.com/dashvars/dashvar/releases/)
[![npm version](https://badge.fury.io/js/dashvar.svg)](https://www.npmjs.com/package/dashvar)

CSS variables library. Strong defaults for good looking designs. Inspired by Tailwind CSS.

[Full documentation](https://dashvar.com)

Features:

- [x] Tiny (<1.5KB gzipped)
- [x] Only CSS variables, no global styles. No risk to start using with an existing project.
- [x] Colour palette
- [x] Spacing scale
- [x] Text:
  - [x] Font size scale
  - [x] Line height scale
  - [x] Font families
- [x] Optional modern (and opinionated) CSS reset
  - Not only reset, but also remove default styles from things like buttons, form inputs, headings, etc. The reasoning behind this is that it is easier to design starting from scratch, without having to account for default styles depending on the component.
  - Same Base than Tailwind CSS
- [ ] Prune script to remove any non used variables (even smaller size)
- [x] Export variables as JS object (unless no-one finds this useful)
- [ ] Examples:
  - [ ] `styled-components`
  - [ ] `styled-jsx`
  - [ ] `CSS modules`
- [x] VS Code extension with IntelliSense
- [x] NPM package
- [x] Good documentation

# Getting started

Usage example:

```css
.component {
  color: var(--gray-800);
  font-size: var(--font-size-2); /* 1rem / 16px */
  line-height: var(--line-height-2); /* 1.5rem / 24px */
  padding: var(--s-5)); /* 1.25rem / 20px	*/
}

@media (min-width: 768px) {
  .component {
    padding: var(--s-10); /* 2.5rem / 40px	*/
  }
}
```

# Override variables

You can override any of the variables with your own if you need to:

```css
:root {
  --blue-500: rgb(0, 0, 255); /* Just don't ever do exactly this override ;) */
}
```

# Contributing

Please, feel free to contribute to the project. Any contributions are absolutely welcomed. Together, we can
build a great and simple library for the long run.

# Donations

Dashvar aims to provide a simple design system to accelerate and facilitate the rapid development of user interfaces.

It will always be Open Source. However, in order to maintain the project, we'd need to find a sustainable income stream, mostly to cover our time investment to bring this hopefully useful project to you.

We would really appreciate your support. Any donation will make a big difference.
