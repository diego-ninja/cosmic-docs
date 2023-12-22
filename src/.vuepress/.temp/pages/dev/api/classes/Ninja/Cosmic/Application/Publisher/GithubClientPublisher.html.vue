<template><div><hr>
<h1 id="githubclientpublisher" tabindex="-1"><a class="header-anchor" href="#githubclientpublisher" aria-hidden="true">#</a> GithubClientPublisher</h1>
<p>Class GithubClientPublisher</p>
<p>Implementation of the PublisherInterface that uses the GitHub CLI to publish releases and assets.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Application\Publisher\GithubClientPublisher</code></li>
<li>This class implements:
<RouterLink to="/dev/api/classes/Ninja/Cosmic/Application/Publisher/PublisherInterface.html"><code v-pre>\Ninja\Cosmic\Application\Publisher\PublisherInterface</code></RouterLink></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="publish" tabindex="-1"><a class="header-anchor" href="#publish" aria-hidden="true">#</a> publish</h3>
<p>Publish a release on GitHub.</p>
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
<td>The release to publish.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The published release, or null if the operation fails.</p>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/BinaryNotFoundException.html"><code v-pre>BinaryNotFoundException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3>
<p>Get information about a release on GitHub.</p>
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
<p>The release information, or null if the operation fails.</p>
<p><strong>Throws:</strong></p>
<p>If the GitHub CLI binary is not found.</p>
<ul>
<li><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></li>
</ul>
<hr>
<h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h3>
<p>Update an existing release on GitHub.</p>
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
<td>The release to update.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The updated release, or null if the operation fails.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></li>
</ul>
<hr>
<h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h3>
<p>Delete a release on GitHub.</p>
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
<td>The tag of the release to delete.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True if the deletion is successful, false otherwise.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></li>
</ul>
<hr>
<h3 id="uploadasset" tabindex="-1"><a class="header-anchor" href="#uploadasset" aria-hidden="true">#</a> uploadAsset</h3>
<p>Upload an asset to a GitHub release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">uploadAsset</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Asset<span class="token punctuation">\</span>Asset</span> <span class="token variable">$asset</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$overwrite</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td>The name of the release.</td>
</tr>
<tr>
<td><code v-pre>$asset</code></td>
<td><strong>\Ninja\Cosmic\Application\Publisher\Asset\Asset</strong></td>
<td>The asset to upload.</td>
</tr>
<tr>
<td><code v-pre>$overwrite</code></td>
<td><strong>bool</strong></td>
<td>Whether to overwrite the asset if it already exists.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True if the upload is successful, false otherwise.</p>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


