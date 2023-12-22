<template><div><hr>
<h1 id="abstractdescriptor" tabindex="-1"><a class="header-anchor" href="#abstractdescriptor" aria-hidden="true">#</a> AbstractDescriptor</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Descriptor\AbstractDescriptor</code></li>
<li>This class implements:
<RouterLink to="/dev/api/classes/Symfony/Component/Console/Descriptor/DescriptorInterface.html"><code v-pre>\Symfony\Component\Console\Descriptor\DescriptorInterface</code></RouterLink></li>
<li>This class is an <strong>Abstract class</strong></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>OutputInterface</span> <span class="token variable">$output</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="describe" tabindex="-1"><a class="header-anchor" href="#describe" aria-hidden="true">#</a> describe</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">describe</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>OutputInterface</span> <span class="token variable">$output</span><span class="token punctuation">,</span> <span class="token keyword type-hint">object</span> <span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<tr>
<td><code v-pre>$object</code></td>
<td><strong>object</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$options</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="write" tabindex="-1"><a class="header-anchor" href="#write" aria-hidden="true">#</a> write</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$content</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$decorated</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$content</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$decorated</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="describeinputargument" tabindex="-1"><a class="header-anchor" href="#describeinputargument" aria-hidden="true">#</a> describeInputArgument</h3>
<p>Describes an InputArgument instance.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">describeInputArgument</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>InputArgument</span> <span class="token variable">$argument</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>abstract</strong>.</li>
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
<td><code v-pre>$argument</code></td>
<td><strong>\Symfony\Component\Console\Input\InputArgument</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$options</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="describeinputoption" tabindex="-1"><a class="header-anchor" href="#describeinputoption" aria-hidden="true">#</a> describeInputOption</h3>
<p>Describes an InputOption instance.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">describeInputOption</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>InputOption</span> <span class="token variable">$option</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>abstract</strong>.</li>
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
<td><code v-pre>$option</code></td>
<td><strong>\Symfony\Component\Console\Input\InputOption</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$options</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="describeinputdefinition" tabindex="-1"><a class="header-anchor" href="#describeinputdefinition" aria-hidden="true">#</a> describeInputDefinition</h3>
<p>Describes an InputDefinition instance.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">describeInputDefinition</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>InputDefinition</span> <span class="token variable">$definition</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>abstract</strong>.</li>
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
<td><code v-pre>$definition</code></td>
<td><strong>\Symfony\Component\Console\Input\InputDefinition</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$options</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="describecommand" tabindex="-1"><a class="header-anchor" href="#describecommand" aria-hidden="true">#</a> describeCommand</h3>
<p>Describes a Command instance.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">describeCommand</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span> <span class="token variable">$command</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>abstract</strong>.</li>
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
<td><code v-pre>$command</code></td>
<td><strong>\Symfony\Component\Console\Command\Command</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$options</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="describeapplication" tabindex="-1"><a class="header-anchor" href="#describeapplication" aria-hidden="true">#</a> describeApplication</h3>
<p>Describes an Application instance.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">describeApplication</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Application</span> <span class="token variable">$application</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>abstract</strong>.</li>
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
<td><code v-pre>$application</code></td>
<td><strong>\Symfony\Component\Console\Application</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$options</code></td>
<td><strong>array</strong></td>
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


