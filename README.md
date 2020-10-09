# HawkinsArchitecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## GitHUB Pages Dply
Step 1: Run `npm install -g angular-cli-ghpages` First install the angular-cli-ghpages globally:

Step 2: Run `ng build --prod --base-href "<repo-name>"` Now use the Angular CLI with the --base-href flag to build your project and set the correct base href location:
    
    Example `ng build --prod --base-href "https://architecthawkins.github.io/hawkins-architecture/"` 


Step 3: Run `ngh --dir dist/hawkins-architecture` to dply the generated dist/hawkins-architecture folder


Step 4: Validate that `gh-pages` branch was created:
    
    Example `https://github.com/architecthawkins/hawkins-architecture/branches` 

Step 5: Make repository public (otherwise GitHubPages is not free)

Step 6: Go to github.com/<repoName> -> Settings -> GitHub Pages
    
    Example: Your site is ready to be published at https://architecthawkins.github.io/hawkins-architecture/

Step 7: In order for your site to be published, a Jekyll theme must be chosen, even if you don’t use Jekyll at all.

See GitHub Resources

https://alligator.io/angular/deploying-angular-app-github-pages/
https://www.telerik.com/blogs/quick-angular-2-hosting-angular-cli-github-pages
https://www.youtube.com/watch?v=ACFBy8PI7J0
