<template><div><hr>
<h1 id="gettersettertrait" tabindex="-1"><a class="header-anchor" href="#gettersettertrait" aria-hidden="true">#</a> GetterSetterTrait</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Serializer\GetterSetterTrait</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> __call</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__call</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$args</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$method</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$args</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></li>
</ul>
<hr>
<h3 id="issetter" tabindex="-1"><a class="header-anchor" href="#issetter" aria-hidden="true">#</a> isSetter</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">isSetter</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$method</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isgetter" tabindex="-1"><a class="header-anchor" href="#isgetter" aria-hidden="true">#</a> isGetter</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">isGetter</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$method</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getproperty" tabindex="-1"><a class="header-anchor" href="#getproperty" aria-hidden="true">#</a> getProperty</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$method</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isscalarorvalidobject" tabindex="-1"><a class="header-anchor" href="#isscalarorvalidobject" aria-hidden="true">#</a> isScalarOrValidObject</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">isScalarOrValidObject</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$property</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$object</code></td>
<td><strong>mixed</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$property</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></li>
</ul>
<hr>
<h3 id="isuninitialized" tabindex="-1"><a class="header-anchor" href="#isuninitialized" aria-hidden="true">#</a> isUninitialized</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">isUninitialized</span><span class="token punctuation">(</span><span class="token keyword type-hint">object</span> <span class="token variable">$object</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$object</code></td>
<td><strong>object</strong></td>
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


