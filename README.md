# stc-htmllint

Htmllint for stc

## Install

```sh
npm install stc-htmllint
```

## How to use

```js
// stc.config.js
var htmllint = require('stc-htmllint');

stc.lint({
  htmllint: {plugin: htmllint, include: /\.html$/, options: {}}
})
```

## Default Options

```js
{
  'attr-bans': [
    'align',
    'background',
    'bgcolor',
    'border',
    'frameborder',
    'longdesc',
    'marginwidth',
    'marginheight',
    'scrolling',
    'style',
    'width'
  ],
  'indent-style': 'nonmixed',
  'indent-width': 4,
  'text-escape-spec-char': true,
  'tag-self-close': false,
  'tag-bans': ['style', 'b', 'i'],
  'tag-name-lowercase': true,
  'doctype-first': false,
  'doctype-html5': false,
  'attr-name-style': 'lowercase',
  'attr-name-ignore-regex': false,
  'attr-no-dup': true,
  'attr-no-unsafe-chars': true,
  'attr-quote-style': 'double',
  'attr-req-value': true,
  'id-no-dup': true,
  'id-class-no-ad': true,
  'id-class-style': 'underscore',
  'class-style': false,
  'id-class-ignore-regex': false,
  'img-req-alt': true,
  'img-req-src': true,
  'href-style': false,
  'csslint': false,
  'label-req-for': true,
  'line-end-style': 'lf',
  'line-max-len': false,
  'line-max-len-ignore-regex': false,
  'head-req-title': true,
  'title-no-dup': true,
  'title-max-len': 60,
  'html-req-lang': false,
  'lang-style': 'case'
}
```

You can use `options` to change them.