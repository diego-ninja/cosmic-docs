<template><div><hr>
<h1 id="abstractkey" tabindex="-1"><a class="header-anchor" href="#abstractkey" aria-hidden="true">#</a> AbstractKey</h1>
<p>Class AbstractKey</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Crypt\AbstractKey</code></li>
<li>This class implements:
<RouterLink to="/dev/api/classes/Ninja/Cosmic/Crypt/KeyInterface.html"><code v-pre>\Ninja\Cosmic\Crypt\KeyInterface</code></RouterLink>, <RouterLink to="/dev/api/classes/Ninja/Cosmic/Serializer/SerializableInterface.html"><code v-pre>\Ninja\Cosmic\Serializer\SerializableInterface</code></RouterLink>, <RouterLink to="/dev/api/classes/Ninja/Cosmic/Terminal/Table/TableableInterface.html"><code v-pre>\Ninja\Cosmic\Terminal\Table\TableableInterface</code></RouterLink></li>
<li>This class is an <strong>Abstract class</strong></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="subkeys" tabindex="-1"><a class="header-anchor" href="#subkeys" aria-hidden="true">#</a> subKeys</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>KeyCollection</span> <span class="token variable">$subKeys</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="method" tabindex="-1"><a class="header-anchor" href="#method" aria-hidden="true">#</a> method</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$method</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$usage</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="createdat" tabindex="-1"><a class="header-anchor" href="#createdat" aria-hidden="true">#</a> createdAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$createdAt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="expiresat" tabindex="-1"><a class="header-anchor" href="#expiresat" aria-hidden="true">#</a> expiresAt</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$expiresAt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="uid" tabindex="-1"><a class="header-anchor" href="#uid" aria-hidden="true">#</a> uid</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>Uid</span> <span class="token variable">$uid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="fingerprint" tabindex="-1"><a class="header-anchor" href="#fingerprint" aria-hidden="true">#</a> fingerprint</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$fingerprint</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<p>AbstractKey constructor.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$usage</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span> <span class="token variable">$createdAt</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>CarbonImmutable</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$expiresAt</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>Uid</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$uid</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$fingerprint</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td></td>
</tr>
<tr>
<td><code v-pre>$method</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$usage</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$createdAt</code></td>
<td><strong>\Carbon\CarbonImmutable</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$expiresAt</code></td>
<td><strong>\Carbon\CarbonImmutable|null</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$uid</code></td>
<td><strong>\Ninja\Cosmic\Crypt\Uid|null</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$fingerprint</code></td>
<td><strong>string|null</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isableto" tabindex="-1"><a class="header-anchor" href="#isableto" aria-hidden="true">#</a> isAbleTo</h3>
<p>Check if the key is able to perform a specific usage.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isAbleTo</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$usage</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$usage</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> __toString</h3>
<p>Get a string representation of the key.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="fromarray" tabindex="-1"><a class="header-anchor" href="#fromarray" aria-hidden="true">#</a> fromArray</h3>
<p>Create an instance of AbstractKey from an array of data.</p>
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
<hr>
<h3 id="fromstring" tabindex="-1"><a class="header-anchor" href="#fromstring" aria-hidden="true">#</a> fromString</h3>
<p>Create an instance of AbstractKey from a string.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromString</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">static</span>
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
<td><code v-pre>$string</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="addsubkey" tabindex="-1"><a class="header-anchor" href="#addsubkey" aria-hidden="true">#</a> addSubKey</h3>
<p>Add a sub key to the key.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">addSubKey</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>KeyInterface</span> <span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$key</code></td>
<td><strong>\Ninja\Cosmic\Crypt\KeyInterface</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isabletosign" tabindex="-1"><a class="header-anchor" href="#isabletosign" aria-hidden="true">#</a> isAbleToSign</h3>
<p>Check if the key is able to sign.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isAbleToSign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getsignaturefilepath" tabindex="-1"><a class="header-anchor" href="#getsignaturefilepath" aria-hidden="true">#</a> getSignatureFilePath</h3>
<p>Get the signature file path for a given file path.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getSignatureFilePath</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$file_path</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$file_path</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3>
<p>Render the key information to the output.</p>
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
<h3 id="gettabletitle" tabindex="-1"><a class="header-anchor" href="#gettabletitle" aria-hidden="true">#</a> getTableTitle</h3>
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


