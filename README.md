# Progressively enhanced accessible tabbed UI

When a page contains a set of `<section>` elements with titles this script generates an unordered list that works as a tab UI. The last viewed tab is stored in `localStorage`.

Fully functioning back to IE8.

NB it's very alpha.

## Usage

Currently it depends on specific [<abbr title="Scalable and Modular Architecture for CSS">SMACSS</abbr>](http://smacss.com/)/[<abbr title="Block Element Modifier">BEM</abbr>](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) style class names on the `<section>`s, their headings, and a wrapper element. These are `js-panel`, `js-panel__title` and `js-tab-ui` respectively.

It also has a small script in `<head>` that is used to eliminate <abbr title="Flash of unstyled content">FOUC</abbr>. It replaces the `no-js` class name on the root element with `js-tabs` which is used in the <abbr title="Cascading Style Sheets">CSS</abbr>.

None of the CSS is required however, the tabs work as a plain unordered list if none is applied.

For keyboard interaction <kbd>tab</kbd> to the first tab, use the arrow keys to move between tabs, and press <kbd>space</kbd> to show the corresponding panel.

## Todo

- use a config object
- better keyboard interaction

## Demo

[View demo](http://derekjohnson.github.io/tabs/)

## Notes

This was inspired by Marco Zehe's [Advanced ARIA tip #1: Tabs in web apps](http://www.marcozehe.de/2013/02/02/advanced-aria-tip-1-tabs-in-web-apps/).

Heydon Pickering has published [an excellent jQuery example](http://heydonworks.com/practical_aria_examples/#tab-interface) which uses a `<ul>` in the source with skiplinks to the sections.