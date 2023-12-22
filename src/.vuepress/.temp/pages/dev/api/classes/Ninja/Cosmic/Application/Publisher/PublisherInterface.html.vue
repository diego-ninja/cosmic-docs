<template><div><hr>
<h1 id="publisherinterface" tabindex="-1"><a class="header-anchor" href="#publisherinterface" aria-hidden="true">#</a> PublisherInterface</h1>
<p>Interface PublisherInterface</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Application\Publisher\PublisherInterface</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="publish" tabindex="-1"><a class="header-anchor" href="#publish" aria-hidden="true">#</a> publish</h3>
<p>Publish a release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">publish</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Release<span class="token punctuation">\</span>Release</span> <span class="token variable">$release</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Release<span class="token punctuation">\</span>Release</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td><code v-pre>$release</code></td>
<td><strong>\Ninja\Cosmic\Application\Publisher\Release\Release</strong></td>
<td>The release to be published.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The published release, or null if the operation fails.</p>
<hr>
<h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h3>
<p>Update a published release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Release<span class="token punctuation">\</span>Release</span> <span class="token variable">$release</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Release<span class="token punctuation">\</span>Release</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td><code v-pre>$release</code></td>
<td><strong>\Ninja\Cosmic\Application\Publisher\Release\Release</strong></td>
<td>The release to be updated.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The updated release, or null if the operation fails.</p>
<hr>
<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3>
<p>Get information about a specific release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$tag</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Release<span class="token punctuation">\</span>Release</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td><code v-pre>$tag</code></td>
<td><strong>string</strong></td>
<td>The tag of the release.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The release information, or null if the release is not found.</p>
<hr>
<h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h3>
<p>Delete a release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$tag</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$tag</code></td>
<td><strong>string</strong></td>
<td>The tag of the release to be deleted.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True if the release is successfully deleted, false otherwise.</p>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


