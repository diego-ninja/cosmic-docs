<template><div><hr>
<h1 id="terminal" tabindex="-1"><a class="header-anchor" href="#terminal" aria-hidden="true">#</a> Terminal</h1>
<p>Class Terminal</p>
<p>A utility class for interacting with the terminal and managing themes.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Terminal</code></li>
<li>This class is marked as <strong>final</strong> and can't be subclassed</li>
<li>This class is a <strong>Final class</strong></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance" aria-hidden="true">#</a> instance</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">self</span> <span class="token variable">$instance</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This property is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="themeloader" tabindex="-1"><a class="header-anchor" href="#themeloader" aria-hidden="true">#</a> themeLoader</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>ThemeLoaderInterface</span> <span class="token variable">$themeLoader</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This property is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>ConsoleOutput</span> <span class="token variable">$output</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>StreamableInputInterface</span> <span class="token variable">$input</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="getinstance" tabindex="-1"><a class="header-anchor" href="#getinstance" aria-hidden="true">#</a> getInstance</h3>
<p>Get the singleton instance of the Terminal class.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Return Value:</strong></p>
<p>The Terminal instance.</p>
<hr>
<h3 id="withtheme" tabindex="-1"><a class="header-anchor" href="#withtheme" aria-hidden="true">#</a> withTheme</h3>
<p>Configure and enable a theme for the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">withTheme</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>ThemeInterface</span> <span class="token variable">$theme</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$theme</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Theme\ThemeInterface</strong></td>
<td>The theme to enable.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The Terminal instance.</p>
<hr>
<h3 id="loadthemes" tabindex="-1"><a class="header-anchor" href="#loadthemes" aria-hidden="true">#</a> loadThemes</h3>
<p>Load themes from a specified directory.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">loadThemes</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$directory</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td>The directory containing theme configurations.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The Terminal instance.</p>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/JsonException.html"><code v-pre>JsonException</code></RouterLink></li>
</ul>
<hr>
<h3 id="addtheme" tabindex="-1"><a class="header-anchor" href="#addtheme" aria-hidden="true">#</a> addTheme</h3>
<p>Add a theme to the list of available themes.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">addTheme</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>ThemeInterface</span> <span class="token variable">$theme</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$theme</code></td>
<td><strong>\Ninja\Cosmic\Terminal\Theme\ThemeInterface</strong></td>
<td>The theme to add.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The Terminal instance.</p>
<hr>
<h3 id="enabletheme" tabindex="-1"><a class="header-anchor" href="#enabletheme" aria-hidden="true">#</a> enableTheme</h3>
<p>Enable a specific theme by name.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">enableTheme</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$themeName</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$themeName</code></td>
<td><strong>string</strong></td>
<td>The name of the theme to enable.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The Terminal instance.</p>
<hr>
<h3 id="gettheme" tabindex="-1"><a class="header-anchor" href="#gettheme" aria-hidden="true">#</a> getTheme</h3>
<p>Get the currently enabled theme.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Terminal<span class="token punctuation">\</span>Theme<span class="token punctuation">\</span>ThemeInterface</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Return Value:</strong></p>
<p>The currently enabled theme.</p>
<hr>
<h3 id="output-1" tabindex="-1"><a class="header-anchor" href="#output-1" aria-hidden="true">#</a> output</h3>
<p>Get the console output object.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>ConsoleOutput</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Return Value:</strong></p>
<p>The console output object.</p>
<hr>
<h3 id="input-1" tabindex="-1"><a class="header-anchor" href="#input-1" aria-hidden="true">#</a> input</h3>
<p>Get the streamable input object.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>StreamableInputInterface</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Return Value:</strong></p>
<p>The streamable input object.</p>
<hr>
<h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h3>
<p>Clear a specified number of lines from the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$lines</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$lines</code></td>
<td><strong>int</strong></td>
<td>The number of lines to clear.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> reset</h3>
<p>Reset the terminal using Termwind.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3>
<p>Render a message using the terminal's formatter.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td><code v-pre>$message</code></td>
<td><strong>string</strong></td>
<td>The message to render.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The rendered message.</p>
<hr>
<h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3>
<p>Get the width of the terminal.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Return Value:</strong></p>
<p>The width of the terminal.</p>
<hr>
<h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3>
<p>Get a color style by name from the terminal formatter.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">color</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$colorName</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Formatter<span class="token punctuation">\</span>OutputFormatterStyleInterface</span>
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
<td><code v-pre>$colorName</code></td>
<td><strong>string</strong></td>
<td>The name of the color style.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The color style.</p>
<hr>
<h3 id="stream" tabindex="-1"><a class="header-anchor" href="#stream" aria-hidden="true">#</a> stream</h3>
<p>Get the stream associated with the terminal input.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Return Value:</strong></p>
<p>The input stream or STDIN if not available.</p>
<hr>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>ConsoleOutput</span> <span class="token variable">$output</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>StreamableInputInterface</span> <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><strong>\Symfony\Component\Console\Output\ConsoleOutput</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$input</code></td>
<td><strong>?\Symfony\Component\Console\Input\StreamableInputInterface</strong></td>
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


