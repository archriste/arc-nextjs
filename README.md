# christe.co
<sup>Built on [Next.js](https://github.com/vercel/next.js) with [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss), hosted by Vercel.</sup>

## Contact 💌

If you have any feedback or suggestions, feel free to email me at **alain@christe.co**. Or if you just want to chat, that's fine too!

## Introduction 📌
After hand-coding my [last portfolio website](https://github.com/archriste/old-portfolio-website/) with Tailwind CSS and jQuery, I ran into a few [issues](https://github.com/archriste/old-portfolio-website/blob/main/README.md#known-issues-) relating to performance, responsiveness, and build/deploy times. These issues didn't prevent content from loading properly but caused an unacceptable impact on the user experience.

To remedy this, I decided that I would rewrite the site in a framework that would not only enable faster development and load times but also provide greater control over content served to the user. Wanting to try something new, I chose Next.js.

At first, it seemed that there were a few practical drawbacks, such as porting a single page application that wouldn't initially be able to take advantage of page routing. Nevertheless, I appreciated the active community and the opportunity to expand my knowledge of modern frameworks. Simple as it may be at the moment, I've learned a lot so far from reworking my portfolio.

I'm looking forward to updating the site regularly; stay tuned!

## Notable features and dependencies 🚀

### Next.js
Loaded with functionality out of the box, developing on Next.js is relatively straightforward. I found that troubleshooting was occasionally difficult where the online documentation was lacking but it was easy to trace errors through the code. Next.js is exceptionally well-built.
- Component-based design allows the project grids to be rendered dynamically from an external source, which is currently performed locally by mapping project items from [lib/projects.js](lib/projects.js).
- Images are optimized through the Image component and served from Imgix references to an [image directory](public/img) hosted on the repo.
- Being able to use the local dev server has cut incremental rebuild and deployment times by nearly an order of magnitude.
- Third-party React components like [react-scroll](https://github.com/fisshy/react-scroll) allow for a more standardized UX than was previously possible through CSS alone and decrease reliance on scripts.

### Tailwind CSS
When I first started using Tailwind in the original site, I wasn't convinced that it made my life any easier because the amount of repetition seemed verbose and I often felt I'd be better off with default CSS. However, using it in a React context made me realize that the utility it provides is indispensable. Tailwind makes styles legible at a glance, especially when applying classes with ternary operators or template literals.

### Font Awesome
A toolkit we all know and love. Thanks for giving us so many great icons free of charge.

### Prettier
An honorable mention - the usefulness of Prettier isn't obvious in production but customizable formatting makes a big difference in keeping code consistent and legible. Plugins work great when it comes to [ordering Tailwind classes](https://github.com/tailwindlabs/prettier-plugin-tailwindcss), too.

## To-do 💭
- Add blog directory
- Improve mobile functionality across browsers
- Add content to "About" section
- Improve text positioning and responsive styling in project components
- Rework project components to allow a maximize toggle on click that shows description and links, rework styling

## Known issues 🛠️
Future issues will be listed under the issues tab.
- [x] ~~**(Mobile)** Overscroll appears to vary across browsers~~
  - ~~*Potential fix:* Re-evaluate overscroll styles and gain a better understanding of the DOM~~
- [ ] **(Mobile)** Contact item background doesn't appear fixed or animated
  - *Potential fix:* Change the background from styled with CSS to an element-based approach in contact item component

Future problems will be accounted for in GitHub Issues.
