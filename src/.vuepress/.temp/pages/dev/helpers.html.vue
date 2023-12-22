<template><div><h1 id="🛟-helpers-documentation" tabindex="-1"><a class="header-anchor" href="#🛟-helpers-documentation" aria-hidden="true">#</a> 🛟 Helpers Documentation</h1>
<h2 id="snakeize-string-input-string" tabindex="-1"><a class="header-anchor" href="#snakeize-string-input-string" aria-hidden="true">#</a> <code v-pre>snakeize(string $input): string</code></h2>
<p>This function converts a given string to snake case. It takes a string as an input and returns the snake case version of the string.</p>
<h2 id="camelize-string-input-string" tabindex="-1"><a class="header-anchor" href="#camelize-string-input-string" aria-hidden="true">#</a> <code v-pre>camelize(string $input): string</code></h2>
<p>This function converts a given string to camel case. It takes a string as an input and returns the camel case version of the string.</p>
<h2 id="value-mixed-value-mixed-args-mixed" tabindex="-1"><a class="header-anchor" href="#value-mixed-value-mixed-args-mixed" aria-hidden="true">#</a> <code v-pre>value(mixed $value, mixed ...$args): mixed</code></h2>
<p>This function returns the value of a variable. If the variable is a closure, it executes the closure with the provided arguments and returns the result.</p>
<h2 id="is-phar-bool" tabindex="-1"><a class="header-anchor" href="#is-phar-bool" aria-hidden="true">#</a> <code v-pre>is_phar(): bool</code></h2>
<p>This function checks if the current script is running within a Phar archive. It returns <code v-pre>true</code> if it is, <code v-pre>false</code> otherwise.</p>
<h2 id="is-git-bool" tabindex="-1"><a class="header-anchor" href="#is-git-bool" aria-hidden="true">#</a> <code v-pre>is_git(): bool</code></h2>
<p>This function checks if the current directory is a Git repository. It returns <code v-pre>true</code> if it is, <code v-pre>false</code> otherwise.</p>
<h2 id="find-binary-string-binary-string" tabindex="-1"><a class="header-anchor" href="#find-binary-string-binary-string" aria-hidden="true">#</a> <code v-pre>find_binary(string $binary): string</code></h2>
<p>This function finds the path of a given binary file. It takes the name of the binary file as an input and returns the path of the binary file.</p>
<h2 id="get-namespace-from-file-string-file-string" tabindex="-1"><a class="header-anchor" href="#get-namespace-from-file-string-file-string" aria-hidden="true">#</a> <code v-pre>get_namespace_from_file(string $file): ?string</code></h2>
<p>This function retrieves the namespace from a given PHP file. It takes the path of the PHP file as an input and returns the namespace of the file.</p>
<h2 id="get-class-from-file-string-file-string" tabindex="-1"><a class="header-anchor" href="#get-class-from-file-string-file-string" aria-hidden="true">#</a> <code v-pre>get_class_from_file(string $file): string</code></h2>
<p>This function retrieves the fully qualified class name from a given PHP file. It takes the path of the PHP file as an input and returns the fully qualified class name.</p>
<h2 id="git-version-string-path-string" tabindex="-1"><a class="header-anchor" href="#git-version-string-path-string" aria-hidden="true">#</a> <code v-pre>git_version(string $path): ?string</code></h2>
<p>This function retrieves the Git version of a given directory. It takes the path of the directory as an input and returns the Git version.</p>
<h2 id="is-root-bool" tabindex="-1"><a class="header-anchor" href="#is-root-bool" aria-hidden="true">#</a> <code v-pre>is_root(): bool</code></h2>
<p>This function checks if the current user is root. It returns <code v-pre>true</code> if the user is root, <code v-pre>false</code> otherwise.</p>
<h2 id="is-nullable-string-property-string-classname-null-bool" tabindex="-1"><a class="header-anchor" href="#is-nullable-string-property-string-classname-null-bool" aria-hidden="true">#</a> <code v-pre>is_nullable(string $property, string $classname = null): bool</code></h2>
<p>This function checks if a given property of a class is nullable. It takes the property name and the class name as inputs and returns <code v-pre>true</code> if the property is nullable, <code v-pre>false</code> otherwise.</p>
<h2 id="sudo-string-command-string-sudo-passwd-null-string" tabindex="-1"><a class="header-anchor" href="#sudo-string-command-string-sudo-passwd-null-string" aria-hidden="true">#</a> <code v-pre>sudo(string $command, ?string $sudo_passwd = null): string</code></h2>
<p>This function runs a given command with sudo privileges. It takes the command and an optional sudo password as inputs and returns the output of the command.</p>
<h2 id="mask-string-string-int-length-null-string" tabindex="-1"><a class="header-anchor" href="#mask-string-string-int-length-null-string" aria-hidden="true">#</a> <code v-pre>mask(string $string, ?int $length = null): string</code></h2>
<p>This function masks a given string. It takes the string and an optional length as inputs and returns the masked string.</p>
<h2 id="pluralize-string-item-string" tabindex="-1"><a class="header-anchor" href="#pluralize-string-item-string" aria-hidden="true">#</a> <code v-pre>pluralize(string $item): string</code></h2>
<p>This function pluralizes a given string. It takes a string as an input and returns the plural form of the string.</p>
<h2 id="git-config-string-key-string" tabindex="-1"><a class="header-anchor" href="#git-config-string-key-string" aria-hidden="true">#</a> <code v-pre>git_config(string $key): ?string</code></h2>
<p>This function retrieves a given Git configuration value. It takes the configuration key as an input and returns the configuration value.</p>
<h2 id="unzip-string-file-string-destination-path-null-bool" tabindex="-1"><a class="header-anchor" href="#unzip-string-file-string-destination-path-null-bool" aria-hidden="true">#</a> <code v-pre>unzip(string $file, ?string $destination_path = null): bool</code></h2>
<p>This function unzips a given zip file. It takes the path of the zip file and an optional destination path as inputs and returns <code v-pre>true</code> if the operation was successful, <code v-pre>false</code> otherwise.</p>
<h2 id="find-env-string" tabindex="-1"><a class="header-anchor" href="#find-env-string" aria-hidden="true">#</a> <code v-pre>find_env(): string</code></h2>
<p>This function finds the environment file in the current directory. It returns the name of the environment file.</p>
<h2 id="replace-string-string-string" tabindex="-1"><a class="header-anchor" href="#replace-string-string-string" aria-hidden="true">#</a> <code v-pre>replace(string $string): string</code></h2>
<p>This function replaces placeholders in a given string. It takes a string as an input and returns the string with the placeholders replaced.</p>
<h2 id="is-cosmic-bool" tabindex="-1"><a class="header-anchor" href="#is-cosmic-bool" aria-hidden="true">#</a> <code v-pre>is_cosmic(): bool</code></h2>
<p>This function checks if the current directory is a Cosmic project. It returns <code v-pre>true</code> if it is, <code v-pre>false</code> otherwise.</p>
<h2 id="randomize-int-length-string" tabindex="-1"><a class="header-anchor" href="#randomize-int-length-string" aria-hidden="true">#</a> <code v-pre>randomize(int $length): string</code></h2>
<p>This function generates a random string of a given length. It takes the length as an input and returns the random string.</p>
<h2 id="termwindize-string-message-string" tabindex="-1"><a class="header-anchor" href="#termwindize-string-message-string" aria-hidden="true">#</a> <code v-pre>termwindize(string $message): string</code></h2>
<p>This function converts a given string to Termwind syntax. It takes a string as an input and returns the Termwind version of the string.</p>
<h2 id="cypher-string-plain-string-key-string" tabindex="-1"><a class="header-anchor" href="#cypher-string-plain-string-key-string" aria-hidden="true">#</a> <code v-pre>cypher(string $plain, string $key): string</code></h2>
<p>This function encrypts a given string using a given key. It takes the string and the key as inputs and returns the encrypted string.</p>
<h2 id="decipher-string-cipher-text-string-key-string" tabindex="-1"><a class="header-anchor" href="#decipher-string-cipher-text-string-key-string" aria-hidden="true">#</a> <code v-pre>decipher(string $cipher_text, string $key): string</code></h2>
<p>This function decrypts a given string using a given key. It takes the encrypted string and the key as inputs and returns the decrypted string.</p>
<h2 id="human-filesize-int-bytes-int-precision-2-string" tabindex="-1"><a class="header-anchor" href="#human-filesize-int-bytes-int-precision-2-string" aria-hidden="true">#</a> <code v-pre>human_filesize(int $bytes, int $precision = 2): string</code></h2>
<p>This function converts a given number of bytes to a human-readable file size. It takes the number of bytes and an optional precision as inputs and returns the human-readable file size.</p>
</div></template>


