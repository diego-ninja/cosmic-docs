<template><div><hr>
<h1 id="asset" tabindex="-1"><a class="header-anchor" href="#asset" aria-hidden="true">#</a> Asset</h1>
<p>Class Asset</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Application\Publisher\Asset\Asset</code></li>
</ul>
<h2 id="constants" tabindex="-1"><a class="header-anchor" href="#constants" aria-hidden="true">#</a> Constants</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Constant</th>
<th style="text-align:left">Visibility</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>STATE_UPLOADED</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'uploaded'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>STATE_VERIFIED</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'verified'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>STATE_PUBLISHED</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'published'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>STATE_UNSIGNED</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'unsigned'</td>
</tr>
</tbody>
</table>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$state</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="createdat" tabindex="-1"><a class="header-anchor" href="#createdat" aria-hidden="true">#</a> createdAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$createdAt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="updatedat" tabindex="-1"><a class="header-anchor" href="#updatedat" aria-hidden="true">#</a> updatedAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$updatedAt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token keyword type-hint">int</span> <span class="token variable">$size</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> signature</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Asset<span class="token punctuation">\</span>Signature</span> <span class="token variable">$signature</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="contenttype" tabindex="-1"><a class="header-anchor" href="#contenttype" aria-hidden="true">#</a> contentType</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$contentType</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$path</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$url</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$path</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$url</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$path</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$url</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isverified" tabindex="-1"><a class="header-anchor" href="#isverified" aria-hidden="true">#</a> isVerified</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isVerified</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="setcreatedat" tabindex="-1"><a class="header-anchor" href="#setcreatedat" aria-hidden="true">#</a> setCreatedAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setCreatedAt</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$createdAt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$createdAt</code></td>
<td><strong>\Carbon\CarbonImmutable</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="setupdatedat" tabindex="-1"><a class="header-anchor" href="#setupdatedat" aria-hidden="true">#</a> setUpdatedAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setUpdatedAt</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$updatedAt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$updatedAt</code></td>
<td><strong>\Carbon\CarbonImmutable</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="fromarray" tabindex="-1"><a class="header-anchor" href="#fromarray" aria-hidden="true">#</a> fromArray</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromArray</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<hr>
<h3 id="setcontenttype" tabindex="-1"><a class="header-anchor" href="#setcontenttype" aria-hidden="true">#</a> setContentType</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$contentType</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$contentType</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="setsize" tabindex="-1"><a class="header-anchor" href="#setsize" aria-hidden="true">#</a> setSize</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setSize</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$size</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$size</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="setstate" tabindex="-1"><a class="header-anchor" href="#setstate" aria-hidden="true">#</a> setState</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$state</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$state</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getcreatedat" tabindex="-1"><a class="header-anchor" href="#getcreatedat" aria-hidden="true">#</a> getCreatedAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getCreatedAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getupdatedat" tabindex="-1"><a class="header-anchor" href="#getupdatedat" aria-hidden="true">#</a> getUpdatedAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getUpdatedAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getstate" tabindex="-1"><a class="header-anchor" href="#getstate" aria-hidden="true">#</a> getState</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getsize" tabindex="-1"><a class="header-anchor" href="#getsize" aria-hidden="true">#</a> getSize</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcontenttype" tabindex="-1"><a class="header-anchor" href="#getcontenttype" aria-hidden="true">#</a> getContentType</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getContentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="fromjson" tabindex="-1"><a class="header-anchor" href="#fromjson" aria-hidden="true">#</a> fromJson</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromJson</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$json</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<li><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></li>
</ul>
<hr>
<h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> __toString</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="setsignature" tabindex="-1"><a class="header-anchor" href="#setsignature" aria-hidden="true">#</a> setSignature</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setSignature</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Asset<span class="token punctuation">\</span>Signature</span> <span class="token variable">$signature</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$signature</code></td>
<td><strong>\Ninja\Cosmic\Application\Publisher\Asset\Signature</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getsignature" tabindex="-1"><a class="header-anchor" href="#getsignature" aria-hidden="true">#</a> getSignature</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Asset<span class="token punctuation">\</span>Signature</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


