<template><div><hr>
<h1 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h1>
<p>Class Question</p>
<p>A utility class for handling user input through the terminal.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Input\Question</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="ask" tabindex="-1"><a class="header-anchor" href="#ask" aria-hidden="true">#</a> ask</h3>
<p>Ask a question and get the user's input.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">ask</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$default</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$autoComplete</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$decorated</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td>The message to display as the question.</td>
</tr>
<tr>
<td><code v-pre>$default</code></td>
<td><strong>string|null</strong></td>
<td>The default value for the input (optional).</td>
</tr>
<tr>
<td><code v-pre>$autoComplete</code></td>
<td><strong>array</strong></td>
<td>An array of values for autocompletion (optional).</td>
</tr>
<tr>
<td><code v-pre>$decorated</code></td>
<td><strong>bool</strong></td>
<td>Whether to use decorated output (default is true).</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The user's input or null if no input is provided.</p>
<hr>
<h3 id="confirm" tabindex="-1"><a class="header-anchor" href="#confirm" aria-hidden="true">#</a> confirm</h3>
<p>Confirm a question with a yes or no answer.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$default</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$decorated</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td>The message to display as the confirmation question.</td>
</tr>
<tr>
<td><code v-pre>$default</code></td>
<td><strong>bool</strong></td>
<td>The default answer (true for yes, false for no, default is true).</td>
</tr>
<tr>
<td><code v-pre>$decorated</code></td>
<td><strong>bool</strong></td>
<td>Whether to use decorated output (default is true).</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The user's confirmation (true for yes, false for no).</p>
<hr>
<h3 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> hidden</h3>
<p>Get hidden input from the user.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">hidden</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$decorated</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td>The message to display as the hidden input prompt.</td>
</tr>
<tr>
<td><code v-pre>$decorated</code></td>
<td><strong>bool</strong></td>
<td>Whether to use decorated output (default is true).</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The hidden input or null if no input is provided.</p>
<hr>
<h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h3>
<p>Present a selection question to the user.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$options</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$allowMultiple</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">int</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$columns</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">int</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$maxWidth</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
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
<td>The message to display as the selection question.</td>
</tr>
<tr>
<td><code v-pre>$options</code></td>
<td><strong>array</strong></td>
<td>The available options for selection.</td>
</tr>
<tr>
<td><code v-pre>$allowMultiple</code></td>
<td><strong>bool</strong></td>
<td>Whether to allow multiple selections (default is true).</td>
</tr>
<tr>
<td><code v-pre>$columns</code></td>
<td><strong>int|null</strong></td>
<td>The number of columns to use for displaying options (optional).</td>
</tr>
<tr>
<td><code v-pre>$maxWidth</code></td>
<td><strong>int|null</strong></td>
<td>The maximum width for displaying options (optional).</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The selected options.</p>
<hr>
<h3 id="getautocompleteoptions" tabindex="-1"><a class="header-anchor" href="#getautocompleteoptions" aria-hidden="true">#</a> getAutocompleteOptions</h3>
<p>Get autocomplete options with formatting for default value.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token function">getAutocompleteOptions</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$autocomplete</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$default</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$autocomplete</code></td>
<td><strong>array</strong></td>
<td>An array of values for autocompletion.</td>
</tr>
<tr>
<td><code v-pre>$default</code></td>
<td><strong>string</strong></td>
<td>The default value to highlight.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>Formatted autocomplete options string.</p>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


