<template><div><hr>
<h1 id="keyring" tabindex="-1"><a class="header-anchor" href="#keyring" aria-hidden="true">#</a> KeyRing</h1>
<p>Class KeyRing</p>
<p>A collection of cryptographic keys.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Crypt\KeyRing</code></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> keys</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>KeyCollection</span> <span class="token variable">$keys</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<p>KeyRing constructor.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$type</span> <span class="token operator">=</span> <span class="token class-name static-context">KeyInterface</span><span class="token operator">::</span><span class="token constant">GPG_TYPE_PUBLIC</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td>The type of keys in the keyring.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h3>
<p>Create a new public keyring.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">public</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Return Value:</strong></p>
<p>The new public keyring.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="secret" tabindex="-1"><a class="header-anchor" href="#secret" aria-hidden="true">#</a> secret</h3>
<p>Create a new secret keyring.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">secret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Return Value:</strong></p>
<p>The new secret keyring.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="type-1" tabindex="-1"><a class="header-anchor" href="#type-1" aria-hidden="true">#</a> type</h3>
<p>Get the type of keys in the keyring.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The type of keys in the keyring.</p>
<hr>
<h3 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> count</h3>
<p>Get the number of keys in the keyring.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The number of keys in the keyring.</p>
<hr>
<h3 id="isempty" tabindex="-1"><a class="header-anchor" href="#isempty" aria-hidden="true">#</a> isEmpty</h3>
<p>Check if the keyring is empty.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>True if the keyring is empty, false otherwise.</p>
<hr>
<h3 id="all" tabindex="-1"><a class="header-anchor" href="#all" aria-hidden="true">#</a> all</h3>
<p>Get all keys in the keyring.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>KeyCollection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The collection of keys in the keyring.</p>
<hr>
<h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h3>
<p>Add a key to the keyring.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>KeyInterface</span> <span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td>The key to add.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3>
<p>Get a key from the keyring by its ID.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>KeyInterface</span>
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
<td><code v-pre>$id</code></td>
<td><strong>string</strong></td>
<td>The ID of the key.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The key with the given ID.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="has" tabindex="-1"><a class="header-anchor" href="#has" aria-hidden="true">#</a> has</h3>
<p>Check if the keyring contains a specific key.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">has</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>KeyInterface</span> <span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td>The key to check for.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True if the keyring contains the key, false otherwise.</p>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


