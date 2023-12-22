<template><div><hr>
<h1 id="applicationbuilder" tabindex="-1"><a class="header-anchor" href="#applicationbuilder" aria-hidden="true">#</a> ApplicationBuilder</h1>
<p>Class ApplicationBuilder</p>
<p>Responsible for building the application, including setting up the environment, compiling, and restoring.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Application\Builder\ApplicationBuilder</code></li>
<li>This class is marked as <strong>final</strong> and can't be subclassed</li>
<li>This class is a <strong>Final class</strong></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="compiler" tabindex="-1"><a class="header-anchor" href="#compiler" aria-hidden="true">#</a> compiler</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Compiler<span class="token punctuation">\</span>BoxCompiler</span> <span class="token variable">$compiler</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<p>ApplicationBuilder constructor.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Compiler<span class="token punctuation">\</span>BoxCompiler</span> <span class="token variable">$compiler</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$compiler</code></td>
<td><strong>\Ninja\Cosmic\Application\Compiler\BoxCompiler</strong></td>
<td>The BoxCompiler instance for compiling the application.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h3>
<p>Build the application for the specified environment.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$environment</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td>The environment for which to build the application.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True if the build process is successful, false otherwise.</p>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h3>
<p>Set up the environment for building the application.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$env</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$env</code></td>
<td><strong>string</strong></td>
<td>The environment for which to set up.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True if the setup process is successful, false otherwise.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="restore" tabindex="-1"><a class="header-anchor" href="#restore" aria-hidden="true">#</a> restore</h3>
<p>Restore the initial environment after building the application.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>True if the restore process is successful, false otherwise.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


