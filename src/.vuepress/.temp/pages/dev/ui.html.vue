<template><div><h1 id="🪄-ui-facade-documentation" tabindex="-1"><a class="header-anchor" href="#🪄-ui-facade-documentation" aria-hidden="true">#</a> 🪄 UI Facade Documentation</h1>
<p>The <code v-pre>UI</code> class is a facade that provides a simple interface to complex subsystems in a system. It provides a set of methods that delegate the work to other classes and methods. This class is part of the <code v-pre>Ninja\Cosmic\Terminal\UI</code> namespace.</p>
<h2 id="header-string-message-string-backgroundcolor-self-default-header-background-color-int-width-self-default-output-width-void" tabindex="-1"><a class="header-anchor" href="#header-string-message-string-backgroundcolor-self-default-header-background-color-int-width-self-default-output-width-void" aria-hidden="true">#</a> <code v-pre>header(string $message, string $backgroundColor = self::DEFAULT_HEADER_BACKGROUND_COLOR, int $width = self::DEFAULT_OUTPUT_WIDTH): void</code></h2>
<p>This method creates a header with a given message, background color, and width. It delegates the work to the <code v-pre>Header</code> class.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$message</code>: The message to be displayed in the header.</li>
<li><code v-pre>$backgroundColor</code>: The background color of the header. Defaults to <code v-pre>self::DEFAULT_HEADER_BACKGROUND_COLOR</code>.</li>
<li><code v-pre>$width</code>: The width of the header. Defaults to <code v-pre>self::DEFAULT_OUTPUT_WIDTH</code>.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">UI</span><span class="token operator">::</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Welcome to the Application'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'blue'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="list-array-items-string-itemcolor-self-default-list-item-color-string-type-self-default-list-type-void" tabindex="-1"><a class="header-anchor" href="#list-array-items-string-itemcolor-self-default-list-item-color-string-type-self-default-list-type-void" aria-hidden="true">#</a> <code v-pre>list(array $items, string $itemColor = self::DEFAULT_LIST_ITEM_COLOR, string $type = self::DEFAULT_LIST_TYPE): void</code></h2>
<p>This method creates a list with given items, item color, and type. It delegates the work to either the <code v-pre>UnorderedList</code> or <code v-pre>OrderedList</code> class based on the <code v-pre>$type</code> parameter.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$items</code>: The items to be displayed in the list.</li>
<li><code v-pre>$itemColor</code>: The color of the items. Defaults to <code v-pre>self::DEFAULT_LIST_ITEM_COLOR</code>.</li>
<li><code v-pre>$type</code>: The type of the list. Defaults to <code v-pre>self::DEFAULT_LIST_TYPE</code>.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">UI</span><span class="token operator">::</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'Item 1'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Item 2'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Item 3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'green'</span><span class="token punctuation">,</span> <span class="token class-name static-context">OrderedList</span><span class="token operator">::</span><span class="token constant">TYPE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="table-array-header-array-data-void" tabindex="-1"><a class="header-anchor" href="#table-array-header-array-data-void" aria-hidden="true">#</a> <code v-pre>table(array $header, array $data): void</code></h2>
<p>This method creates a table with a given header and data. It delegates the work to the <code v-pre>Table</code> class.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$header</code>: The header of the table.</li>
<li><code v-pre>$data</code>: The data to be displayed in the table.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">UI</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'Name'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Age'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'John Doe'</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'Jane Doe'</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="summary-array-data-int-width-self-default-output-width-string-title-null-void" tabindex="-1"><a class="header-anchor" href="#summary-array-data-int-width-self-default-output-width-string-title-null-void" aria-hidden="true">#</a> <code v-pre>summary(array $data, int $width = self::DEFAULT_OUTPUT_WIDTH, ?string $title = null): void</code></h2>
<p>This method creates a summary with given data, width, and title. It delegates the work to the <code v-pre>Summary</code> class.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$data</code>: The data to be displayed in the summary.</li>
<li><code v-pre>$width</code>: The width of the summary. Defaults to <code v-pre>self::DEFAULT_OUTPUT_WIDTH</code>.</li>
<li><code v-pre>$title</code>: The title of the summary.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">UI</span><span class="token operator">::</span><span class="token function">summary</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'Total Users'</span> <span class="token operator">=></span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Active Users'</span> <span class="token operator">=></span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'User Statistics'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="p-string-message-int-width-self-default-output-width-void" tabindex="-1"><a class="header-anchor" href="#p-string-message-int-width-self-default-output-width-void" aria-hidden="true">#</a> <code v-pre>p(string $message, int $width = self::DEFAULT_OUTPUT_WIDTH): void</code></h2>
<p>This method creates a paragraph with a given message and width. It delegates the work to the <code v-pre>Paragraph</code> class.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$message</code>: The message to be displayed in the paragraph.</li>
<li><code v-pre>$width</code>: The width of the paragraph. Defaults to <code v-pre>self::DEFAULT_OUTPUT_WIDTH</code>.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">UI</span><span class="token operator">::</span><span class="token function">p</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'This is a sample paragraph.'</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="rule-int-width-self-default-output-width-string-color-self-default-rule-color-void" tabindex="-1"><a class="header-anchor" href="#rule-int-width-self-default-output-width-string-color-self-default-rule-color-void" aria-hidden="true">#</a> <code v-pre>rule(int $width = self::DEFAULT_OUTPUT_WIDTH, string $color = self::DEFAULT_RULE_COLOR): void</code></h2>
<p>This method creates a rule with a given width and color. It delegates the work to the <code v-pre>Rule</code> class.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$width</code>: The width of the rule. Defaults to <code v-pre>self::DEFAULT_OUTPUT_WIDTH</code>.</li>
<li><code v-pre>$color</code>: The color of the rule. Defaults to <code v-pre>self::DEFAULT_RULE_COLOR</code>.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">UI</span><span class="token operator">::</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'red'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="title-string-message-string-subtitle-null-int-width-self-default-output-width-void" tabindex="-1"><a class="header-anchor" href="#title-string-message-string-subtitle-null-int-width-self-default-output-width-void" aria-hidden="true">#</a> <code v-pre>title(string $message, ?string $subtitle = null, int $width = self::DEFAULT_OUTPUT_WIDTH): void</code></h2>
<p>This method creates a title with a given message, subtitle, and width. It delegates the work to the <code v-pre>Title</code> class.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$message</code>: The message to be displayed in the title.</li>
<li><code v-pre>$subtitle</code>: The subtitle of the title.</li>
<li><code v-pre>$width</code>: The width of the title. Defaults to <code v-pre>self::DEFAULT_OUTPUT_WIDTH</code>.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">UI</span><span class="token operator">::</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Welcome'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'This is a subtitle'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


