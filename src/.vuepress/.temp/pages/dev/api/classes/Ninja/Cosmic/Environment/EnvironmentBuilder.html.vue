<template><div><hr>
<h1 id="environmentbuilder" tabindex="-1"><a class="header-anchor" href="#environmentbuilder" aria-hidden="true">#</a> EnvironmentBuilder</h1>
<p>Class EnvironmentBuilder</p>
<p>Utility class for building environment files based on an example file.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Environment\EnvironmentBuilder</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h3>
<p>Build the environment file based on the provided directory.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$directory</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$directory</code></td>
<td><strong>string</strong></td>
<td>The directory containing the example environment file.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True on success, false otherwise.</p>
<p><strong>Throws:</strong></p>
<p>If the example environment file is not found.</p>
<ul>
<li><RouterLink to="/dev/api/classes/Ninja/Cosmic/Environment/Exception/EnvironmentNotFoundException.html"><code v-pre>EnvironmentNotFoundException</code></RouterLink></li>
</ul>
<hr>
<h3 id="buildfrom" tabindex="-1"><a class="header-anchor" href="#buildfrom" aria-hidden="true">#</a> buildFrom</h3>
<p>Build environment files based on the provided example file.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">buildFrom</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$example_file</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$example_file</code></td>
<td><strong>string</strong></td>
<td>The path to the example environment file.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True on success, false otherwise.</p>
<hr>
<h3 id="extractvariables" tabindex="-1"><a class="header-anchor" href="#extractvariables" aria-hidden="true">#</a> extractVariables</h3>
<p>Extract environment variables from the provided example file.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">extractVariables</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$example_file</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$get_values</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
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
<td><code v-pre>$example_file</code></td>
<td><strong>string</strong></td>
<td>The path to the example environment file.</td>
</tr>
<tr>
<td><code v-pre>$get_values</code></td>
<td><strong>bool</strong></td>
<td>Whether to retrieve values along with keys.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The list of environment variables.</p>
<hr>
<h3 id="buildenvfile" tabindex="-1"><a class="header-anchor" href="#buildenvfile" aria-hidden="true">#</a> buildEnvFile</h3>
<p>Build an environment file based on the provided example file.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">buildEnvFile</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$example_file</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$env_file</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$example_file</code></td>
<td><strong>string</strong></td>
<td>The path to the example environment file.</td>
</tr>
<tr>
<td><code v-pre>$env_file</code></td>
<td><strong>string</strong></td>
<td>The path to the target environment file.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True on success, false otherwise.</p>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


