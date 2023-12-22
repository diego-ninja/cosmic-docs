<template><div><hr>
<h1 id="deserializabletrait" tabindex="-1"><a class="header-anchor" href="#deserializabletrait" aria-hidden="true">#</a> DeserializableTrait</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Serializer\DeserializableTrait</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="fromarray" tabindex="-1"><a class="header-anchor" href="#fromarray" aria-hidden="true">#</a> fromArray</h3>
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
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/UnexpectedValueException.html"><code v-pre>UnexpectedValueException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="fromjson" tabindex="-1"><a class="header-anchor" href="#fromjson" aria-hidden="true">#</a> fromJson</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromJson</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$json</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">static</span>
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
<td><code v-pre>$json</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/UnexpectedValueException.html"><code v-pre>UnexpectedValueException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="getpropertytype" tabindex="-1"><a class="header-anchor" href="#getpropertytype" aria-hidden="true">#</a> getPropertyType</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">getPropertyType</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$property</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$classname</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
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
<td><code v-pre>$property</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$classname</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/UnexpectedValueException.html"><code v-pre>UnexpectedValueException</code></RouterLink></li>
</ul>
<hr>
<h3 id="ispropertynullable" tabindex="-1"><a class="header-anchor" href="#ispropertynullable" aria-hidden="true">#</a> isPropertyNullable</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">isPropertyNullable</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$property</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$classname</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$property</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$classname</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/UnexpectedValueException.html"><code v-pre>UnexpectedValueException</code></RouterLink></li>
</ul>
<hr>
<h3 id="hasmethod" tabindex="-1"><a class="header-anchor" href="#hasmethod" aria-hidden="true">#</a> hasMethod</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">hasMethod</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<h3 id="isdatetime" tabindex="-1"><a class="header-anchor" href="#isdatetime" aria-hidden="true">#</a> isDateTime</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">isDateTime</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$class</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$class</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getnormalizedvalue" tabindex="-1"><a class="header-anchor" href="#getnormalizedvalue" aria-hidden="true">#</a> getNormalizedValue</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">getNormalizedValue</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$type</span><span class="token punctuation">,</span> <span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<tr>
<td><code v-pre>$value</code></td>
<td><strong>mixed</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getdatetimeobject" tabindex="-1"><a class="header-anchor" href="#getdatetimeobject" aria-hidden="true">#</a> getDateTimeObject</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">getDateTimeObject</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$type</span><span class="token punctuation">,</span> <span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>DateTimeInterface</span>
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
<tr>
<td><code v-pre>$value</code></td>
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


