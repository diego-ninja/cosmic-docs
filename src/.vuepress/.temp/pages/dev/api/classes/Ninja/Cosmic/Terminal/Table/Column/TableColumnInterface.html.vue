<template><div><hr>
<h1 id="tablecolumninterface" tabindex="-1"><a class="header-anchor" href="#tablecolumninterface" aria-hidden="true">#</a> TableColumnInterface</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Table\Column\TableColumnInterface</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="getname" tabindex="-1"><a class="header-anchor" href="#getname" aria-hidden="true">#</a> getName</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getkey" tabindex="-1"><a class="header-anchor" href="#getkey" aria-hidden="true">#</a> getKey</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<h3 id="getcolor" tabindex="-1"><a class="header-anchor" href="#getcolor" aria-hidden="true">#</a> getColor</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


