<template><div><h1 id="🛠️-commands" tabindex="-1"><a class="header-anchor" href="#🛠️-commands" aria-hidden="true">#</a> 🛠️ Commands</h1>
<h3 id="step-1-implementing-and-extending" tabindex="-1"><a class="header-anchor" href="#step-1-implementing-and-extending" aria-hidden="true">#</a> Step 1: Implementing and extending</h3>
<p>To create a new command, you need to create a class that implements the <code v-pre>CommandInterface</code>, you can leverage the <code v-pre>CosmicCommand</code> class by extending it. This class implements the required interface and provides a set of methods and properties that are common to all commands.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command</span><span class="token punctuation">;</span>  
  
<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCommand</span> <span class="token keyword">extends</span> <span class="token class-name">CosmicCommand</span>  
<span class="token punctuation">{</span>  
    <span class="token comment">// Command implementation goes here  </span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-2-use-attributes-to-define-command-metadata" tabindex="-1"><a class="header-anchor" href="#step-2-use-attributes-to-define-command-metadata" aria-hidden="true">#</a> Step 2: Use Attributes to Define Command Metadata</h3>
<p>Attributes are used to define metadata about the command. Here are the attributes you can use:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command</span><span class="token punctuation">;</span>  
  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Icon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'👽'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'my_command'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Description</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'This is my command'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Signature</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'my_command [--argument=] [--option]'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Argument</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'argument'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'This is an argument'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Option</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'--option'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'This is an option'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'default_value'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Alias</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"mycommand:alias"</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Env</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"DEV"</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Env</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"STAGING"</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Hidden</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Decorated</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">false</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCommand</span> <span class="token keyword">extends</span> <span class="token class-name">CosmicCommand</span> <span class="token keyword">implements</span> <span class="token class-name">CommandInterface</span>  
<span class="token punctuation">{</span>  
    <span class="token comment">// CommandInterface methods implementation goes here  </span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> Name</h4>
<p>Defines the command name, can be name-spaced, the namespace separator is the colon character. (😃</p>
<h4 id="alias-repeatable" tabindex="-1"><a class="header-anchor" href="#alias-repeatable" aria-hidden="true">#</a> Alias (Repeatable)</h4>
<p>Defines the possible aliases for the command, the command will work the same if called by its main name or any of the defined aliases.</p>
<h4 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> Icon</h4>
<p>Defines the icon of the command that will be shown in the command list. It supports any unicode defined emoji, but, depending on the terminal/console capabilities, some icons, the simpler ones, displays better than the rest.</p>
<h4 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h4>
<p>Defines the description of the command that will appear in the command list. The description supports styling via custom defined tags like <code v-pre>&lt;comment&gt;&lt;/comment&gt;</code> or <code v-pre>&lt;info&gt;&lt;/info&gt;</code>. Besides styling, description support replacements, See <code v-pre>Replacer</code> documentation to see how this feature works.</p>
<h4 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h4>
<p>Defines the command's signature, which includes the command name and its arguments. Every option or argument defined in the signature should have a correspondent option attribute defining it. Below you can check for the different types and combinations of options and arguments that can be defined in the signature.</p>
<h5 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h5>
<p>A command can take arguments:</p>
<table>
<thead>
<tr>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Required argument</td>
<td><code v-pre>greet name</code></td>
</tr>
<tr>
<td>Optional argument</td>
<td><code v-pre>greet [name]</code></td>
</tr>
<tr>
<td>Array argument with 0-n values</td>
<td><code v-pre>greet [name]*</code></td>
</tr>
<tr>
<td>Array argument with 1-n values</td>
<td><code v-pre>greet name*</code></td>
</tr>
</tbody>
</table>
<h5 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h5>
<p>A command can take options:</p>
<table>
<thead>
<tr>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Simple flag (boolean value)</td>
<td><code v-pre>greet [--yell]</code></td>
</tr>
<tr>
<td>Option with an mandatory value</td>
<td><code v-pre>greet [--iterations=]</code></td>
</tr>
<tr>
<td>Option that can be used 0-n times (array value)</td>
<td><code v-pre>greet [--iterations=]*</code></td>
</tr>
<tr>
<td>Option with a shortcut</td>
<td><code v-pre>greet [-y|--yell]</code></td>
</tr>
</tbody>
</table>
<p>Options are always optional. If an option is required, then it should be an argument.</p>
<h5 id="hyphens" tabindex="-1"><a class="header-anchor" href="#hyphens" aria-hidden="true">#</a> Hyphens</h5>
<p>Arguments and options containing hyphens (<code v-pre>-</code>) are matched to camel case variables:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command</span><span class="token punctuation">;</span>  
  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Signature</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'my_command [--argument-with-hyppen=]'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Option</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'--argument-with-hypen'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'This is an argument with hypen'</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCommand</span> <span class="token keyword">extends</span> <span class="token class-name">CosmicCommand</span> <span class="token keyword">implements</span> <span class="token class-name">CommandInterface</span>  
<span class="token punctuation">{</span>  
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token keyword type-declaration">string</span> ·argumentWithHypen<span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="option-repeatable" tabindex="-1"><a class="header-anchor" href="#option-repeatable" aria-hidden="true">#</a> Option (Repeatable)</h4>
<p>Defines an option for the command. <strong>Options</strong> are always optional by default, and  they start with a double dash in its name, if an option should be required, then it should be an argument. Options can have a description and a default value, that can be defined as the second and third parameter of the attribute.</p>
<h4 id="argument-repeatable" tabindex="-1"><a class="header-anchor" href="#argument-repeatable" aria-hidden="true">#</a> Argument (Repeatable)</h4>
<p>Defines an argument for the command. Arguments can have a description and a default value, that can be defined as the second and third parameter of the attribute.</p>
<h4 id="env-repeatable" tabindex="-1"><a class="header-anchor" href="#env-repeatable" aria-hidden="true">#</a> Env (Repeatable)</h4>
<p>Defines the environments where the command is enabled, if this attribute is not present the command will be always enabled. This is useful if you need to define commands that should be disabled in certain environments, for example, a command that flushes databases could be disabled in PROD environment.</p>
<p>Commands that are suitable to be enabled or disabled in a certain environment should implement the <code v-pre>EnvironmentAwareInterface'. CosmicCommand</code> class, via the <code v-pre>CommandAttributeTrait</code> already implements the methods exposed by the interface.</p>
<h4 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> Hidden</h4>
<p>If this attribute is present, the command will not appear in the command list, this attribute doesn't disable the command, just hide it from the list. If you need to disable a command, you can use the <code v-pre>Env</code> attribute to completely enable or disable a command depending on the running environment.</p>
<h4 id="decorated" tabindex="-1"><a class="header-anchor" href="#decorated" aria-hidden="true">#</a> Decorated</h4>
<p>If this attribute is present and set to false, the command output will be stripped for any ANSI, escape sequence and any other eye-candy decoration.</p>
<h3 id="step-4-implement-the-notifiableinterface-optional" tabindex="-1"><a class="header-anchor" href="#step-4-implement-the-notifiableinterface-optional" aria-hidden="true">#</a> Step 4: Implement the <code v-pre>NotifiableInterface</code> (Optional)</h3>
<p>The <code v-pre>NotifiableInterface</code> provides a contract for commands that need to display success or error OS notification. It defines two methods that your command class can implement:  If the interface is defined and the messages are set, the command will display a OS notification, using the Notifier class, with the configured messages for the success and failure results of the command.</p>
<p>The messages defined in this methods support placeholder replacements, for more information on how to use this feature, please refer to <code v-pre>Replacer</code> documentation.</p>
<ul>
<li><code v-pre>getSuccessMessage()</code>: Returns the success message.</li>
<li><code v-pre>getErrorMessage()</code>: Returns the error message.</li>
</ul>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command</span><span class="token punctuation">;</span>  
  
<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCommand</span> <span class="token keyword">extends</span> <span class="token class-name">CosmicCommand</span> <span class="token keyword">implements</span> <span class="token class-name">NotifiableInterface</span>  
<span class="token punctuation">{</span>  
    <span class="token comment">// CommandInterface methods implementation goes here  </span>
  
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getSuccessMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>  
    <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token string single-quoted-string">'Command {{ command.name }} executed successfully'</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getErrorMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>  
    <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token string single-quoted-string">'Command {{ command.name }} execution failed'</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-5-implement-the-command-logic" tabindex="-1"><a class="header-anchor" href="#step-5-implement-the-command-logic" aria-hidden="true">#</a> Step 5: Implement the Command Logic</h3>
<p>The command logic should be implemented in the <code v-pre>__invoke()</code> method. This method is called when the command is executed.  The method will receive the options and parameters defined in the command signature, check the following example for more clarity.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">Ninja<span class="token punctuation">\</span>Cosmic<span class="token punctuation">\</span>Command</span><span class="token punctuation">;</span>  

<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Icon</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"📚"</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'quote'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Signature</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'quote [--book=] [--author=] [--all]'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Description</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Display a random quote from a book or an author'</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Alias</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"tell"</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Option</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"--book"</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"The book to get a quote from"</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Option</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"--author"</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"The author to get a quote from"</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>  
<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Option</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"--all"</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"Get all the quotes from the author or book"</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCommand</span> <span class="token keyword">extends</span> <span class="token class-name">CosmicCommand</span>  
<span class="token punctuation">{</span>  
    <span class="token comment">// CommandInterface methods implementation goes here  </span>
  
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$book</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$author</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$all</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>  
        <span class="token comment">// Command logic goes here  </span>
  
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That's it! You've created a new command. If you place the command inside the <code v-pre>src/Command</code> folder then it will be auto-magically registered in the application, if not you need to register it in a manual way, to learn how to register commands in your application, please refer to <code v-pre>Application</code> documentation.</p>
</div></template>


