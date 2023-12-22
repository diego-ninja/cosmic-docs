<template><div><hr>
<h1 id="lifecycle" tabindex="-1"><a class="header-anchor" href="#lifecycle" aria-hidden="true">#</a> Lifecycle</h1>
<p>Class Lifecycle</p>
<p>Represents the lifecycle of an event in the application.</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Event\Lifecycle</code></li>
<li>This class implements:
<RouterLink to="/dev/api/classes/Ninja/Cosmic/Event/LifecycleAwareInterface.html"><code v-pre>\Ninja\Cosmic\Event\LifecycleAwareInterface</code></RouterLink></li>
</ul>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="event-listeners" tabindex="-1"><a class="header-anchor" href="#event-listeners" aria-hidden="true">#</a> event_listeners</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword type-declaration">array</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">,</span><span class="token keyword">callable</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token variable">$event_listeners</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This property is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="lifecycle-events" tabindex="-1"><a class="header-anchor" href="#lifecycle-events" aria-hidden="true">#</a> lifecycle_events</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword type-declaration">array</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">,</span><span class="token keyword type-declaration">array</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token variable">$lifecycle_events</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This property is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance" aria-hidden="true">#</a> instance</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">self</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$instance</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This property is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="lifecycle-id" tabindex="-1"><a class="header-anchor" href="#lifecycle-id" aria-hidden="true">#</a> lifecycle_id</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ramsey<span class="token punctuation">\</span>Uuid<span class="token punctuation">\</span>UuidInterface</span> <span class="token variable">$lifecycle_id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<p>Lifecycle constructor.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ramsey<span class="token punctuation">\</span>Uuid<span class="token punctuation">\</span>UuidInterface</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$lifecycle_id</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
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
<td><code v-pre>$lifecycle_id</code></td>
<td><strong>\Ramsey\Uuid\UuidInterface|null</strong></td>
<td>The UUID representing the lifecycle of an event.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getlifecycleid" tabindex="-1"><a class="header-anchor" href="#getlifecycleid" aria-hidden="true">#</a> getLifecycleId</h3>
<p>Get the UUID representing the lifecycle of an event.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getLifecycleId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Ramsey<span class="token punctuation">\</span>Uuid<span class="token punctuation">\</span>UuidInterface</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Return Value:</strong></p>
<p>The UUID or null if not set.</p>
<hr>
<h3 id="withlifecycleid" tabindex="-1"><a class="header-anchor" href="#withlifecycleid" aria-hidden="true">#</a> withLifecycleId</h3>
<p>Create a new instance of Lifecycle with the given lifecycle ID.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">withLifecycleId</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ramsey<span class="token punctuation">\</span>Uuid<span class="token punctuation">\</span>UuidInterface</span> <span class="token variable">$lifecycle_id</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Event<span class="token punctuation">\</span>LifecycleAwareInterface</span>
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
<td><code v-pre>$lifecycle_id</code></td>
<td><strong>\Ramsey\Uuid\UuidInterface</strong></td>
<td>The UUID representing the lifecycle of an event.</td>
</tr>
</tbody>
</table>
<p><strong>Return Value:</strong></p>
<p>The new instance of Lifecycle.</p>
<hr>
<h3 id="getinstance" tabindex="-1"><a class="header-anchor" href="#getinstance" aria-hidden="true">#</a> getInstance</h3>
<p>Get the singleton instance of the Lifecycle class.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Event<span class="token punctuation">\</span>LifecycleAwareInterface</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<p><strong>Return Value:</strong></p>
<p>The instance of Lifecycle.</p>
<hr>
<h2 id="inherited-methods" tabindex="-1"><a class="header-anchor" href="#inherited-methods" aria-hidden="true">#</a> Inherited methods</h2>
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


