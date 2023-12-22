<template><div><hr>
<h1 id="columnawareinterface" tabindex="-1"><a class="header-anchor" href="#columnawareinterface" aria-hidden="true">#</a> ColumnAwareInterface</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Input\Select\Input\ColumnAwareInterface</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="hasentryat" tabindex="-1"><a class="header-anchor" href="#hasentryat" aria-hidden="true">#</a> hasEntryAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">hasEntryAt</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$row</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$column</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$row</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$column</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getentryat" tabindex="-1"><a class="header-anchor" href="#getentryat" aria-hidden="true">#</a> getEntryAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getEntryAt</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$row</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$column</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$row</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$column</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getcolumns" tabindex="-1"><a class="header-anchor" href="#getcolumns" aria-hidden="true">#</a> getColumns</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token keyword type-hint">int</span> <span class="token variable">$columnSize</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
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
<td><strong>?int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getcolumncount" tabindex="-1"><a class="header-anchor" href="#getcolumncount" aria-hidden="true">#</a> getColumnCount</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColumnCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


