<template><div><hr>
<h1 id="expressionparser" tabindex="-1"><a class="header-anchor" href="#expressionparser" aria-hidden="true">#</a> ExpressionParser</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Command\Parser\ExpressionParser</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="parse" tabindex="-1"><a class="header-anchor" href="#parse" aria-hidden="true">#</a> parse</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$expression</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
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
<td><code v-pre>$expression</code></td>
<td><strong>mixed</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isoption" tabindex="-1"><a class="header-anchor" href="#isoption" aria-hidden="true">#</a> isOption</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">isOption</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$token</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$token</code></td>
<td><strong>mixed</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="parseargument" tabindex="-1"><a class="header-anchor" href="#parseargument" aria-hidden="true">#</a> parseArgument</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">parseArgument</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$token</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>Argument</span>
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
<td><code v-pre>$token</code></td>
<td><strong>mixed</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="parseoption" tabindex="-1"><a class="header-anchor" href="#parseoption" aria-hidden="true">#</a> parseOption</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">parseOption</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$token</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>Option</span>
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
<td><code v-pre>$token</code></td>
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


