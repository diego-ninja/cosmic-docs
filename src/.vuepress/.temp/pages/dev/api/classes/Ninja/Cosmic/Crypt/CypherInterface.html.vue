<template><div><hr>
<h1 id="cypherinterface" tabindex="-1"><a class="header-anchor" href="#cypherinterface" aria-hidden="true">#</a> CypherInterface</h1>
<p>Interface CypherInterface</p>
<p>Provides methods for encryption and decryption.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Crypt\CypherInterface</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="encrypt" tabindex="-1"><a class="header-anchor" href="#encrypt" aria-hidden="true">#</a> encrypt</h3>
<p>Encrypts the given data.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$data</code></td>
<td><strong>string</strong></td>
<td>The data to be encrypted.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The encrypted data.</p>
<hr>
<h3 id="decrypt" tabindex="-1"><a class="header-anchor" href="#decrypt" aria-hidden="true">#</a> decrypt</h3>
<p>Decrypts the given data.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$data</code></td>
<td><strong>string</strong></td>
<td>The data to be decrypted.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The decrypted data.</p>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


