# WordPress Stage Switcher

A WordPress plugin that allows you to switch between different environments from the admin bar.

![WordPress Stage Switcher](https://roots.io/app/uploads/plugin-stage-switcher-800x450.png)

## Requirements

You'll need to have `ENVIRONMENTS` and `WP_ENV` defined in your WordPress config.

The `ENVIRONMENTS` constant must be a serialized array of `'environment' => 'url'` elements:

```php
$envs = [
  'development' => 'http://example.dev',
  'staging'     => 'http://staging.example.com',
  'production'  => 'http://example.com'
];
define('ENVIRONMENTS', serialize($envs));
```

`WP_ENV` must be defined as the current environment:

```php
define('WP_ENV', 'development');
```

If you use [Bedrock](https://github.com/roots/bedrock), `WP_ENV` is already defined in the config.

## Installation

This plugin must be installed via Composer. Add wp-stage-switcher to your project's dependencies:

```sh
composer require roots/wp-stage-switcher 2.0.0
```

Or manually add it to your `composer.json`:

```json
"require": {
  "php": ">=5.4.0",
  "wordpress": "4.4.2",
  "roots/wp-stage-switcher": "2.0.0"
}
```

## Support

Use the [Roots Discourse](http://discourse.roots.io/) to ask questions and get support.
