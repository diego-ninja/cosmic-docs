<template><div><hr>
<h1 id="selecthandler" tabindex="-1"><a class="header-anchor" href="#selecthandler" aria-hidden="true">#</a> SelectHandler</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Input\Select\Handler\SelectHandler</code></li>
</ul>
<h2 id="constants" tabindex="-1"><a class="header-anchor" href="#constants" aria-hidden="true">#</a> Constants</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Constant</th>
<th style="text-align:left">Visibility</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>SIMPLE_CTR</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">0x1</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>COMPLEX_CTR</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">0x2</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEFAULT_CTR</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">self::COMPLEX_CTR</td>
</tr>
</tbody>
</table>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="row" tabindex="-1"><a class="header-anchor" href="#row" aria-hidden="true">#</a> row</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">int</span> <span class="token variable">$row</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="column" tabindex="-1"><a class="header-anchor" href="#column" aria-hidden="true">#</a> column</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">int</span> <span class="token variable">$column</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="firstrun" tabindex="-1"><a class="header-anchor" href="#firstrun" aria-hidden="true">#</a> firstRun</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$firstRun</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> question</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> \Ninja\Cosmic\Terminal\Input\Select\Input\SelectInputInterface<span class="token operator">&amp;</span>amp<span class="token punctuation">;</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>Select<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>ColumnAwareInterface</span> <span class="token variable">$question</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>OutputInterface</span> <span class="token variable">$output</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="stream" tabindex="-1"><a class="header-anchor" href="#stream" aria-hidden="true">#</a> stream</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword type-declaration">mixed</span> <span class="token variable">$stream</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="columns" tabindex="-1"><a class="header-anchor" href="#columns" aria-hidden="true">#</a> columns</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token operator">?</span><span class="token keyword type-hint">int</span> <span class="token variable">$columns</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="terminalwidth" tabindex="-1"><a class="header-anchor" href="#terminalwidth" aria-hidden="true">#</a> terminalWidth</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token operator">?</span><span class="token keyword type-hint">int</span> <span class="token variable">$terminalWidth</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span>\Ninja\Cosmic\Terminal\Input\Select\Input\SelectInputInterface<span class="token operator">&amp;</span>amp<span class="token punctuation">;</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>Select<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>ColumnAwareInterface</span> <span class="token variable">$question</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>OutputInterface</span> <span class="token variable">$output</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">resource</span> <span class="token variable">$stream</span> <span class="token operator">=</span> <span class="token constant">STDIN</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">int</span> <span class="token variable">$columns</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">int</span> <span class="token variable">$terminalWidth</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$question</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Input\Select\Input\SelectInputInterface&amp;\Ninja\Cosmic\Terminal\Input\Select\Input\ColumnAwareInterface</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$output</code></td>
<td><strong>\Symfony\Component\Console\Output\OutputInterface</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$stream</code></td>
<td><strong>resource</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$columns</code></td>
<td><strong>?int</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$terminalWidth</code></td>
<td><strong>?int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="handle" tabindex="-1"><a class="header-anchor" href="#handle" aria-hidden="true">#</a> handle</h3>
<p>Navigates through option items.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">list</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span><span class="token keyword type-declaration">string</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="exists" tabindex="-1"><a class="header-anchor" href="#exists" aria-hidden="true">#</a> exists</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">exists</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$row</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$column</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$row</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$column</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="up" tabindex="-1"><a class="header-anchor" href="#up" aria-hidden="true">#</a> up</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="down" tabindex="-1"><a class="header-anchor" href="#down" aria-hidden="true">#</a> down</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="left" tabindex="-1"><a class="header-anchor" href="#left" aria-hidden="true">#</a> left</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="right" tabindex="-1"><a class="header-anchor" href="#right" aria-hidden="true">#</a> right</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">right</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="navigate" tabindex="-1"><a class="header-anchor" href="#navigate" aria-hidden="true">#</a> navigate</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$char</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$ctrlMode</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">DEFAULT_CTR</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$char</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$ctrlMode</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="repaint" tabindex="-1"><a class="header-anchor" href="#repaint" aria-hidden="true">#</a> repaint</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">repaint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="finalclear" tabindex="-1"><a class="header-anchor" href="#finalclear" aria-hidden="true">#</a> finalClear</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">finalClear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="makerow" tabindex="-1"><a class="header-anchor" href="#makerow" aria-hidden="true">#</a> makeRow</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">makeRow</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$entries</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$activeColumn</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$columnSpace</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$entries</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$activeColumn</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$columnSpace</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="makecell" tabindex="-1"><a class="header-anchor" href="#makecell" aria-hidden="true">#</a> makeCell</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">makeCell</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$option</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$hasCursor</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$maxWidth</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$option</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$hasCursor</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$maxWidth</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="checkbox" tabindex="-1"><a class="header-anchor" href="#checkbox" aria-hidden="true">#</a> checkbox</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">checkbox</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$selected</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$hasCursor</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$maxWidth</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$name</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$selected</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$hasCursor</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$maxWidth</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="radio" tabindex="-1"><a class="header-anchor" href="#radio" aria-hidden="true">#</a> radio</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">radio</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$selected</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$hasCursor</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$maxWidth</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$name</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$selected</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$hasCursor</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$maxWidth</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="terminalwidth-1" tabindex="-1"><a class="header-anchor" href="#terminalwidth-1" aria-hidden="true">#</a> terminalWidth</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">terminalWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcolumns" tabindex="-1"><a class="header-anchor" href="#getcolumns" aria-hidden="true">#</a> getColumns</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="columnsize" tabindex="-1"><a class="header-anchor" href="#columnsize" aria-hidden="true">#</a> columnSize</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">columnSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="ismultiple" tabindex="-1"><a class="header-anchor" href="#ismultiple" aria-hidden="true">#</a> isMultiple</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">isMultiple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


