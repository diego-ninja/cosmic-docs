<template><div><hr>
<h1 id="keycollection" tabindex="-1"><a class="header-anchor" href="#keycollection" aria-hidden="true">#</a> KeyCollection</h1>
<p>Class KeyCollection</p>
<p>A collection of AbstractKey objects.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Crypt\KeyCollection</code></li>
<li>Parent class: <RouterLink to="/dev/api/classes/Ramsey/Collection/AbstractCollection.html"><code v-pre>AbstractCollection</code></RouterLink></li>
<li>This class implements:
<RouterLink to="/dev/api/classes/Ninja/Cosmic/Serializer/SerializableInterface.html"><code v-pre>\Ninja\Cosmic\Serializer\SerializableInterface</code></RouterLink></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="gettype" tabindex="-1"><a class="header-anchor" href="#gettype" aria-hidden="true">#</a> getType</h3>
<p>Get the type of elements in the collection.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The type of elements in the collection.</p>
<hr>
<h3 id="getbyid" tabindex="-1"><a class="header-anchor" href="#getbyid" aria-hidden="true">#</a> getById</h3>
<p>Get an AbstractKey object by its ID.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>AbstractKey</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td>The ID of the AbstractKey object.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The AbstractKey object if found, null otherwise.</p>
<p><strong>Throws:</strong></p>
<p>If an error occurs.</p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="getbyemail" tabindex="-1"><a class="header-anchor" href="#getbyemail" aria-hidden="true">#</a> getByEmail</h3>
<p>Get an AbstractKey object(s) by the associated email.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getByEmail</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$email</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span><span class="token operator">|</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>AbstractKey</span>
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
<td><code v-pre>$email</code></td>
<td><strong>string</strong></td>
<td>The email associated with the AbstractKey object(s).</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The AbstractKey object(s) if found.</p>
<p><strong>Throws:</strong></p>
<p>If an error occurs.</p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="tojson" tabindex="-1"><a class="header-anchor" href="#tojson" aria-hidden="true">#</a> toJson</h3>
<p>Convert the collection to a JSON string.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The JSON string representation of the collection.</p>
<p><strong>Throws:</strong></p>
<p>If an error occurs during JSON encoding.</p>
<ul>
<li><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></li>
</ul>
<hr>
<h3 id="jsonserialize" tabindex="-1"><a class="header-anchor" href="#jsonserialize" aria-hidden="true">#</a> jsonSerialize</h3>
<p>Specify data which should be serialized to JSON.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">jsonSerialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The data to be serialized to JSON.</p>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


