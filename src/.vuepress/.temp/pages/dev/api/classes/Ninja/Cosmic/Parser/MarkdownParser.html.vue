<template><div><hr>
<h1 id="markdownparser" tabindex="-1"><a class="header-anchor" href="#markdownparser" aria-hidden="true">#</a> MarkdownParser</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Parser\MarkdownParser</code></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="instances" tabindex="-1"><a class="header-anchor" href="#instances" aria-hidden="true">#</a> instances</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$instances</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This property is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="breaks-enabled" tabindex="-1"><a class="header-anchor" href="#breaks-enabled" aria-hidden="true">#</a> breaks_enabled</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$breaks_enabled</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="markup-escaped" tabindex="-1"><a class="header-anchor" href="#markup-escaped" aria-hidden="true">#</a> markup_escaped</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$markup_escaped</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="urls-linked" tabindex="-1"><a class="header-anchor" href="#urls-linked" aria-hidden="true">#</a> urls_linked</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$urls_linked</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="safe-mode" tabindex="-1"><a class="header-anchor" href="#safe-mode" aria-hidden="true">#</a> safe_mode</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$safe_mode</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="inline-marker-list" tabindex="-1"><a class="header-anchor" href="#inline-marker-list" aria-hidden="true">#</a> inline_marker_list</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$inline_marker_list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="regex-html-attribute" tabindex="-1"><a class="header-anchor" href="#regex-html-attribute" aria-hidden="true">#</a> regex_html_attribute</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$regex_html_attribute</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="definition-data" tabindex="-1"><a class="header-anchor" href="#definition-data" aria-hidden="true">#</a> definition_data</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$definition_data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="safe-links-whitelist" tabindex="-1"><a class="header-anchor" href="#safe-links-whitelist" aria-hidden="true">#</a> safe_links_whitelist</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$safe_links_whitelist</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="block-types" tabindex="-1"><a class="header-anchor" href="#block-types" aria-hidden="true">#</a> block_types</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$block_types</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="unmarked-block-types" tabindex="-1"><a class="header-anchor" href="#unmarked-block-types" aria-hidden="true">#</a> unmarked_block_types</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$unmarked_block_types</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="inline-types" tabindex="-1"><a class="header-anchor" href="#inline-types" aria-hidden="true">#</a> inline_types</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$inline_types</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="special-characters" tabindex="-1"><a class="header-anchor" href="#special-characters" aria-hidden="true">#</a> special_characters</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$special_characters</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="strong-regex" tabindex="-1"><a class="header-anchor" href="#strong-regex" aria-hidden="true">#</a> strong_regex</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$strong_regex</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="em-regex" tabindex="-1"><a class="header-anchor" href="#em-regex" aria-hidden="true">#</a> em_regex</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$em_regex</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="void-elements" tabindex="-1"><a class="header-anchor" href="#void-elements" aria-hidden="true">#</a> void_elements</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$void_elements</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="text-level-elements" tabindex="-1"><a class="header-anchor" href="#text-level-elements" aria-hidden="true">#</a> text_level_elements</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$text_level_elements</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">text</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$text</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$text</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="line" tabindex="-1"><a class="header-anchor" href="#line" aria-hidden="true">#</a> line</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">line</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$text</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$non_nestables</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$text</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$non_nestables</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="setbreaksenabled" tabindex="-1"><a class="header-anchor" href="#setbreaksenabled" aria-hidden="true">#</a> setBreaksEnabled</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setBreaksEnabled</span><span class="token punctuation">(</span><span class="token keyword type-hint">bool</span> <span class="token variable">$breaks_enabled</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">static</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$breaks_enabled</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="setmarkupescaped" tabindex="-1"><a class="header-anchor" href="#setmarkupescaped" aria-hidden="true">#</a> setMarkupEscaped</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setMarkupEscaped</span><span class="token punctuation">(</span><span class="token keyword type-hint">bool</span> <span class="token variable">$markup_escaped</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">static</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$markup_escaped</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="seturlslinked" tabindex="-1"><a class="header-anchor" href="#seturlslinked" aria-hidden="true">#</a> setUrlsLinked</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setUrlsLinked</span><span class="token punctuation">(</span><span class="token keyword type-hint">bool</span> <span class="token variable">$urls_linked</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">static</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$urls_linked</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="setsafemode" tabindex="-1"><a class="header-anchor" href="#setsafemode" aria-hidden="true">#</a> setSafeMode</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setSafeMode</span><span class="token punctuation">(</span><span class="token keyword type-hint">bool</span> <span class="token variable">$safe_mode</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">static</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$safe_mode</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="lines" tabindex="-1"><a class="header-anchor" href="#lines" aria-hidden="true">#</a> lines</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">lines</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$lines</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$lines</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isblockcontinuable" tabindex="-1"><a class="header-anchor" href="#isblockcontinuable" aria-hidden="true">#</a> isBlockContinuable</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">isBlockContinuable</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$type</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$type</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isblockcompletable" tabindex="-1"><a class="header-anchor" href="#isblockcompletable" aria-hidden="true">#</a> isBlockCompletable</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">isBlockCompletable</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$type</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$type</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockcode" tabindex="-1"><a class="header-anchor" href="#blockcode" aria-hidden="true">#</a> blockCode</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockCode</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">array</span> <span class="token variable">$block</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>?array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockcodecontinue" tabindex="-1"><a class="header-anchor" href="#blockcodecontinue" aria-hidden="true">#</a> blockCodeContinue</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockCodeContinue</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockcodecomplete" tabindex="-1"><a class="header-anchor" href="#blockcodecomplete" aria-hidden="true">#</a> blockCodeComplete</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockCodeComplete</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockcomment" tabindex="-1"><a class="header-anchor" href="#blockcomment" aria-hidden="true">#</a> blockComment</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockComment</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockcommentcontinue" tabindex="-1"><a class="header-anchor" href="#blockcommentcontinue" aria-hidden="true">#</a> blockCommentContinue</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockCommentContinue</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockfencedcode" tabindex="-1"><a class="header-anchor" href="#blockfencedcode" aria-hidden="true">#</a> blockFencedCode</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockFencedCode</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockfencedcodecontinue" tabindex="-1"><a class="header-anchor" href="#blockfencedcodecontinue" aria-hidden="true">#</a> blockFencedCodeContinue</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockFencedCodeContinue</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockfencedcodecomplete" tabindex="-1"><a class="header-anchor" href="#blockfencedcodecomplete" aria-hidden="true">#</a> blockFencedCodeComplete</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockFencedCodeComplete</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockheader" tabindex="-1"><a class="header-anchor" href="#blockheader" aria-hidden="true">#</a> blockHeader</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockHeader</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blocklist" tabindex="-1"><a class="header-anchor" href="#blocklist" aria-hidden="true">#</a> blockList</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockList</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blocklistcontinue" tabindex="-1"><a class="header-anchor" href="#blocklistcontinue" aria-hidden="true">#</a> blockListContinue</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockListContinue</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blocklistcomplete" tabindex="-1"><a class="header-anchor" href="#blocklistcomplete" aria-hidden="true">#</a> blockListComplete</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockListComplete</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockquote" tabindex="-1"><a class="header-anchor" href="#blockquote" aria-hidden="true">#</a> blockQuote</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockQuote</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockquotecontinue" tabindex="-1"><a class="header-anchor" href="#blockquotecontinue" aria-hidden="true">#</a> blockQuoteContinue</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockQuoteContinue</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockrule" tabindex="-1"><a class="header-anchor" href="#blockrule" aria-hidden="true">#</a> blockRule</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockRule</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blocksetextheader" tabindex="-1"><a class="header-anchor" href="#blocksetextheader" aria-hidden="true">#</a> blockSetextHeader</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockSetextHeader</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$block</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockmarkup" tabindex="-1"><a class="header-anchor" href="#blockmarkup" aria-hidden="true">#</a> blockMarkup</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockMarkup</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockmarkupcontinue" tabindex="-1"><a class="header-anchor" href="#blockmarkupcontinue" aria-hidden="true">#</a> blockMarkupContinue</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockMarkupContinue</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blockreference" tabindex="-1"><a class="header-anchor" href="#blockreference" aria-hidden="true">#</a> blockReference</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockReference</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blocktable" tabindex="-1"><a class="header-anchor" href="#blocktable" aria-hidden="true">#</a> blockTable</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockTable</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">array</span> <span class="token variable">$block</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>?array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="blocktablecontinue" tabindex="-1"><a class="header-anchor" href="#blocktablecontinue" aria-hidden="true">#</a> blockTableContinue</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">blockTableContinue</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$block</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$block</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="paragraph" tabindex="-1"><a class="header-anchor" href="#paragraph" aria-hidden="true">#</a> paragraph</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">paragraph</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$line</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$line</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlinecode" tabindex="-1"><a class="header-anchor" href="#inlinecode" aria-hidden="true">#</a> inlineCode</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineCode</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlineemailtag" tabindex="-1"><a class="header-anchor" href="#inlineemailtag" aria-hidden="true">#</a> inlineEmailTag</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineEmailTag</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlineemphasis" tabindex="-1"><a class="header-anchor" href="#inlineemphasis" aria-hidden="true">#</a> inlineEmphasis</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineEmphasis</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlineescapesequence" tabindex="-1"><a class="header-anchor" href="#inlineescapesequence" aria-hidden="true">#</a> inlineEscapeSequence</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineEscapeSequence</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlineimage" tabindex="-1"><a class="header-anchor" href="#inlineimage" aria-hidden="true">#</a> inlineImage</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineImage</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlinelink" tabindex="-1"><a class="header-anchor" href="#inlinelink" aria-hidden="true">#</a> inlineLink</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineLink</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlinemarkup" tabindex="-1"><a class="header-anchor" href="#inlinemarkup" aria-hidden="true">#</a> inlineMarkup</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineMarkup</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlinespecialcharacter" tabindex="-1"><a class="header-anchor" href="#inlinespecialcharacter" aria-hidden="true">#</a> inlineSpecialCharacter</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineSpecialCharacter</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlinestrikethrough" tabindex="-1"><a class="header-anchor" href="#inlinestrikethrough" aria-hidden="true">#</a> inlineStrikethrough</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineStrikethrough</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlineurl" tabindex="-1"><a class="header-anchor" href="#inlineurl" aria-hidden="true">#</a> inlineUrl</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineUrl</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="inlineurltag" tabindex="-1"><a class="header-anchor" href="#inlineurltag" aria-hidden="true">#</a> inlineUrlTag</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">inlineUrlTag</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$excerpt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$excerpt</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="unmarkedtext" tabindex="-1"><a class="header-anchor" href="#unmarkedtext" aria-hidden="true">#</a> unmarkedText</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">unmarkedText</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$text</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$text</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> element</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">element</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$element</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$element</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="elements" tabindex="-1"><a class="header-anchor" href="#elements" aria-hidden="true">#</a> elements</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">elements</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$elements</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$elements</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="li" tabindex="-1"><a class="header-anchor" href="#li" aria-hidden="true">#</a> li</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">li</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$lines</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$lines</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="sanitiseelement" tabindex="-1"><a class="header-anchor" href="#sanitiseelement" aria-hidden="true">#</a> sanitiseElement</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">sanitiseElement</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$element</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$element</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="filterunsafeurlinattribute" tabindex="-1"><a class="header-anchor" href="#filterunsafeurlinattribute" aria-hidden="true">#</a> filterUnsafeUrlInAttribute</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">filterUnsafeUrlInAttribute</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$element</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$attribute</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$element</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$attribute</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="escape" tabindex="-1"><a class="header-anchor" href="#escape" aria-hidden="true">#</a> escape</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token function">escape</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$text</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$allow_quotes</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$text</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$allow_quotes</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="striatstart" tabindex="-1"><a class="header-anchor" href="#striatstart" aria-hidden="true">#</a> striAtStart</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token function">striAtStart</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$string</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$needle</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$string</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$needle</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance" aria-hidden="true">#</a> instance</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">instance</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token comment">#039;default&amp;#039;): self</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Parameters:</strong></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$name</code></td>
<td><strong>mixed</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


