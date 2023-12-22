<template><div><hr>
<h1 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> Env</h1>
<p>Class Env</p>
<p>Provides utility methods for interacting with environment variables.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Environment\Env</code></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="putenv" tabindex="-1"><a class="header-anchor" href="#putenv" aria-hidden="true">#</a> putenv</h3>
<p>Whether to use putenv for setting environment variables.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$putenv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This property is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> repository</h3>
<p>The Dotenv repository instance.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Dotenv<span class="token punctuation">\</span>Repository<span class="token punctuation">\</span>RepositoryInterface</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$repository</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This property is <strong>static</strong>.</li>
</ul>
<hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="enableputenv" tabindex="-1"><a class="header-anchor" href="#enableputenv" aria-hidden="true">#</a> enablePutenv</h3>
<p>Enable the use of putenv for setting environment variables.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">enablePutenv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="disableputenv" tabindex="-1"><a class="header-anchor" href="#disableputenv" aria-hidden="true">#</a> disablePutenv</h3>
<p>Disable the use of putenv for setting environment variables.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">disablePutenv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="getrepository" tabindex="-1"><a class="header-anchor" href="#getrepository" aria-hidden="true">#</a> getRepository</h3>
<p>Get the Dotenv repository instance.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Dotenv<span class="token punctuation">\</span>Repository<span class="token punctuation">\</span>RepositoryInterface</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="basepath" tabindex="-1"><a class="header-anchor" href="#basepath" aria-hidden="true">#</a> basePath</h3>
<p>Get the base path, optionally with a subdirectory appended.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">basePath</span><span class="token punctuation">(</span><span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$dir</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td><code v-pre>$dir</code></td>
<td><strong>string|null</strong></td>
<td>Subdirectory (optional)</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="buildpath" tabindex="-1"><a class="header-anchor" href="#buildpath" aria-hidden="true">#</a> buildPath</h3>
<p>Get the build path, optionally with a subdirectory appended.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">buildPath</span><span class="token punctuation">(</span><span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$dir</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td><code v-pre>$dir</code></td>
<td><strong>string|null</strong></td>
<td>Subdirectory (optional)</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="helppath" tabindex="-1"><a class="header-anchor" href="#helppath" aria-hidden="true">#</a> helpPath</h3>
<p>Get the help path for commands, optionally with a subdirectory appended.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">helpPath</span><span class="token punctuation">(</span><span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$dir</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td><code v-pre>$dir</code></td>
<td><strong>string|null</strong></td>
<td>Subdirectory (optional)</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="isdebug" tabindex="-1"><a class="header-anchor" href="#isdebug" aria-hidden="true">#</a> isDebug</h3>
<p>Check if the application is in debug mode.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">isDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="env-1" tabindex="-1"><a class="header-anchor" href="#env-1" aria-hidden="true">#</a> env</h3>
<p>Get the current environment.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="appversion" tabindex="-1"><a class="header-anchor" href="#appversion" aria-hidden="true">#</a> appVersion</h3>
<p>Get the application version.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">appVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="appname" tabindex="-1"><a class="header-anchor" href="#appname" aria-hidden="true">#</a> appName</h3>
<p>Get the application name.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">appName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h3>
<p>Get the shell executable, optionally with an icon.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">shell</span><span class="token punctuation">(</span><span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$icon</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$icon</code></td>
<td><strong>string|null</strong></td>
<td>Shell icon (optional)</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="dump" tabindex="-1"><a class="header-anchor" href="#dump" aria-hidden="true">#</a> dump</h3>
<p>Dump the environment variables along with some additional information.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3>
<p>Get the value for a given key from the environment, with a default value if not set.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$key</span><span class="token punctuation">,</span> <span class="token keyword type-hint">mixed</span> <span class="token variable">$default</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$key</code></td>
<td><strong>string</strong></td>
<td>The key to retrieve</td>
</tr>
<tr>
<td><code v-pre>$default</code></td>
<td><strong>mixed</strong></td>
<td>Default value if the key is not set</td>
</tr>
</tbody>
</table>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


