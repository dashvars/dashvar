# tailvars

CSS variables library. Strong defaults for good looking designs. Inspired by Tailwind CSS.

Features:

- [x] Tiny (<5KB Gzipped)
- [x] Only CSS variables, nothing intrusive. Easy to start using right now.
- [x] Responsive design
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
- [ ] Export variables as JS object (unless no-one finds this useful)
- [ ] Examples:
  - [ ] `styled-components`
  - [ ] `styled-jsx`
  - [ ] `CSS modules`
- [ ] VS Code extension with IntelliSense
- [ ] NPM package
- [ ] Good documentation

# Getting started

Usage example:

```css
.component {
  color: var(--gray-800);
  font-size: var(--font-size-2); /* 1rem / 16px */
  line-height: var(--line-height-2); /* 1.5rem / 24px */
  padding: var(--md-s-10, var(--s-5)); /* Space 5 to mobile. Space 10 to tablet+ */
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
