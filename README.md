# T-10 Robotics Website

Built with [Hugo](https://gohugo.io/)

> **Why [Hugo](https://gohugo.io/)?**
> 
> T-10 needs a blog website that
> - can be published to the internet easily (GitHub Pages)
> - has the source hosted to everyone in the club (on GitHub)
> - doesn't require knowledge of web technologies to create new blog posts (rules out JavaScript frameworks)
> - can be served blazingly fast (GitHub Pages + static content)
> - can be regenerated blazingly fast (Hugo)
> - is modern, standard, and supportive with no extra overhead (Hugo handles RSS, robots.txt, and markdown rendering)

## Writing posts

### Emojis
`emojify` is used, so emojis are supported. A full list of emoji codes [can be found here.](https://www.webfx.com/tools/emoji-cheat-sheet/)

Example:
```markdown
# Hello World

:smile: There is a smile emoji to the left of this text.
```

# Development

## Here's what left to do

### MVP
- [ ] Make responsive
- [ ] Update links to social media
    - [ ] YouTube
    - [ ] Instagram
    - [ ] Twitter (?)

### Improve
- [ ] Add team schedule
- [ ] Clean up the CSS
    - [ ] Make it easier to read an understand
    - [ ] Possibly switch to SASS or SCSS
    - [ ] Make some CSS specific to only certain pages instead of making it all global
- [ ] Fill in information
    - [ ] Add contact us form
    - [ ] Add sponsors
- [ ] Revamp index
    - [ ] Change the index video to a robotics related one
    - [ ] Add more to the index
    - [ ] Add color and movement
- [ ] Make social icons more stylish
    - [ ] Add color
    - [ ] Add movement
- [ ] Add "Subscribe to RSS" button on list pages

## File structure
This does not cover [Hugo's file structure](https://gohugo.io/getting-started/directory-structure/#directory-structure-explained), but rather **project specific** organization practices.

### `/assets/css`
- CSS files for the site
- They DO NOT go in `/static/css`
    - They are merged into a large minified CSS file and fingerprinted [(in this file, line 8)](layouts/partials/head.html).
- This really needs to be cleaned up

### `/static/fonts`
- Font files for the site

### `/static/img/content`
- For images that appear in blog posts
- The format is: `/static/img/content/{section}/{file name}`
    - where 
        - `{section}` is normally `posts` because posts live in `/content/`**`posts`**
        - `{file name}` is the name of the file in `/content/posts`
            - For example: if adding images to `/content/posts/robot-update-1.md`, the static image path is `/static/img/content/`**`posts`**`/`**`robot-update-1`**