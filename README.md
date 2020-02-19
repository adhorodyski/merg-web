# merg.app Frontend

###### Project uses [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

Whole application has a shared project structure. Angular for web, NativeScript for mobile. [Docs](https://docs.nativescript.org/angular/code-sharing/intro) for how this architecture works.

## Prerequisites

- Download **NativeScript Playground** & **NativeScript Preview** apps from the App Store/Google Play Store.

- If using Webstorm, install the **NativeScript plugin** to avoid errors with importing a single component into multiple modules.

- You'll also need some global packages. Simply run:

    `yarn global add nativescript @angular/cli webpack-cli`

## Development

- Web:

    `yarn start -o`

- Mobile:

    `tns preview`
    
    Scan the given QR code using the NativeScript Playground app.

## Code scaffolding

Use regular `ng` commands for creating components, services etc. 

Follow [these docs](https://angular.io/cli/) for further information.
