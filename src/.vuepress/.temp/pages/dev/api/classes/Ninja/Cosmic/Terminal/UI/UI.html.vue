<template><div><hr>
<h1 id="ui" tabindex="-1"><a class="header-anchor" href="#ui" aria-hidden="true">#</a> UI</h1>
<p>Class UI</p>
<p>A utility class for building and rendering various UI elements in the terminal.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\UI\UI</code></li>
</ul>
<h2 id="constants" tabindex="-1"><a class="header-anchor" href="#constants" aria-hidden="true">#</a> Constants</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Constant</th>
<th style="text-align:left">Visibility</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>DEFAULT_OUTPUT_WIDTH</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">80</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEFAULT_HEADER_BACKGROUND_COLOR</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'default'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEFAULT_RULE_COLOR</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'white'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEFAULT_LIST_TYPE</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">\Ninja\Cosmic\Terminal\UI\Element\UnorderedList::TYPE</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEFAULT_LIST_ITEM_COLOR</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'white'</td>
</tr>
</tbody>
</table>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> header</h3>
<p>Display a header in the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">header</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$backgroundColor</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_HEADER_BACKGROUND_COLOR</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$width</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_OUTPUT_WIDTH</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$message</code></td>
<td><strong>string</strong></td>
<td>The header message.</td>
</tr>
<tr>
<td><code v-pre>$backgroundColor</code></td>
<td><strong>string</strong></td>
<td>The background color of the header (default is 'default').</td>
</tr>
<tr>
<td><code v-pre>$width</code></td>
<td><strong>int</strong></td>
<td>The width of the header (default is 80).</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3>
<p>Display a list in the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">list</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$items</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$itemColor</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_LIST_ITEM_COLOR</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$type</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_LIST_TYPE</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$items</code></td>
<td><strong>array</strong></td>
<td>The list items.</td>
</tr>
<tr>
<td><code v-pre>$itemColor</code></td>
<td><strong>string</strong></td>
<td>The color of the list items (default is 'white').</td>
</tr>
<tr>
<td><code v-pre>$type</code></td>
<td><strong>string</strong></td>
<td>The type of the list (default is UnorderedList::TYPE).</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> table</h3>
<p>Display a table in the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">table</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$header</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$header</code></td>
<td><strong>array</strong></td>
<td>The table header.</td>
</tr>
<tr>
<td><code v-pre>$data</code></td>
<td><strong>array</strong></td>
<td>The table data.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary</h3>
<p>Display a summary in the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">summary</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$width</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_OUTPUT_WIDTH</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$data</code></td>
<td><strong>array</strong></td>
<td>The summary data.</td>
</tr>
<tr>
<td><code v-pre>$width</code></td>
<td><strong>int</strong></td>
<td>The width of the summary (default is 80).</td>
</tr>
<tr>
<td><code v-pre>$title</code></td>
<td><strong>string|null</strong></td>
<td>The title of the summary (optional).</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="p" tabindex="-1"><a class="header-anchor" href="#p" aria-hidden="true">#</a> p</h3>
<p>Display a paragraph in the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">p</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$width</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_OUTPUT_WIDTH</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$message</code></td>
<td><strong>string</strong></td>
<td>The paragraph message.</td>
</tr>
<tr>
<td><code v-pre>$width</code></td>
<td><strong>int</strong></td>
<td>The width of the paragraph (default is 80).</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="rule" tabindex="-1"><a class="header-anchor" href="#rule" aria-hidden="true">#</a> rule</h3>
<p>Display a rule in the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">rule</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$width</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_OUTPUT_WIDTH</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$color</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_RULE_COLOR</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$width</code></td>
<td><strong>int</strong></td>
<td>The width of the rule (default is 80).</td>
</tr>
<tr>
<td><code v-pre>$color</code></td>
<td><strong>string</strong></td>
<td>The color of the rule (default is 'white').</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<p>Display a title in the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">title</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$subtitle</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$width</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_OUTPUT_WIDTH</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$message</code></td>
<td><strong>string</strong></td>
<td>The title message.</td>
</tr>
<tr>
<td><code v-pre>$subtitle</code></td>
<td><strong>string|null</strong></td>
<td>The subtitle (optional).</td>
</tr>
<tr>
<td><code v-pre>$width</code></td>
<td><strong>int</strong></td>
<td>The width of the title (default is 80).</td>
</tr>
</tbody>
</table>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


