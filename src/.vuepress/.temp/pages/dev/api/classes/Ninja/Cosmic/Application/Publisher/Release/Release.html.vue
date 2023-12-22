<template><div><hr>
<h1 id="release" tabindex="-1"><a class="header-anchor" href="#release" aria-hidden="true">#</a> Release</h1>
<p>Class Release</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Application\Publisher\Release\Release</code></li>
<li>This class is marked as <strong>final</strong> and can't be subclassed</li>
<li>This class implements:
<RouterLink to="/dev/api/classes/Ninja/Cosmic/Terminal/Table/TableableInterface.html"><code v-pre>\Ninja\Cosmic\Terminal\Table\TableableInterface</code></RouterLink>, <RouterLink to="/dev/api/classes/Ninja/Cosmic/Serializer/SerializableInterface.html"><code v-pre>\Ninja\Cosmic\Serializer\SerializableInterface</code></RouterLink></li>
<li>This class is a <strong>Final class</strong></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> assets</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Asset<span class="token punctuation">\</span>AssetCollection</span> <span class="token variable">$assets</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="createdat" tabindex="-1"><a class="header-anchor" href="#createdat" aria-hidden="true">#</a> createdAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$createdAt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="publishedat" tabindex="-1"><a class="header-anchor" href="#publishedat" aria-hidden="true">#</a> publishedAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$publishedAt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="tagname" tabindex="-1"><a class="header-anchor" href="#tagname" aria-hidden="true">#</a> tagName</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$tagName</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$description</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$url</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="isdraft" tabindex="-1"><a class="header-anchor" href="#isdraft" aria-hidden="true">#</a> isDraft</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$isDraft</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="isprerelease" tabindex="-1"><a class="header-anchor" href="#isprerelease" aria-hidden="true">#</a> isPrerelease</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$isPrerelease</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<p>Release constructor.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$tagName</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$description</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$url</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$isDraft</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$isPrerelease</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$tagName</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$description</code></td>
<td><strong>string|null</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$url</code></td>
<td><strong>string|null</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$isDraft</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$isPrerelease</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="fromarray" tabindex="-1"><a class="header-anchor" href="#fromarray" aria-hidden="true">#</a> fromArray</h3>
<p>Create a Release instance from an array of data.</p>
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
<h3 id="fromjson" tabindex="-1"><a class="header-anchor" href="#fromjson" aria-hidden="true">#</a> fromJson</h3>
<p>Create a Release instance from a JSON string.</p>
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
<p>Get a string representation of the release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="gettabletitle" tabindex="-1"><a class="header-anchor" href="#gettabletitle" aria-hidden="true">#</a> getTableTitle</h3>
<p>Get the title for the table representation.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getTableTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcreatedat" tabindex="-1"><a class="header-anchor" href="#getcreatedat" aria-hidden="true">#</a> getCreatedAt</h3>
<p>Get the creation date of the release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getCreatedAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="setcreatedat" tabindex="-1"><a class="header-anchor" href="#setcreatedat" aria-hidden="true">#</a> setCreatedAt</h3>
<p>Set the creation date of the release.</p>
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
<h3 id="getpublishedat" tabindex="-1"><a class="header-anchor" href="#getpublishedat" aria-hidden="true">#</a> getPublishedAt</h3>
<p>Get the publication date of the release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getPublishedAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="setpublishedat" tabindex="-1"><a class="header-anchor" href="#setpublishedat" aria-hidden="true">#</a> setPublishedAt</h3>
<p>Set the publication date of the release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setPublishedAt</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$publishedAt</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$publishedAt</code></td>
<td><strong>\Carbon\CarbonImmutable</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getassets" tabindex="-1"><a class="header-anchor" href="#getassets" aria-hidden="true">#</a> getAssets</h3>
<p>Get the assets associated with the release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Asset<span class="token punctuation">\</span>AssetCollection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="addasset" tabindex="-1"><a class="header-anchor" href="#addasset" aria-hidden="true">#</a> addAsset</h3>
<p>Add an asset to the release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">addAsset</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Asset<span class="token punctuation">\</span>Asset</span> <span class="token variable">$asset</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$asset</code></td>
<td><strong>\Ninja\Cosmic\Application\Publisher\Asset\Asset</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="removeasset" tabindex="-1"><a class="header-anchor" href="#removeasset" aria-hidden="true">#</a> removeAsset</h3>
<p>Remove an asset from the release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">removeAsset</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Publisher<span class="token punctuation">\</span>Asset<span class="token punctuation">\</span>Asset</span> <span class="token variable">$asset</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$asset</code></td>
<td><strong>\Ninja\Cosmic\Application\Publisher\Asset\Asset</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isdraft-1" tabindex="-1"><a class="header-anchor" href="#isdraft-1" aria-hidden="true">#</a> isDraft</h3>
<p>Check if the release is in draft state.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isDraft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="isprerelease-1" tabindex="-1"><a class="header-anchor" href="#isprerelease-1" aria-hidden="true">#</a> isPrerelease</h3>
<p>Check if the release is a pre-release.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isPrerelease</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3>
<p>Render the release as a table.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>OutputInterface</span> <span class="token variable">$output</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$output</code></td>
<td><strong>\Symfony\Component\Console\Output\OutputInterface</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/MissingInterfaceException.html"><code v-pre>MissingInterfaceException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/UnexpectedValueException.html"><code v-pre>UnexpectedValueException</code></RouterLink></p>
</li>
</ul>
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
<h3 id="gettabledata" tabindex="-1"><a class="header-anchor" href="#gettabledata" aria-hidden="true">#</a> getTableData</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getTableData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/MissingInterfaceException.html"><code v-pre>MissingInterfaceException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/UnexpectedValueException.html"><code v-pre>UnexpectedValueException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="astable" tabindex="-1"><a class="header-anchor" href="#astable" aria-hidden="true">#</a> asTable</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">asTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Table<span class="token punctuation">\</span>Table</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/MissingInterfaceException.html"><code v-pre>MissingInterfaceException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/UnexpectedValueException.html"><code v-pre>UnexpectedValueException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="gettabletitle-1" tabindex="-1"><a class="header-anchor" href="#gettabletitle-1" aria-hidden="true">#</a> getTableTitle</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getTableTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="extractvalue" tabindex="-1"><a class="header-anchor" href="#extractvalue" aria-hidden="true">#</a> extractValue</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">extractValue</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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


