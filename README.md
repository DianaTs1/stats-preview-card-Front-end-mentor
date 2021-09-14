# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:
- View the optimal layout depending on their device's screen size


### Side note

I changed the layout a little bit.

### Screenshot

### Desktop

<img width="1680" alt="Screen Shot 2021-09-14 at 4 48 26 PM" src="https://user-images.githubusercontent.com/73934231/133331810-3756a905-aaf8-46bc-bc2a-f1f1a0b70cf8.png">


## Tablet

<img width="706" alt="Screen Shot 2021-09-14 at 4 48 48 PM" src="https://user-images.githubusercontent.com/73934231/133331897-ebf064e4-b4f7-4067-bcc2-91a5cf42279c.png">

## Mobile

<img width="329" alt="Screen Shot 2021-09-14 at 4 49 32 PM" src="https://user-images.githubusercontent.com/73934231/133331952-29e62f8c-07dd-482b-800a-e0ce8b367e98.png">



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I decided to practice with CSS grid in this project. I learned a lot by reading this documentation: https://css-tricks.com/snippets/css/complete-guide-grid/

I also realized that if you want to change the position of an individual grid item you should use both grid-column-start and grid-row-start properties, giving just one property would not get the job done (struggled with this a little bit).

Also I am getting used to the global CSS variables and html landmarks.


```css
.proud-of-this-css {
    :root {
  	--blue-background: hsl(244, 38%, 16%);
  	--soft-violet: hsla(277, 64%, 61%, 0.445);
  	--paragraph-color: hsla(0, 4%, 81%, 0.75);
  	--heading-color: hsla(0, 0%, 100%, 0.6);
  } 
}
```


### Useful resources

https://css-tricks.com/snippets/css/complete-guide-grid/

for grid item positions: https://mozilladevelopers.github.io/playground/css-grid/06-position-items/
