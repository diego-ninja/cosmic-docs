<template><div><hr>
<h1 id="commandhelprenderer" tabindex="-1"><a class="header-anchor" href="#commandhelprenderer" aria-hidden="true">#</a> CommandHelpRenderer</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Renderer\CommandHelpRenderer</code></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="default-styles" tabindex="-1"><a class="header-anchor" href="#default-styles" aria-hidden="true">#</a> default_styles</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$default_styles</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="help-directories" tabindex="-1"><a class="header-anchor" href="#help-directories" aria-hidden="true">#</a> help_directories</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$help_directories</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="parser" tabindex="-1"><a class="header-anchor" href="#parser" aria-hidden="true">#</a> parser</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Parser<span class="token punctuation">\</span>MarkdownParser</span> <span class="token variable">$parser</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$help_directories</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Parser<span class="token punctuation">\</span>MarkdownParser</span> <span class="token variable">$parser</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$help_directories</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$parser</code></td>
<td><strong>\Ninja\Cosmic\Parser\MarkdownParser</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span> <span class="token variable">$command</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$command</code></td>
<td><strong>\Symfony\Component\Console\Command\Command</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="findcommandhelpfile" tabindex="-1"><a class="header-anchor" href="#findcommandhelpfile" aria-hidden="true">#</a> findCommandHelpFile</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">findCommandHelpFile</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span> <span class="token variable">$command</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
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
<td><code v-pre>$command</code></td>
<td><strong>\Symfony\Component\Console\Command\Command</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="rendercommandhelpfile" tabindex="-1"><a class="header-anchor" href="#rendercommandhelpfile" aria-hidden="true">#</a> renderCommandHelpFile</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">renderCommandHelpFile</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span> <span class="token variable">$command</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$command</code></td>
<td><strong>\Symfony\Component\Console\Command\Command</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="rendercommandinlinehelp" tabindex="-1"><a class="header-anchor" href="#rendercommandinlinehelp" aria-hidden="true">#</a> renderCommandInlineHelp</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">renderCommandInlineHelp</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span> <span class="token variable">$command</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$command</code></td>
<td><strong>\Symfony\Component\Console\Command\Command</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="renderfooterforcommand" tabindex="-1"><a class="header-anchor" href="#renderfooterforcommand" aria-hidden="true">#</a> renderFooterForCommand</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">renderFooterForCommand</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span> <span class="token variable">$command</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$command</code></td>
<td><strong>\Symfony\Component\Console\Command\Command</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="renderheader" tabindex="-1"><a class="header-anchor" href="#renderheader" aria-hidden="true">#</a> renderHeader</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">renderHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="loadstyles" tabindex="-1"><a class="header-anchor" href="#loadstyles" aria-hidden="true">#</a> loadStyles</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">loadStyles</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$custom_styles</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$custom_styles</code></td>
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


