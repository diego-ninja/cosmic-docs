<template><div><hr>
<h1 id="installerinterface" tabindex="-1"><a class="header-anchor" href="#installerinterface" aria-hidden="true">#</a> InstallerInterface</h1>
<p>Interface InstallerInterface</p>
<p>Represents an installer interface for managing package installations.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Installer\InstallerInterface</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h3>
<p>Performs the installation process.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>True if the installation was successful, false otherwise.</p>
<hr>
<h3 id="ispackageinstalled" tabindex="-1"><a class="header-anchor" href="#ispackageinstalled" aria-hidden="true">#</a> isPackageInstalled</h3>
<p>Checks if a package is installed.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isPackageInstalled</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$package</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$package</code></td>
<td><strong>string</strong></td>
<td>The name of the package.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True if the package is installed, false otherwise.</p>
<hr>
<h3 id="preinstall" tabindex="-1"><a class="header-anchor" href="#preinstall" aria-hidden="true">#</a> preInstall</h3>
<p>Executes a callback before the installation process.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">preInstall</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Closure</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$callback</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$callback</code></td>
<td><strong>\Closure|null</strong></td>
<td>The callback function to execute before installation.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="postinstall" tabindex="-1"><a class="header-anchor" href="#postinstall" aria-hidden="true">#</a> postInstall</h3>
<p>Executes a callback after the installation process.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">postInstall</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Closure</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$callback</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$callback</code></td>
<td><strong>\Closure|null</strong></td>
<td>The callback function to execute after installation.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="addpackage" tabindex="-1"><a class="header-anchor" href="#addpackage" aria-hidden="true">#</a> addPackage</h3>
<p>Adds a package to the installer.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">addPackage</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$package</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$version</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token operator">*</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$package</code></td>
<td><strong>string</strong></td>
<td>The name of the package.</td>
</tr>
<tr>
<td><code v-pre>$version</code></td>
<td><strong>string|null</strong></td>
<td>The version constraint for the package (default is &quot;*&quot;).</td>
</tr>
</tbody>
</table>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


