# Contributing to EPIC-UI

Thank to everyone who wants to help build this awesome framework. This file will introduce you to the project guidelines.
If you have questions or you dont understand something join the team's slack https://epic-uiworkspace.slack.com/ .
There is always someone online to guide you if you don't understand something or have more questions.

## Understanding what is EPIC-UI framework
The complete framework's idea is to stop people from coding html and make them copy paste from our docs.
For example, if you're backend dev and you're ready with the backend of a website and you need a pixel perfect layout,
just search EPIC-UI's premade layouts/snippets for (e.g.) online stores and make them function with the backend. 
#### !!! Until the whole css is finished we dont need javascript contributions !!!
### Javascript framework
EPIC-UI's purpose is to reduce the need to install project must use dependencies such as:
axios, jquery, alert packages, animations packages, css frameworks or do any dependency management in a project.
The framework already includes packages like axios, moment, sweetalert and has built in commands for using them
### CSS Framework !IMPORTANT
### What's the goal
Before we start developing the js framework we need to finish all component layouts and css functionalities.
As I mentioned in the javascript section, the goal is to cover all use cases and must have components. But that's not all,
the fully finished css framework must have:
- Our own grid system
- All required components for web development like - Navbars, tags, buttons, tabs etc..
- Class helpers like: text-center, text-md-center, pt-1 (padding-top: 10), pl-1, mt-1 etc..
- Premade snippets for shopping carts, multiple footer variations, multiple header variations, jumbotron variations and more..
- Premade layouts with multiple versions for every type of website: portfolios, web stores, admin panels and more
- GIA (gsap-inline-animations library) finished. Checkout about GIA here https://github.com/epicbg/gsap-inline-animations

# Getting started

## Installing the project
This project is using laravel-mix to compile, but we're about to change to change to gulp.
Make sure to check frequently for critical/major updates which will affect the workflow we've hand until now.
To check the commands available you can go to root directory - `package.json` and for mix file `webpack.mix.js`

- Fork the repository and download/clone it
- `npm install` to download all dependencies
- `npm run ui:watch` to start watcher for changes


## Creating / modifying the css framework
All the components are in `src/scss/components`. To add a component create new file in the directory and include it in `src/scss/components/_all.scss`. It will automatically get compiled when you add it.

## Testing your work and changes
Project has folder called `examples` in root directory. This folder is used for show case of a component which will be added later in the documentation. For example today you feel like creating footer designs, for which we have `src/scss/components/footer.scss` file, write your code there in new root class (for example .footer1) and then you can write the html in `examples/footers.html` to test it. We expect working demos, don't be worried about your code quality/structure, we or maybe another collaborator are inspect everything line by line and fixing it to match our expectations.

## Issues we need help for
Don't push yourself for these issues if you want to do them. Maybe you've come to create something which doesnt exist in the framework, thats awesome! But if you have experience with issues below you can lend us a hand.

#### Switch from laravel-mix to gulp
https://github.com/epicbg/epic-ui/issues/10

#### Write our own grid system
https://github.com/epicbg/epic-ui/issues/6
