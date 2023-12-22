<template><div><h1 id="📝-question" tabindex="-1"><a class="header-anchor" href="#📝-question" aria-hidden="true">#</a> 📝 Question</h1>
<p>The <code v-pre>Question</code> class is a facade that provides a simple interface to complex subsystems in a system. It provides a set of methods that delegate the work to other classes and methods. This class is part of the <code v-pre>Ninja\Cosmic\Terminal\Input</code> namespace.</p>
<h2 id="ask-string-message-string-default-null-array-autocomplete-bool-decorated-true-string" tabindex="-1"><a class="header-anchor" href="#ask-string-message-string-default-null-array-autocomplete-bool-decorated-true-string" aria-hidden="true">#</a> <code v-pre>ask(string $message, ?string $default = null, array $autoComplete = [], bool $decorated = true): ?string</code></h2>
<p>This method asks a question with a given message, default answer, autocomplete options, and a flag indicating whether the message should be decorated.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$message</code>: The message to be displayed in the question.</li>
<li><code v-pre>$default</code>: The default answer to the question.</li>
<li><code v-pre>$autoComplete</code>: The autocomplete options for the question.</li>
<li><code v-pre>$decorated</code>: A flag indicating whether the message should be decorated.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">Question</span><span class="token operator">::</span><span class="token function">ask</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'What is your name?'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'John Doe'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'John Doe'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Jane Doe'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="confirm-string-message-bool-default-true-bool-decorated-true-bool" tabindex="-1"><a class="header-anchor" href="#confirm-string-message-bool-default-true-bool-decorated-true-bool" aria-hidden="true">#</a> <code v-pre>confirm(string $message, bool $default = true, bool $decorated = true): bool</code></h2>
<p>This method asks a confirmation question with a given message, default answer, and a flag indicating whether the message should be decorated.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$message</code>: The message to be displayed in the question.</li>
<li><code v-pre>$default</code>: The default answer to the question.</li>
<li><code v-pre>$decorated</code>: A flag indicating whether the message should be decorated.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">Question</span><span class="token operator">::</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Do you want to continue?'</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hidden-string-message-bool-decorated-true-string" tabindex="-1"><a class="header-anchor" href="#hidden-string-message-bool-decorated-true-string" aria-hidden="true">#</a> <code v-pre>hidden(string $message, bool $decorated = true): ?string</code></h2>
<p>This method asks a question with a hidden answer with a given message and a flag indicating whether the message should be decorated.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$message</code>: The message to be displayed in the question.</li>
<li><code v-pre>$decorated</code>: A flag indicating whether the message should be decorated.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">Question</span><span class="token operator">::</span><span class="token function">hidden</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Enter your password:'</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="select-string-message-array-options-bool-allowmultiple-true-int-columns-null-int-maxwidth-null-array" tabindex="-1"><a class="header-anchor" href="#select-string-message-array-options-bool-allowmultiple-true-int-columns-null-int-maxwidth-null-array" aria-hidden="true">#</a> <code v-pre>select(string $message, array $options, bool $allowMultiple = true, ?int $columns = null, ?int $maxWidth = null): array</code></h2>
<p>This method asks a selection question with a given message, options, a flag indicating whether multiple selections are allowed, the number of columns, and the maximum width.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>$message</code>: The message to be displayed in the question.</li>
<li><code v-pre>$options</code>: The options for the question.</li>
<li><code v-pre>$allowMultiple</code>: A flag indicating whether multiple selections are allowed.</li>
<li><code v-pre>$columns</code>: The number of columns.</li>
<li><code v-pre>$maxWidth</code>: The maximum width.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">Question</span><span class="token operator">::</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Choose your favorite colors:'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'Red'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Green'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Blue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


