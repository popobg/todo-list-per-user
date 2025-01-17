# Schéma
![image](https://github.com/user-attachments/assets/b6aec0b4-f393-4f99-ba41-e034d8ebc2a1)

# Project

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Fonctionnement général
 
1. l'accès à l'application s'effectue directement depuis la page d'authentification.
 
- 2 types d'utilisateurs peuvent accéder à l'application.
 
--> User : il peut afficher uniquement à ses tâches, les valider et les supprimer
--> Admin : peut accéder à l'ensemble des tâches des utilisateurs, les supprimer ou en ajouter, il peut tout voir  tel big brother :D
 
2 Connexion :
 
- un utilisateur se connecte et arrive directement à la mire d'authentification.
 
- Si ce dernier n'est pas connu du système, l'aventure s'arrête ici et un message apparait:
"utilisateur inconnu"
 
- l'utilisateur est connu, il est connecté, la suite au point suivant
 
 
3. Une fois connexion établie
 
Un message de bienvenue avec le nom  de l'utilisateur apparait avec les options qui lui sont propres
