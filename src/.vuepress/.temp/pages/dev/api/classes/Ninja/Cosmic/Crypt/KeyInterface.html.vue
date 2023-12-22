<template><div><hr>
<h1 id="keyinterface" tabindex="-1"><a class="header-anchor" href="#keyinterface" aria-hidden="true">#</a> KeyInterface</h1>
<p>Interface KeyInterface</p>
<p>Provides methods for handling cryptographic keys.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Crypt\KeyInterface</code></li>
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
<td style="text-align:left"><code v-pre>GPG_TYPE_PUBLIC</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'pub'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_TYPE_SECRET</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'sec'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_TYPE_SUB</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'sub'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_TYPE_SS</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'ssb'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_PUB_REGEX_PATTERN</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'/(?P&lt;cypher&gt;\w+)\/(?P&lt;key_id&gt;\w+)\s(?P&lt;created_at&gt;\d{4}-\d{2}-\d{2})\s\<a href="?:%5Cs%5C%5Bexpires:%5Cs(?P%3Cexpires_at%3E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7D)%5C%5D">(?P&lt;usage&gt;\w+)\</a>?/'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_UID_REGEX_PATTERN</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'/^uid\s+\[\s*(?P&lt;trustLevel&gt;.<em>?)\]\s</em>(?P&lt;name&gt;.<em>?)\s</em>&lt;(?P&lt;email&gt;.*?)&gt;$/'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_USAGE_SIGN</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'S'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_USAGE_ENCRYPT</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'E'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_USAGE_AUTH</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'A'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_USAGE_CERT</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'C'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_TRUST_LEVEL_UNKNOWN</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'unknown'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_TRUST_LEVEL_NEVER</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'never'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_TRUST_LEVEL_MARGINAL</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'marginal'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_TRUST_LEVEL_FULLY</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'fully'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GPG_TRUST_LEVEL_ULTIMATE</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'ultimate'</td>
</tr>
</tbody>
</table>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="isableto" tabindex="-1"><a class="header-anchor" href="#isableto" aria-hidden="true">#</a> isAbleTo</h3>
<p>Check if the key is able to perform a specific usage.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isAbleTo</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$usage</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$usage</code></td>
<td><strong>string</strong></td>
<td>The usage to check.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True if the key is able to perform the usage, false otherwise.</p>
<hr>
<h3 id="isabletosign" tabindex="-1"><a class="header-anchor" href="#isabletosign" aria-hidden="true">#</a> isAbleToSign</h3>
<p>Check if the key is able to sign.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isAbleToSign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>True if the key is able to sign, false otherwise.</p>
<hr>
<h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> __toString</h3>
<p>Get the string representation of the key.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The string representation of the key.</p>
<hr>
<h3 id="fromarray" tabindex="-1"><a class="header-anchor" href="#fromarray" aria-hidden="true">#</a> fromArray</h3>
<p>Create a new instance of the key from an array of data.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromArray</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">static</span>
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
<td>The data to create the key from.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The new instance of the key.</p>
<hr>
<h3 id="fromstring" tabindex="-1"><a class="header-anchor" href="#fromstring" aria-hidden="true">#</a> fromString</h3>
<p>Create a new instance of the key from a string.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromString</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">static</span>
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
<td>The string to create the key from.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The new instance of the key.</p>
<hr>
<h3 id="addsubkey" tabindex="-1"><a class="header-anchor" href="#addsubkey" aria-hidden="true">#</a> addSubKey</h3>
<p>Add a subkey to the key.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">addSubKey</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>KeyInterface</span> <span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$key</code></td>
<td><strong>\Ninja\Cosmic\Crypt\KeyInterface</strong></td>
<td>The subkey to add.</td>
</tr>
</tbody>
</table>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


