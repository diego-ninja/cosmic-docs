<template><div><hr>
<h1 id="spinnerfactory" tabindex="-1"><a class="header-anchor" href="#spinnerfactory" aria-hidden="true">#</a> SpinnerFactory</h1>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Terminal\Spinner\SpinnerFactory</code></li>
<li>Parent class: <RouterLink to="/dev/api/classes/Ninja/Cosmic/Terminal/Spinner/Spinner.html"><code v-pre>\Ninja\Cosmic\Terminal\Spinner\Spinner</code></RouterLink></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Process<span class="token punctuation">\</span>Process</span><span class="token operator">|</span><span class="token keyword">callable</span> <span class="token variable">$callable</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$style</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$callable</code></td>
<td><strong>\Symfony\Component\Process\Process|callable</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$message</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$style</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="forprocess" tabindex="-1"><a class="header-anchor" href="#forprocess" aria-hidden="true">#</a> forProcess</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token function">forProcess</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Process<span class="token punctuation">\</span>Process</span> <span class="token variable">$process</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$style</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$process</code></td>
<td><strong>\Symfony\Component\Process\Process</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$message</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$style</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h3 id="forcallable" tabindex="-1"><a class="header-anchor" href="#forcallable" aria-hidden="true">#</a> forCallable</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token function">forCallable</span><span class="token punctuation">(</span><span class="token keyword type-hint">callable</span> <span class="token variable">$callback</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$style</span> <span class="token operator">=</span> <span class="token class-name static-context">Spinner</span><span class="token operator">::</span><span class="token constant">DEFAULT_SPINNER_STYLE</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$callback</code></td>
<td><strong>callable</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$message</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$style</code></td>
<td><strong>?string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Exception.html"><code v-pre>Exception</code></RouterLink></li>
</ul>
<hr>
<h2 id="inherited-methods" tabindex="-1"><a class="header-anchor" href="#inherited-methods" aria-hidden="true">#</a> Inherited methods</h2>
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


