<template><div><hr>
<h1 id="lifecycletrait" tabindex="-1"><a class="header-anchor" href="#lifecycletrait" aria-hidden="true">#</a> LifecycleTrait</h1>
<p>Trait LifecycleTrait</p>
<p>Provides methods to register and dispatch lifecycle events.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Event\LifecycleTrait</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="registerlistener" tabindex="-1"><a class="header-anchor" href="#registerlistener" aria-hidden="true">#</a> registerListener</h3>
<p>Register a listener for one or multiple lifecycle events.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">registerListener</span><span class="token punctuation">(</span><span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">array</span> <span class="token variable">$event_name</span><span class="token punctuation">,</span> <span class="token keyword">callable</span><span class="token operator">|</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Event<span class="token punctuation">\</span>LifecycleEventListenerInterface</span> <span class="token variable">$listener</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$event_name</code></td>
<td><strong>string|array</strong></td>
<td>The name or names of the lifecycle event(s).</td>
</tr>
<tr>
<td><code v-pre>$listener</code></td>
<td><strong>callable|\Ninja\Cosmic\Event\LifecycleEventListenerInterface</strong></td>
<td>The listener to be registered.</td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<p>If the event name is not registered as a valid lifecycle event.</p>
<ul>
<li><RouterLink to="/dev/api/classes/InvalidArgumentException.html"><code v-pre>InvalidArgumentException</code></RouterLink></li>
</ul>
<hr>
<h3 id="register" tabindex="-1"><a class="header-anchor" href="#register" aria-hidden="true">#</a> register</h3>
<p>Register a listener for a specific lifecycle event.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$event_name</span><span class="token punctuation">,</span> <span class="token keyword">callable</span><span class="token operator">|</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Event<span class="token punctuation">\</span>LifecycleEventListenerInterface</span> <span class="token variable">$listener</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$event_name</code></td>
<td><strong>string</strong></td>
<td>The name of the lifecycle event.</td>
</tr>
<tr>
<td><code v-pre>$listener</code></td>
<td><strong>callable|\Ninja\Cosmic\Event\LifecycleEventListenerInterface</strong></td>
<td>The listener to be registered.</td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<p>If the event name is not registered as a valid lifecycle event.</p>
<ul>
<li><RouterLink to="/dev/api/classes/InvalidArgumentException.html"><code v-pre>InvalidArgumentException</code></RouterLink></li>
</ul>
<hr>
<h3 id="registerlifecycleevents" tabindex="-1"><a class="header-anchor" href="#registerlifecycleevents" aria-hidden="true">#</a> registerLifecycleEvents</h3>
<p>Register multiple lifecycle events.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">registerLifecycleEvents</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$lifecycle_events</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$lifecycle_events</code></td>
<td><strong>array</strong></td>
<td>The array of lifecycle events to register.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="dispatchlifecycleevent" tabindex="-1"><a class="header-anchor" href="#dispatchlifecycleevent" aria-hidden="true">#</a> dispatchLifecycleEvent</h3>
<p>Dispatch a lifecycle event to its registered listeners.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">dispatchLifecycleEvent</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$event_name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$event_args</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$event_name</code></td>
<td><strong>string</strong></td>
<td>The name of the lifecycle event to dispatch.</td>
</tr>
<tr>
<td><code v-pre>$event_args</code></td>
<td><strong>array</strong></td>
<td>The arguments to pass to the event listeners.</td>
</tr>
</tbody>
</table>
<hr>
<hr>
<blockquote>
<p>Automatically generated on 2023-12-21</p>
</blockquote>
</div></template>


