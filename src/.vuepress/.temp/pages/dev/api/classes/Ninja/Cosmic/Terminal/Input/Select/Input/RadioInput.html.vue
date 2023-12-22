<template><div><hr>
<h1 id="radioinput" tabindex="-1"><a class="header-anchor" href="#radioinput" aria-hidden="true">#</a> RadioInput</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Input\Select\Input\RadioInput</code></li>
<li>Parent class: <RouterLink to="/dev/api/classes/Ninja/Cosmic/Terminal/Input/Select/Input/AbstractSelect.html"><code v-pre>\Ninja\Cosmic\Terminal\Input\Select\Input\AbstractSelect</code></RouterLink></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$option</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$option</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="deselect" tabindex="-1"><a class="header-anchor" href="#deselect" aria-hidden="true">#</a> deselect</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">deselect</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$option</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$option</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="inherited-methods" tabindex="-1"><a class="header-anchor" href="#inherited-methods" aria-hidden="true">#</a> Inherited methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$options</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$defaultSelection</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$message</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$options</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$defaultSelection</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getmessage" tabindex="-1"><a class="header-anchor" href="#getmessage" aria-hidden="true">#</a> getMessage</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getoptions" tabindex="-1"><a class="header-anchor" href="#getoptions" aria-hidden="true">#</a> getOptions</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getselections" tabindex="-1"><a class="header-anchor" href="#getselections" aria-hidden="true">#</a> getSelections</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getSelections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="hasselections" tabindex="-1"><a class="header-anchor" href="#hasselections" aria-hidden="true">#</a> hasSelections</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">hasSelections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="isselected" tabindex="-1"><a class="header-anchor" href="#isselected" aria-hidden="true">#</a> isSelected</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isSelected</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$option</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$option</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="controlmode" tabindex="-1"><a class="header-anchor" href="#controlmode" aria-hidden="true">#</a> controlMode</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">controlMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcolumns" tabindex="-1"><a class="header-anchor" href="#getcolumns" aria-hidden="true">#</a> getColumns</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$columnSize</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span><span class="token keyword type-declaration">int</span><span class="token punctuation">,</span><span class="token keyword">list</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span><span class="token keyword type-declaration">string</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>
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
<td><code v-pre>$columnSize</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getcolumnat" tabindex="-1"><a class="header-anchor" href="#getcolumnat" aria-hidden="true">#</a> getColumnAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColumnAt</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$index</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
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
<td><code v-pre>$index</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getcolumncount" tabindex="-1"><a class="header-anchor" href="#getcolumncount" aria-hidden="true">#</a> getColumnCount</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColumnCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="hasentryat" tabindex="-1"><a class="header-anchor" href="#hasentryat" aria-hidden="true">#</a> hasEntryAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">hasEntryAt</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$rowIndex</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$colIndex</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$rowIndex</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$colIndex</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getentryat" tabindex="-1"><a class="header-anchor" href="#getentryat" aria-hidden="true">#</a> getEntryAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getEntryAt</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$rowIndex</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$colIndex</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$rowIndex</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$colIndex</code></td>
<td><strong>int</strong></td>
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


