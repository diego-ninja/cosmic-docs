<template><div><hr>
<h1 id="signcommand" tabindex="-1"><a class="header-anchor" href="#signcommand" aria-hidden="true">#</a> SignCommand</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Command\SignCommand</code></li>
<li>Parent class: <RouterLink to="/dev/api/classes/Ninja/Cosmic/Command/CosmicCommand.html"><code v-pre>\Ninja\Cosmic\Command\CosmicCommand</code></RouterLink></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> __invoke</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__invoke</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$binary</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$keyId</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
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
<td><code v-pre>$binary</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$user</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$keyId</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/BinaryNotFoundException.html"><code v-pre>BinaryNotFoundException</code></RouterLink></li>
</ul>
<hr>
<h3 id="hasgpg" tabindex="-1"><a class="header-anchor" href="#hasgpg" aria-hidden="true">#</a> hasGPG</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">hasGPG</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/BinaryNotFoundException.html"><code v-pre>BinaryNotFoundException</code></RouterLink></li>
</ul>
<hr>
<h3 id="tryusersign" tabindex="-1"><a class="header-anchor" href="#tryusersign" aria-hidden="true">#</a> tryUserSign</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">tryUserSign</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$binary</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$binary</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$user</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="selectkey" tabindex="-1"><a class="header-anchor" href="#selectkey" aria-hidden="true">#</a> selectKey</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">selectKey</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$keys</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$keys</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="trykeyidsign" tabindex="-1"><a class="header-anchor" href="#trykeyidsign" aria-hidden="true">#</a> tryKeyIdSign</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">tryKeyIdSign</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$binary</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$keyId</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$binary</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$keyId</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="trydefaultsign" tabindex="-1"><a class="header-anchor" href="#trydefaultsign" aria-hidden="true">#</a> tryDefaultSign</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">tryDefaultSign</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$binary</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$binary</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="sign" tabindex="-1"><a class="header-anchor" href="#sign" aria-hidden="true">#</a> sign</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">sign</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$binary</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Crypt<span class="token punctuation">\</span>AbstractKey</span> <span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$binary</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$key</code></td>
<td><strong>\Ninja\Cosmic\Crypt\AbstractKey</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="inherited-methods" tabindex="-1"><a class="header-anchor" href="#inherited-methods" aria-hidden="true">#</a> Inherited methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="register" tabindex="-1"><a class="header-anchor" href="#register" aria-hidden="true">#</a> register</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Application</span> <span class="token variable">$app</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$app</code></td>
<td><strong>\Ninja\Cosmic\Application\Application</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/NotCallableException.html"><code v-pre>NotCallableException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/InvocationException.html"><code v-pre>InvocationException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="getapplication" tabindex="-1"><a class="header-anchor" href="#getapplication" aria-hidden="true">#</a> getApplication</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Application</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="setapplication" tabindex="-1"><a class="header-anchor" href="#setapplication" aria-hidden="true">#</a> setApplication</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setApplication</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Application</span> <span class="token variable">$app</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$app</code></td>
<td><strong>\Ninja\Cosmic\Application\Application</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="success" tabindex="-1"><a class="header-anchor" href="#success" aria-hidden="true">#</a> success</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="failure" tabindex="-1"><a class="header-anchor" href="#failure" aria-hidden="true">#</a> failure</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">failure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="exit" tabindex="-1"><a class="header-anchor" href="#exit" aria-hidden="true">#</a> exit</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcommandname" tabindex="-1"><a class="header-anchor" href="#getcommandname" aria-hidden="true">#</a> getCommandName</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getCommandName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getsignature" tabindex="-1"><a class="header-anchor" href="#getsignature" aria-hidden="true">#</a> getSignature</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcommanddescription" tabindex="-1"><a class="header-anchor" href="#getcommanddescription" aria-hidden="true">#</a> getCommandDescription</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getCommandDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getargumentdescriptions" tabindex="-1"><a class="header-anchor" href="#getargumentdescriptions" aria-hidden="true">#</a> getArgumentDescriptions</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getArgumentDescriptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getdefaults" tabindex="-1"><a class="header-anchor" href="#getdefaults" aria-hidden="true">#</a> getDefaults</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getaliases" tabindex="-1"><a class="header-anchor" href="#getaliases" aria-hidden="true">#</a> getAliases</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getAliases</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcommandicon" tabindex="-1"><a class="header-anchor" href="#getcommandicon" aria-hidden="true">#</a> getCommandIcon</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getCommandIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcommandhelp" tabindex="-1"><a class="header-anchor" href="#getcommandhelp" aria-hidden="true">#</a> getCommandHelp</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getCommandHelp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="isavailablein" tabindex="-1"><a class="header-anchor" href="#isavailablein" aria-hidden="true">#</a> isAvailableIn</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isAvailableIn</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$environment</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$environment</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getavailableenvironments" tabindex="-1"><a class="header-anchor" href="#getavailableenvironments" aria-hidden="true">#</a> getAvailableEnvironments</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getAvailableEnvironments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="ishidden" tabindex="-1"><a class="header-anchor" href="#ishidden" aria-hidden="true">#</a> isHidden</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isHidden</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="isdecorated" tabindex="-1"><a class="header-anchor" href="#isdecorated" aria-hidden="true">#</a> isDecorated</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isDecorated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getname" tabindex="-1"><a class="header-anchor" href="#getname" aria-hidden="true">#</a> getName</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


