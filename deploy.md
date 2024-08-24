# Deployment steps

## Uploading files

I recommend combining all js/css files for components and overrides into combined files. Then adding any additional files alongside these in dedicated directories:

```
combined.css
combined.js
blog/
├─ header-reduction.css
├─ tardis-container.css
media/
├─ up-arrow.png
```

Then deploying this as a static site using Cloudflare/GitHub pages or a dedicated CDN.

## Using files

Add the combined files to the sitewide code injection header:

```html
<link rel="stylesheet" href="https://components.example.com/combined.css"/>
<script defer src="https://components.example.com/combined.js"></script>
```

And for any page specific files, open the page editor and again use code injection inside the header:

```html
<link rel="stylesheet" href="https://components.example.com/blog/tardis-container.css"/>
<link rel="stylesheet" href="https://components.example.com/blog/header-reduction.css"/>
```

Finally, save the HTML templates found inside this repo as [editor snippets](https://ghost.org/help/snippets/) and use accordingly.
