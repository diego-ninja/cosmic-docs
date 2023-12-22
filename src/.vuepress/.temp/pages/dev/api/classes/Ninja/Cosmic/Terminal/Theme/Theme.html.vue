<template><div><hr>
<h1 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> Theme</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Theme\Theme</code></li>
<li>This class implements:
<RouterLink to="/dev/api/classes/Ninja/Cosmic/Terminal/Theme/ThemeInterface.html"><code v-pre>\Ninja\Cosmic\Terminal\Theme\ThemeInterface</code></RouterLink></li>
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
<td style="text-align:left"><code v-pre>THEME_SECTION_COLORS</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">&quot;colors&quot;</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>THEME_SECTION_CHARSETS</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">&quot;charsets&quot;</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>THEME_SECTION_STYLES</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">&quot;styles&quot;</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>THEME_SECTION_ICONS</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">&quot;icons&quot;</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>THEME_SECTION_SPINNERS</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">&quot;spinners&quot;</td>
</tr>
</tbody>
</table>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="sections" tabindex="-1"><a class="header-anchor" href="#sections" aria-hidden="true">#</a> sections</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$sections</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This property is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="colors" tabindex="-1"><a class="header-anchor" href="#colors" aria-hidden="true">#</a> colors</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Color<span class="token punctuation">\</span>ColorCollection</span> <span class="token variable">$colors</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> styles</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Style<span class="token punctuation">\</span>StyleCollection</span> <span class="token variable">$styles</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="icons" tabindex="-1"><a class="header-anchor" href="#icons" aria-hidden="true">#</a> icons</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Icon<span class="token punctuation">\</span>IconCollection</span> <span class="token variable">$icons</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="charsets" tabindex="-1"><a class="header-anchor" href="#charsets" aria-hidden="true">#</a> charsets</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Charset<span class="token punctuation">\</span>CharsetCollection</span> <span class="token variable">$charsets</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="spinners" tabindex="-1"><a class="header-anchor" href="#spinners" aria-hidden="true">#</a> spinners</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Spinner<span class="token punctuation">\</span>SpinnerCollection</span> <span class="token variable">$spinners</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="logo" tabindex="-1"><a class="header-anchor" href="#logo" aria-hidden="true">#</a> logo</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$logo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="notification" tabindex="-1"><a class="header-anchor" href="#notification" aria-hidden="true">#</a> notification</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$notification</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="parent" tabindex="-1"><a class="header-anchor" href="#parent" aria-hidden="true">#</a> parent</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>ThemeInterface</span> <span class="token variable">$parent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Color<span class="token punctuation">\</span>ColorCollection</span> <span class="token variable">$colors</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Style<span class="token punctuation">\</span>StyleCollection</span> <span class="token variable">$styles</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Icon<span class="token punctuation">\</span>IconCollection</span> <span class="token variable">$icons</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Charset<span class="token punctuation">\</span>CharsetCollection</span> <span class="token variable">$charsets</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Spinner<span class="token punctuation">\</span>SpinnerCollection</span> <span class="token variable">$spinners</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$config</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$logo</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$notification</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>ThemeInterface</span> <span class="token variable">$parent</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$colors</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Theme\Element\Color\ColorCollection</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$styles</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Theme\Element\Style\StyleCollection</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$icons</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Theme\Element\Icon\IconCollection</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$charsets</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Theme\Element\Charset\CharsetCollection</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$spinners</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Theme\Element\Spinner\SpinnerCollection</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$config</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$logo</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$notification</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$parent</code></td>
<td><strong>?\Ninja\Cosmic\Terminal\Theme\ThemeInterface</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="fromthemefolder" tabindex="-1"><a class="header-anchor" href="#fromthemefolder" aria-hidden="true">#</a> fromThemeFolder</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromThemeFolder</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$folder</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$folder</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></li>
</ul>
<hr>
<h3 id="loadfile" tabindex="-1"><a class="header-anchor" href="#loadfile" aria-hidden="true">#</a> loadFile</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$filename</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$filename</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></li>
</ul>
<hr>
<h3 id="load" tabindex="-1"><a class="header-anchor" href="#load" aria-hidden="true">#</a> load</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>OutputInterface</span> <span class="token variable">$output</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
</tbody>
</table>
<hr>
<h3 id="fromfile" tabindex="-1"><a class="header-anchor" href="#fromfile" aria-hidden="true">#</a> fromFile</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromFile</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$filename</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$filename</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="fromjson" tabindex="-1"><a class="header-anchor" href="#fromjson" aria-hidden="true">#</a> fromJson</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromJson</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$json</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$json</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="fromarray" tabindex="-1"><a class="header-anchor" href="#fromarray" aria-hidden="true">#</a> fromArray</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">fromArray</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$data</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="jsonserialize" tabindex="-1"><a class="header-anchor" href="#jsonserialize" aria-hidden="true">#</a> jsonSerialize</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">jsonSerialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="toarray" tabindex="-1"><a class="header-anchor" href="#toarray" aria-hidden="true">#</a> toArray</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getname" tabindex="-1"><a class="header-anchor" href="#getname" aria-hidden="true">#</a> getName</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getlogo" tabindex="-1"><a class="header-anchor" href="#getlogo" aria-hidden="true">#</a> getLogo</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getLogo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="geticons" tabindex="-1"><a class="header-anchor" href="#geticons" aria-hidden="true">#</a> getIcons</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Icon<span class="token punctuation">\</span>IconCollection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="geticon" tabindex="-1"><a class="header-anchor" href="#geticon" aria-hidden="true">#</a> getIcon</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getIcon</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$iconName</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Icon<span class="token punctuation">\</span>Icon</span>
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
<td><code v-pre>$iconName</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getappicon" tabindex="-1"><a class="header-anchor" href="#getappicon" aria-hidden="true">#</a> getAppIcon</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getAppIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Icon<span class="token punctuation">\</span>Icon</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getconfig" tabindex="-1"><a class="header-anchor" href="#getconfig" aria-hidden="true">#</a> getConfig</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$key</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$key</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getcolors" tabindex="-1"><a class="header-anchor" href="#getcolors" aria-hidden="true">#</a> getColors</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Color<span class="token punctuation">\</span>ColorCollection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcolor" tabindex="-1"><a class="header-anchor" href="#getcolor" aria-hidden="true">#</a> getColor</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$colorName</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Color<span class="token punctuation">\</span>Color</span>
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
<td><code v-pre>$colorName</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getstyles" tabindex="-1"><a class="header-anchor" href="#getstyles" aria-hidden="true">#</a> getStyles</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getStyles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Style<span class="token punctuation">\</span>StyleCollection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getstyle" tabindex="-1"><a class="header-anchor" href="#getstyle" aria-hidden="true">#</a> getStyle</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$styleName</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Style<span class="token punctuation">\</span>AbstractStyle</span>
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
<td><code v-pre>$styleName</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getcharsets" tabindex="-1"><a class="header-anchor" href="#getcharsets" aria-hidden="true">#</a> getCharsets</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getCharsets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Charset<span class="token punctuation">\</span>CharsetCollection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getcharset" tabindex="-1"><a class="header-anchor" href="#getcharset" aria-hidden="true">#</a> getCharset</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getCharset</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$charsetName</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Charset<span class="token punctuation">\</span>Charset</span>
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
<td><code v-pre>$charsetName</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getspinners" tabindex="-1"><a class="header-anchor" href="#getspinners" aria-hidden="true">#</a> getSpinners</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getSpinners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Spinner<span class="token punctuation">\</span>SpinnerCollection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="getspinner" tabindex="-1"><a class="header-anchor" href="#getspinner" aria-hidden="true">#</a> getSpinner</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getSpinner</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$spinnerName</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>Element<span class="token punctuation">\</span>Spinner<span class="token punctuation">\</span>Spinner</span>
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
<td><code v-pre>$spinnerName</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getnotificationicon" tabindex="-1"><a class="header-anchor" href="#getnotificationicon" aria-hidden="true">#</a> getNotificationIcon</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getNotificationIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="setnotificationicon" tabindex="-1"><a class="header-anchor" href="#setnotificationicon" aria-hidden="true">#</a> setNotificationIcon</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setNotificationIcon</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$icon</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$icon</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="setlogo" tabindex="-1"><a class="header-anchor" href="#setlogo" aria-hidden="true">#</a> setLogo</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setLogo</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$logo</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$logo</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getparent" tabindex="-1"><a class="header-anchor" href="#getparent" aria-hidden="true">#</a> getParent</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>ThemeInterface</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="setparent" tabindex="-1"><a class="header-anchor" href="#setparent" aria-hidden="true">#</a> setParent</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setParent</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>ThemeInterface</span> <span class="token variable">$theme</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$theme</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Theme\ThemeInterface</strong></td>
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


