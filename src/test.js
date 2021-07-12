const html = `
<div><p>Deserialized paragraph here.</p></div>
<div>
  <p>
    These are the basic marks. You can customize the type and component for each
    of these.e
  </p>
  <p>
    <strong>Bold, </strong><em>italic, </em><u>underline, </u
    ><del>strikethrough, </del
    ><strong>mixed, </strong><code class="sc-fzpjYC erRYCd">line</code
    ><sub>sub, </sub><sup>sup, </sup>
    </p>
    <pre><code>Code block</code></pre>
</div>
<div>
  <p>
    The Highlight plugin enables support for
    <mark class="sc-fzoXzr gTaOAp">highlights</mark>, useful when reviewing
    content or highlighting it for future reference.
  </p>
</div>
<div>
  <h1 font-size="16" class="sc-Axmtr iYzqgy">Elements</h1>
  <p>These are the most common elements, known as blocks:</p>
  <h1 font-size="16" class="sc-Axmtr iYzqgy">Heading 1</h1>
  <h2 font-size="16" class="sc-AxmLO fxriFc">Heading 2</h2>
  <h3 font-size="16" class="sc-fzozJi haooyy">Heading 3</h3>
  <h4 font-size="16" class="sc-fzoLsD gEudmP">Heading 4</h4>
  <h5 font-size="16" class="sc-fzpans fiNxFQ">Heading 5</h5>
  <h6 font-size="16" class="sc-fzplWN heirJR">Heading 6</h6>
  <blockquote class="sc-AxgMl cTEzUq">Blockquote</blockquote>
  <pre class="sc-AxheI flKkIC"><code>Code block</code></pre>
</div>
<div>
  <ul class="sc-fznKkj iKBNUG">
    <li><p>Bulleted list</p></li>
  </ul>
  <ol class="sc-fznZeY dvlaqe">
    <li><p>Numbered list</p></li>
  </ol>
  <p>
    With Slate you can build complex block types that have their own embedded
    content and behaviors, like rendering checkboxes inside check list items!
  </p>
  <p>Try it out for yourself!</p>
</div>
<div>
  <p>
    Since the editor is based on a recursive tree model, similar to an HTML
    document, you can create complex nested structures, like tables:
  </p>
  <table class="sc-fzqBZW dmVXSF">
    <tbody>
      <tr>
        <td class="sc-fzokOt hjmskT"></td>
        <td class="sc-fzokOt hjmskT"><strong>Human</strong></td>
        <td class="sc-fzokOt hjmskT"><strong>Dog</strong></td>
        <td class="sc-fzokOt hjmskT"><strong>Cat</strong></td>
      </tr>
      <tr>
        <td class="sc-fzokOt hjmskT"><strong># of Feet</strong></td>
        <td class="sc-fzokOt hjmskT">2</td>
        <td class="sc-fzokOt hjmskT">4</td>
        <td class="sc-fzokOt hjmskT">4</td>
      </tr>
      <tr>
        <td class="sc-fzokOt hjmskT"><strong># of Lives</strong></td>
        <td class="sc-fzokOt hjmskT">1</td>
        <td class="sc-fzokOt hjmskT">1</td>
        <td class="sc-fzokOt hjmskT">9</td>
      </tr>
    </tbody>
  </table>
  <p>
    This table is just a basic example of rendering a table, and it doesn&#x27;t
    have fancy functionality. But you could augment it to add support for
    navigating with arrow keys, displaying table headers, adding column and
    rows, or even formulas if you wanted to get really crazy!
  </p>
</div>
<div>
  <p>
    In addition to block nodes, you can create inline nodes, like
    <a href="https://en.wikipedia.org/wiki/Hypertext">hyperlinks</a>!
  </p>
  <p>
    This example shows hyperlinks in action. It features two ways to add links.
    You can either add a link via the toolbar icon above, or if you want in on a
    little secret, copy a URL to your keyboard and paste it while a range of
    text is selected.
  </p>
</div>
<div>
  <p>
    In addition to nodes that contain editable text, you can also create other
    types of nodes, like images or videos.
  </p>
  <div>
    <div contenteditable="false">
      <img
        src="https://source.unsplash.com/kFrdX5IeQzI"
        alt=""
        class="sc-fznyAO cilSGN"
      />
    </div>
  </div>
  <p>
    This example shows images in action. It features two ways to add images. You
    can either add an image via the toolbar icon above, or if you want in on a
    little secret, copy an image URL to your keyboard and paste it anywhere in
    the editor!
  </p>
</div>
<div>
  <p>
    In addition to simple image nodes, you can actually create complex embedded
    nodes. For example, this one contains an input element that lets you change
    the video being rendered!
  </p>
  <p>
    Try it out! This editor is built to handle Vimeo embeds, but you could
    handle any type.
  </p>
</div>
`;
export default html;
