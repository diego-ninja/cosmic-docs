<template><div><hr>
<h1 id="spinner" tabindex="-1"><a class="header-anchor" href="#spinner" aria-hidden="true">#</a> Spinner</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Spinner\Spinner</code></li>
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
<td style="text-align:left"><code v-pre>DEFAULT_SPINNER_STYLE</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'dots8Bit'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEFAULT_SPINNER_INTERVAL</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">1000</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>DEFAULT_SPINNER_PADDING</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BLINK_OFF</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">&quot;\x1b[?25l&quot;</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BLINK_ON</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">&quot;\x1b[?25h&quot;</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>CLEAR_LINE</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">&quot;\x1b[2K\r&quot;</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RETURN_TO_LEFT</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">&quot;\r&quot;</td>
</tr>
</tbody>
</table>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="child-pid" tabindex="-1"><a class="header-anchor" href="#child-pid" aria-hidden="true">#</a> child_pid</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">int</span> <span class="token variable">$child_pid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="spinner-1" tabindex="-1"><a class="header-anchor" href="#spinner-1" aria-hidden="true">#</a> spinner</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$spinner</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="padding" tabindex="-1"><a class="header-anchor" href="#padding" aria-hidden="true">#</a> padding</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">int</span> <span class="token variable">$padding</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$message</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$style</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$style</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$style</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="setmessage" tabindex="-1"><a class="header-anchor" href="#setmessage" aria-hidden="true">#</a> setMessage</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$message</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="setpadding" tabindex="-1"><a class="header-anchor" href="#setpadding" aria-hidden="true">#</a> setPadding</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">setPadding</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$padding</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span>
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
<td><code v-pre>$padding</code></td>
<td><strong>int</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getspinnerframes" tabindex="-1"><a class="header-anchor" href="#getspinnerframes" aria-hidden="true">#</a> getSpinnerFrames</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">getSpinnerFrames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="loopspinnerframes" tabindex="-1"><a class="header-anchor" href="#loopspinnerframes" aria-hidden="true">#</a> loopSpinnerFrames</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">loopSpinnerFrames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="addpadding" tabindex="-1"><a class="header-anchor" href="#addpadding" aria-hidden="true">#</a> addPadding</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">addPadding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> reset</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="keyboardinterrupts" tabindex="-1"><a class="header-anchor" href="#keyboardinterrupts" aria-hidden="true">#</a> keyboardInterrupts</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">keyboardInterrupts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="callback" tabindex="-1"><a class="header-anchor" href="#callback" aria-hidden="true">#</a> callback</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword type-hint">callable</span> <span class="token variable">$callback</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><strong>callable</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="runcallback" tabindex="-1"><a class="header-anchor" href="#runcallback" aria-hidden="true">#</a> runCallBack</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">runCallBack</span><span class="token punctuation">(</span><span class="token keyword type-hint">callable</span> <span class="token variable">$callback</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><strong>callable</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="success" tabindex="-1"><a class="header-anchor" href="#success" aria-hidden="true">#</a> success</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="failure" tabindex="-1"><a class="header-anchor" href="#failure" aria-hidden="true">#</a> failure</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">failure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


