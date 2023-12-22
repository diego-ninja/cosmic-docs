<template><div><hr>
<h1 id="lifecycleeventargs" tabindex="-1"><a class="header-anchor" href="#lifecycleeventargs" aria-hidden="true">#</a> LifecycleEventArgs</h1>
<p>Class LifecycleEventArgs</p>
<p>Represents the arguments associated with a lifecycle event.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Event\Dto\LifecycleEventArgs</code></li>
<li>This class is marked as <strong>final</strong> and can't be subclassed</li>
<li>This class is a <strong>Final class</strong></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="lifecycle-event" tabindex="-1"><a class="header-anchor" href="#lifecycle-event" aria-hidden="true">#</a> lifecycle_event</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$lifecycle_event</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="args" tabindex="-1"><a class="header-anchor" href="#args" aria-hidden="true">#</a> args</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$args</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="lifecycle-id" tabindex="-1"><a class="header-anchor" href="#lifecycle-id" aria-hidden="true">#</a> lifecycle_id</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ramsey<span class="token punctuation">\</span>Uuid<span class="token punctuation">\</span>UuidInterface</span> <span class="token variable">$lifecycle_id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$lifecycle_event</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$args</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ramsey<span class="token punctuation">\</span>Uuid<span class="token punctuation">\</span>UuidInterface</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$lifecycle_id</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$lifecycle_event</code></td>
<td><strong>string</strong></td>
<td>The name of the lifecycle event.</td>
</tr>
<tr>
<td><code v-pre>$args</code></td>
<td><strong>array</strong></td>
<td>The arguments associated with the event.</td>
</tr>
<tr>
<td><code v-pre>$lifecycle_id</code></td>
<td><strong>\Ramsey\Uuid\UuidInterface|null</strong></td>
<td>The UUID associated with the lifecycle event, if any.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getlifecycleid" tabindex="-1"><a class="header-anchor" href="#getlifecycleid" aria-hidden="true">#</a> getLifecycleId</h3>
<p>Gets the UUID associated with the lifecycle event.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getLifecycleId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ramsey<span class="token punctuation">\</span>Uuid<span class="token punctuation">\</span>UuidInterface</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The UUID associated with the lifecycle event.</p>
<hr>
<h3 id="getlifecycleevent" tabindex="-1"><a class="header-anchor" href="#getlifecycleevent" aria-hidden="true">#</a> getLifecycleEvent</h3>
<p>Gets the name of the lifecycle event.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getLifecycleEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The name of the lifecycle event.</p>
<hr>
<h3 id="getargs" tabindex="-1"><a class="header-anchor" href="#getargs" aria-hidden="true">#</a> getArgs</h3>
<p>Gets the arguments associated with the event.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The arguments associated with the event.</p>
<hr>
<h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> __call</h3>
<p>Magic method to support getter and setter methods dynamically.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__call</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$args</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
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
<td><code v-pre>$method</code></td>
<td><strong>string</strong></td>
<td>The method name.</td>
</tr>
<tr>
<td><code v-pre>$args</code></td>
<td><strong>array</strong></td>
<td>The method arguments.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The value if it exists, otherwise null.</p>
<hr>
<h3 id="issetter" tabindex="-1"><a class="header-anchor" href="#issetter" aria-hidden="true">#</a> isSetter</h3>
<p>Checks if the method is a setter.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">isSetter</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$method</code></td>
<td><strong>string</strong></td>
<td>The method name.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>Whether the method is a setter.</p>
<hr>
<h3 id="isgetter" tabindex="-1"><a class="header-anchor" href="#isgetter" aria-hidden="true">#</a> isGetter</h3>
<p>Checks if the method is a getter.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">isGetter</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$method</code></td>
<td><strong>string</strong></td>
<td>The method name.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>Whether the method is a getter.</p>
<hr>
<h3 id="getproperty" tabindex="-1"><a class="header-anchor" href="#getproperty" aria-hidden="true">#</a> getProperty</h3>
<p>Converts a method name to a property name.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$method</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$method</code></td>
<td><strong>string</strong></td>
<td>The method name.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The property name.</p>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


