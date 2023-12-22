<template><div><hr>
<h1 id="lifecycleeventlistenerinterface" tabindex="-1"><a class="header-anchor" href="#lifecycleeventlistenerinterface" aria-hidden="true">#</a> LifecycleEventListenerInterface</h1>
<p>Interface LifecycleEventListenerInterface</p>
<p>Defines the contract for an object that listens to lifecycle events.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Event\LifecycleEventListenerInterface</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> __invoke</h3>
<p>Handles a lifecycle event.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__invoke</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Event<span class="token punctuation">\</span>Dto<span class="token punctuation">\</span>LifecycleEventArgs</span> <span class="token variable">$args</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$args</code></td>
<td><strong>\Ninja\Cosmic\Event\Dto\LifecycleEventArgs</strong></td>
<td>The arguments associated with the lifecycle event.</td>
</tr>
</tbody>
</table>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


