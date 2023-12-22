<template><div><hr>
<h1 id="boxcompiler" tabindex="-1"><a class="header-anchor" href="#boxcompiler" aria-hidden="true">#</a> BoxCompiler</h1>
<p>Class BoxCompiler</p>
<p>Responsible for compiling the application into a Phar binary using Box.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Application\Compiler\BoxCompiler</code></li>
<li>This class implements:
<RouterLink to="/dev/api/classes/Ninja/Cosmic/Application/Compiler/CompilerInterface.html"><code v-pre>\Ninja\Cosmic\Application\Compiler\CompilerInterface</code></RouterLink></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="compile" tabindex="-1"><a class="header-anchor" href="#compile" aria-hidden="true">#</a> compile</h3>
<p>Compile the application into a Phar binary using Box.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">compile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>True if the compilation process is successful, false otherwise.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></li>
</ul>
<p>If unable to install or find the Box binary.</p>
<ul>
<li><RouterLink to="/dev/api/classes/RuntimeException%7C/Ninja/Cosmic/Exception/BinaryNotFoundException.html"><code v-pre>\RuntimeException|\Ninja\Cosmic\Exception\BinaryNotFoundException</code></RouterLink></li>
</ul>
<hr>
<h3 id="installboxbinary" tabindex="-1"><a class="header-anchor" href="#installboxbinary" aria-hidden="true">#</a> installBoxBinary</h3>
<p>Install the Box binary using Phive.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">installBoxBinary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>True if the installation process is successful, false otherwise.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Ninja/Cosmic/Exception/BinaryNotFoundException.html"><code v-pre>BinaryNotFoundException</code></RouterLink></li>
</ul>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


