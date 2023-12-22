<template><div><hr>
<h1 id="tablecolumn" tabindex="-1"><a class="header-anchor" href="#tablecolumn" aria-hidden="true">#</a> TableColumn</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Table\Column\TableColumn</code></li>
<li>This class implements:
<RouterLink to="/dev/api/classes/Ninja/Cosmic/Terminal/Table/Column/TableColumnInterface.html"><code v-pre>\Ninja\Cosmic\Terminal\Table\Column\TableColumnInterface</code></RouterLink></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="manipulators" tabindex="-1"><a class="header-anchor" href="#manipulators" aria-hidden="true">#</a> manipulators</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Table<span class="token punctuation">\</span>Manipulator<span class="token punctuation">\</span>ManipulatorCollection</span> <span class="token variable">$manipulators</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$key</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$color</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$key</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$color</span> <span class="token operator">=</span> <span class="token class-name static-context">TableConfig</span><span class="token operator">::</span><span class="token constant">DEFAULT_FIELD_COLOR</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$key</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$color</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$key</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$color</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$name</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$key</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$color</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getname" tabindex="-1"><a class="header-anchor" href="#getname" aria-hidden="true">#</a> getName</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getkey" tabindex="-1"><a class="header-anchor" href="#getkey" aria-hidden="true">#</a> getKey</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcolor" tabindex="-1"><a class="header-anchor" href="#getcolor" aria-hidden="true">#</a> getColor</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getmanipulators" tabindex="-1"><a class="header-anchor" href="#getmanipulators" aria-hidden="true">#</a> getManipulators</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getManipulators</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Table<span class="token punctuation">\</span>Manipulator<span class="token punctuation">\</span>ManipulatorCollection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="addmanipulator" tabindex="-1"><a class="header-anchor" href="#addmanipulator" aria-hidden="true">#</a> addManipulator</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">addManipulator</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Table<span class="token punctuation">\</span>Manipulator<span class="token punctuation">\</span>TableManipulatorInterface</span> <span class="token variable">$manipulator</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$manipulator</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Table\Manipulator\TableManipulatorInterface</strong></td>
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


