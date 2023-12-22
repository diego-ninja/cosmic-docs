<template><div><hr>
<h1 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h1>
<p>Class Application</p>
<ul>
<li>Full name: <code v-pre>\Ninja\Cosmic\Application\Application</code></li>
<li>Parent class: <RouterLink to="/dev/api/classes/Symfony/Component/Console/Application.html"><code v-pre>Application</code></RouterLink></li>
<li>This class is marked as <strong>final</strong> and can't be subclassed</li>
<li>This class is a <strong>Final class</strong></li>
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
<td style="text-align:left"><code v-pre>LIFECYCLE_APP_BOOT</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'app.boot'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LIFECYCLE_APP_SHUTDOWN</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'app.shutdown'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LIFECYCLE_APP_BUILD</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'app.build'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>LIFECYCLE_APP_INSTALL</code></td>
<td style="text-align:left">public</td>
<td style="text-align:left"></td>
<td style="text-align:left">'app.install'</td>
</tr>
</tbody>
</table>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="parser" tabindex="-1"><a class="header-anchor" href="#parser" aria-hidden="true">#</a> parser</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Parser<span class="token punctuation">\</span>ExpressionParser</span> <span class="token variable">$parser</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="invoker" tabindex="-1"><a class="header-anchor" href="#invoker" aria-hidden="true">#</a> invoker</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Invoker<span class="token punctuation">\</span>InvokerInterface</span> <span class="token variable">$invoker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> container</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Psr<span class="token punctuation">\</span>Container<span class="token punctuation">\</span>ContainerInterface</span> <span class="token variable">$container</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> __construct</h3>
<p>Application constructor.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token comment">#039;UNKNOWN&amp;#039;, string $version = &amp;#039;UNKNOWN&amp;#039;, \DI\Container|null $container = null): mixed</span>
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
<td><code v-pre>$version</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$container</code></td>
<td><strong>\DI\Container|null</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/InvalidArgumentException.html"><code v-pre>InvalidArgumentException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/RuntimeException.html"><code v-pre>RuntimeException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/InvocationException.html"><code v-pre>InvocationException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/NotCallableException.html"><code v-pre>NotCallableException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Psr/Container/ContainerExceptionInterface.html"><code v-pre>ContainerExceptionInterface</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Psr/Container/NotFoundExceptionInterface.html"><code v-pre>NotFoundExceptionInterface</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> run</h3>
<p>Run the application. This is the entry point of the application.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>InputInterface</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>OutputInterface</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$output</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
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
<td><code v-pre>$input</code></td>
<td><strong>\Symfony\Component\Console\Input\InputInterface|null</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$output</code></td>
<td><strong>\Symfony\Component\Console\Output\OutputInterface|null</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/InvalidArgumentException.html"><code v-pre>InvalidArgumentException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/RuntimeException.html"><code v-pre>RuntimeException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/InvocationException.html"><code v-pre>InvocationException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/NotCallableException.html"><code v-pre>NotCallableException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Throwable.html"><code v-pre>Throwable</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="getdefaultinputdefinition" tabindex="-1"><a class="header-anchor" href="#getdefaultinputdefinition" aria-hidden="true">#</a> getDefaultInputDefinition</h3>
<p>Creates an InputDefinition with the default arguments and options.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">getDefaultInputDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>InputDefinition</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/InvalidArgumentException.html"><code v-pre>InvalidArgumentException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/RuntimeException.html"><code v-pre>RuntimeException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Throwable.html"><code v-pre>Throwable</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="doruncommand" tabindex="-1"><a class="header-anchor" href="#doruncommand" aria-hidden="true">#</a> doRunCommand</h3>
<p>Runs the current command.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">doRunCommand</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span> <span class="token variable">$command</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Input<span class="token punctuation">\</span>InputInterface</span> <span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Console<span class="token punctuation">\</span>Output<span class="token punctuation">\</span>OutputInterface</span> <span class="token variable">$output</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
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
<td><code v-pre>$command</code></td>
<td><strong>\Symfony\Component\Console\Command\Command</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$input</code></td>
<td><strong>\Symfony\Component\Console\Input\InputInterface</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$output</code></td>
<td><strong>\Symfony\Component\Console\Output\OutputInterface</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/Throwable.html"><code v-pre>Throwable</code></RouterLink></li>
</ul>
<hr>
<h3 id="registercommand" tabindex="-1"><a class="header-anchor" href="#registercommand" aria-hidden="true">#</a> registerCommand</h3>
<p>Register a command into the application.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>CommandInterface</span> <span class="token variable">$command</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Application</span>
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
<td><code v-pre>$command</code></td>
<td><strong>\Ninja\Cosmic\Command\CommandInterface</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/InvalidArgumentException.html"><code v-pre>InvalidArgumentException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/InvocationException.html"><code v-pre>InvocationException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/NotCallableException.html"><code v-pre>NotCallableException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="registercommandinenvironment" tabindex="-1"><a class="header-anchor" href="#registercommandinenvironment" aria-hidden="true">#</a> registerCommandInEnvironment</h3>
<p>Register a command into the application if the command is available in the specified environment.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">registerCommandInEnvironment</span><span class="token punctuation">(</span>\Ninja\Cosmic\Command\CommandInterface<span class="token operator">&amp;</span>amp<span class="token punctuation">;</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>EnvironmentAwareInterface</span> <span class="token variable">$command</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$environment</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Application</span>
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
<td><code v-pre>$command</code></td>
<td><strong>\Ninja\Cosmic\Command\CommandInterface&amp;\Ninja\Cosmic\Command\EnvironmentAwareInterface</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$environment</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/NotCallableException.html"><code v-pre>NotCallableException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/InvocationException.html"><code v-pre>InvocationException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="registercommands" tabindex="-1"><a class="header-anchor" href="#registercommands" aria-hidden="true">#</a> registerCommands</h3>
<p>Register commands from the specified paths.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">registerCommands</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$command_paths</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Application<span class="token punctuation">\</span>Application</span>
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
<td><code v-pre>$command_paths</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/NotCallableException.html"><code v-pre>NotCallableException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Psr/Container/NotFoundExceptionInterface.html"><code v-pre>NotFoundExceptionInterface</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/InvocationException.html"><code v-pre>InvocationException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/Psr/Container/ContainerExceptionInterface.html"><code v-pre>ContainerExceptionInterface</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="withcontainer" tabindex="-1"><a class="header-anchor" href="#withcontainer" aria-hidden="true">#</a> withContainer</h3>
<p>Set the container to use for resolving command dependencies.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">withContainer</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Psr<span class="token punctuation">\</span>Container<span class="token punctuation">\</span>ContainerInterface</span> <span class="token variable">$container</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$byTypeHint</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$byParameterName</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$container</code></td>
<td><strong>\Psr\Container\ContainerInterface</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$byTypeHint</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$byParameterName</code></td>
<td><strong>bool</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/InvalidArgumentException.html"><code v-pre>InvalidArgumentException</code></RouterLink></li>
</ul>
<hr>
<h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h3>
<p>Creates a new command from a callable.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token function">command</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$expression</span><span class="token punctuation">,</span> <span class="token keyword">callable</span><span class="token operator">|</span><span class="token keyword type-declaration">string</span> <span class="token variable">$callable</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$aliases</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span>
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
<td><code v-pre>$expression</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$callable</code></td>
<td><strong>callable|string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$aliases</code></td>
<td><strong>array</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/NotCallableException.html"><code v-pre>NotCallableException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="createcommand" tabindex="-1"><a class="header-anchor" href="#createcommand" aria-hidden="true">#</a> createCommand</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">createCommand</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$expression</span><span class="token punctuation">,</span> <span class="token keyword type-hint">callable</span> <span class="token variable">$callable</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span>
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
<td><code v-pre>$expression</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$callable</code></td>
<td><strong>callable</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="createinvoker" tabindex="-1"><a class="header-anchor" href="#createinvoker" aria-hidden="true">#</a> createInvoker</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token function">createInvoker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Invoker<span class="token punctuation">\</span>InvokerInterface</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="createparser" tabindex="-1"><a class="header-anchor" href="#createparser" aria-hidden="true">#</a> createParser</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token function">createParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Parser<span class="token punctuation">\</span>ExpressionParser</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="createparameterresolver" tabindex="-1"><a class="header-anchor" href="#createparameterresolver" aria-hidden="true">#</a> createParameterResolver</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token function">createParameterResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name class-name-fully-qualified return-type"><span class="token punctuation">\</span>Invoker<span class="token punctuation">\</span>ParameterResolver<span class="token punctuation">\</span>ResolverChain</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>This method is <strong>static</strong>.</li>
</ul>
<hr>
<h3 id="defaultsviareflection" tabindex="-1"><a class="header-anchor" href="#defaultsviareflection" aria-hidden="true">#</a> defaultsViaReflection</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">defaultsViaReflection</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\</span>Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command<span class="token punctuation">\</span>Command</span> <span class="token variable">$command</span><span class="token punctuation">,</span> <span class="token keyword type-hint">mixed</span> <span class="token variable">$callable</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
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
<td><code v-pre>$command</code></td>
<td><strong>\Ninja\Cosmic\Command\Command</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>$callable</code></td>
<td><strong>mixed</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li>
<p><RouterLink to="/dev/api/classes/Invoker/Exception/NotCallableException.html"><code v-pre>NotCallableException</code></RouterLink></p>
</li>
<li>
<p><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></p>
</li>
</ul>
<hr>
<h3 id="assertcallableisvalid" tabindex="-1"><a class="header-anchor" href="#assertcallableisvalid" aria-hidden="true">#</a> assertCallableIsValid</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">assertCallableIsValid</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$callable</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><code v-pre>$callable</code></td>
<td><strong>mixed</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></li>
</ul>
<hr>
<h3 id="isstaticcalltononstaticmethod" tabindex="-1"><a class="header-anchor" href="#isstaticcalltononstaticmethod" aria-hidden="true">#</a> isStaticCallToNonStaticMethod</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">isStaticCallToNonStaticMethod</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$callable</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
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
<td><code v-pre>$callable</code></td>
<td><strong>mixed</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Throws:</strong></p>
<ul>
<li><RouterLink to="/dev/api/classes/ReflectionException.html"><code v-pre>ReflectionException</code></RouterLink></li>
</ul>
<hr>
<h3 id="fromcamelcase" tabindex="-1"><a class="header-anchor" href="#fromcamelcase" aria-hidden="true">#</a> fromCamelCase</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">fromCamelCase</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
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
<td><code v-pre>$input</code></td>
<td><strong>string</strong></td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="getthemename" tabindex="-1"><a class="header-anchor" href="#getthemename" aria-hidden="true">#</a> getThemeName</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">getThemeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="enabletheme" tabindex="-1"><a class="header-anchor" href="#enabletheme" aria-hidden="true">#</a> enableTheme</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">private</span> <span class="token function">enableTheme</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$theme</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
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
<td><strong>string</strong></td>
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


