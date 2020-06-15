export default {
  name: 'align-self',

  link: 'https://www.w3.org/TR/css-align-3/#propdef-align-self',

  initValue: 'auto',

  isFeaturedHighlighted: true,

  appliesTo: 'flex items, grid items, and absolutely-positioned boxes',

  desc: `<p>Aligns the box (as the <a href="#alignment-subject">alignment subject</a>)
within its containing block (as the <a href="#alignment-container">alignment container</a>)
along the block/column/cross axis of the <span>alignment container</span>:
the box’s outer edges are aligned within its <span>alignment container</span> <a href="#alignment-values">as described by its alignment value</a></p>

<p class="note" role="note"><span>Note:</span> <span class="css">auto</span> margins,
because they effectively adjust the size of the margin area,
take precedence over <a href="#align-self">align-self</a>.</p>`,

  values: [
    {
      name: 'auto | normal | stretch | &lt;baseline-position> | &lt;overflow-position>? &lt;self-position>',
      alias: 'align-self-value',
      desc: ''
    }
  ],

  customValues: [
    /* Basic keywords */
    {
      name: 'auto',
      current: true
    },
    {
      name: 'normal'
    },
    {
      name: 'stretch'
    },
    /* Positional alignment */
    {
      name: 'center'
    },
    {
      name: 'start'
    },
    {
      name: 'end'
    },
    {
      name: 'self-start'
    },
    {
      name: 'self-end'
    },
    /* Baseline alignment */
    {
      name: 'baseline'
    },
    {
      name: 'first baseline'
    },
    {
      name: 'last baseline'
    }

  ],

  htmlMarkup: `<div class="parent parent--fade-children">
    <div class="child">Ut enim ad minim veniam commodo consequat exercitation ullamco</div>
    <div class="child child--featured">Duis aute irure dolor</div>
    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut</div>
    <div class="child">Excepteur</div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template': '150px 150px / 150px 150px'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'align-self': 'auto'
      }
    }
  ]
};