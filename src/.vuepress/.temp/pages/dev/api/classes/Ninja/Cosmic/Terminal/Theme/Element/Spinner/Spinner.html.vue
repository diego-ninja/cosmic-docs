<template><div><hr>
<h1 id="spinner" tabindex="-1"><a class="header-anchor" href="#spinner" aria-hidden="true">#</a> Spinner</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Theme\Element\Spinner\Spinner</code></li>
<li>Parent class: <RouterLink to="/dev/api/classes/Ninja/Cosmic/Terminal/Theme/Element/AbstractThemeElement.html"><code v-pre>\Ninja\Cosmic\Terminal\Theme\Element\AbstractThemeElement</code></RouterLink></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="frames" tabindex="-1"><a class="header-anchor" href="#frames" aria-hidden="true">#</a> frames</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$frames</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="interval" tabindex="-1"><a class="header-anchor" href="#interval" aria-hidden="true">#</a> interval</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">int</span> <span class="token variable">$interval</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$frames</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$interval</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$name</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$frames</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$interval</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="fromarray" tabindex="-1"><a class="header-anchor" href="#fromarray" aria-hidden="true">#</a> fromArray</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromArray</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Spinner<span class="token punctuation">\</span>Spinner</span>
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
<td><code v-pre>$input</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="inherited-methods" tabindex="-1"><a class="header-anchor" href="#inherited-methods" aria-hidden="true">#</a> Inherited methods</h2>
<h3 id="tojson" tabindex="-1"><a class="header-anchor" href="#tojson" aria-hidden="true">#</a> toJson</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></li>
</ul>
<hr>
<h3 id="toarray" tabindex="-1"><a class="header-anchor" href="#toarray" aria-hidden="true">#</a> toArray</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="jsonserialize" tabindex="-1"><a class="header-anchor" href="#jsonserialize" aria-hidden="true">#</a> jsonSerialize</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">jsonSerialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


