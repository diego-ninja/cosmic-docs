<template><div><hr>
<h1 id="aptinstaller" tabindex="-1"><a class="header-anchor" href="#aptinstaller" aria-hidden="true">#</a> AptInstaller</h1>
<p>Class AptInstaller</p>
<p>An installer implementation for Debian-based systems using apt package manager.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Installer\AptInstaller</code></li>
<li>Parent class: <RouterLink to="/dev/api/classes/Ninja/Cosmic/Installer/AbstractInstaller.html"><code v-pre>\Ninja\Cosmic\Installer\AbstractInstaller</code></RouterLink></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
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
<td>The name of the package to check.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>True if the package is installed, false otherwise.</p>
<hr>
<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h3>
<p>Installs the specified packages using apt package manager.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>True if the installation is successful, false otherwise.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/BinaryNotFoundException.html"><code v-pre>BinaryNotFoundException</code></RouterLink></li>
</ul>
<hr>
<h3 id="updateapt" tabindex="-1"><a class="header-anchor" href="#updateapt" aria-hidden="true">#</a> updateApt</h3>
<p>Updates the apt package manager's sources.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">updateApt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>True if the update is successful, false otherwise.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/BinaryNotFoundException.html"><code v-pre>BinaryNotFoundException</code></RouterLink></li>
</ul>
<hr>
<h2 id="inherited-methods" tabindex="-1"><a class="header-anchor" href="#inherited-methods" aria-hidden="true">#</a> Inherited methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<p>AbstractInstaller constructor.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>OutputInterface</span> <span class="token variable">$output</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td>The output interface.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="preinstall" tabindex="-1"><a class="header-anchor" href="#preinstall" aria-hidden="true">#</a> preInstall</h3>
<p>Sets the callback function to execute before installation.</p>
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
<p>Sets the callback function to execute after installation.</p>
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
<h3 id="isinstalled" tabindex="-1"><a class="header-anchor" href="#isinstalled" aria-hidden="true">#</a> isInstalled</h3>
<p>Checks if the installation process is completed.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">isInstalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>True if the installation is completed, false otherwise.</p>
<hr>
<h3 id="addpackage" tabindex="-1"><a class="header-anchor" href="#addpackage" aria-hidden="true">#</a> addPackage</h3>
<p>Adds a package to the list of packages to be installed.</p>
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


