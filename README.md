# Progressively enhanced accessible tabbed UI v0.0.1 2014-04-02

When a page contains a set of `<section>` elements with titles this script generates an unordered list that works as a tab UI.

NB this is very alpha, it's not very developer friendly and not keyboard accessible yet.

## Usage

Currently it depends on specific [<abbr title="Scalable and Modular Architecture for CSS">SMACSS</abbr>](http://smacss.com/)/[<abbr title="Block Element Modifier">BEM</abbr>](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) style class names on the `<section>`s, their headings, and a wrapper element. These are `js-panel`, `js-panel__title` and `js-tab-ui` respectively.

It also has a small script in `<head>` that is used to eliminate <abbr title="Flash of unstyled content">FOUC</abbr>. It replaces the `no-js` class name on the root element with `js-tabs` which is used in the <abbr title="Cascading Style Sheets">CSS</abbr>.

None of the CSS is required however, the tabs work as a plain unordered list if none is applied.

## Todo

- use a config object
- add keyboard accessibility

## Demo

[View demo](http://derekjohnson.github.io/tabs/)