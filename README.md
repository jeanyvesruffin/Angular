# Angular

Angular est un framework JavaScript qui nous aide é creer des sites Web interactifs.

Angular utilise la syntaxe TypeScript qui suis les normes es7+, ainsi que HTML et CSS.

## Part 1
### Version

**AngularJS** inclus toutes les versions Angular 1.x.

**Angular** inclus toutes les versions Angular 2+.

### Architecture

- One way Data Flow: Flux de donnees aé sens unique

![One way Data Flow](Documents/dataFlow.bmp)

- Dependency Injection: Injection de dependance

	export class AddNewTagComponent {
		constructeur(private articleSvc: ArticleService) {}
	}
	
- Components: Composants

Custom Components:

	@Component({
		selector: 'add-naw-tag',
	}
	export class addNewTagComponent {
	}
	
Custom Components - HTML

	<div>
		<h1>Hello</h1>
		<add-new-tag></add-new-tag>
	</div>	

- Directives: Directives

Directives - HTML

	<div hover-trigger>
		Hover over me to see
	</div>
	<div appear-on-hover>
		Some content
	</div>


- Templates: Modèles

Templates in Components
	
	@Component({
	selector: 'app-about'
	templateUrl: './about.component.html'
	})
	export class AboutComponent {
	}

Templates in-line Components

	@Component({
	selector: 'app-about'
	template: '<div>
		<h1>Title</h1>
	</div>'
	})
	export class AboutComponent {
	}

- Zone.js et changement de detection

Zone.js permet d'avoir des operations qui s'execute de facon asynchrone, lors d'une interaction utilisateur, lors d'une requete http, suite é un timers ...

- Rendering Targets: Rendu des elements

Le rendu est diffusé sur tous les navigateur et visible sur:

* Browser/DOM
* Server-Side
* Native Mobile Apps  
* Native Desktop Apps
* Other  

### Test tool

Angular contient des outils de test telques:

* TestBed
* Async & fakeAsync
* MockBackend

### Module API

	@NgModule({
		declarations: [ AppComponent, HomeComponent ],
		imports: [ BrowserModule ],
		providers: [ Auth ],
		bootstrap: [ AppComponent ]
	})

## Quick starter

Telecharger le projet d'étude à l'adresse url:

https://github.com/DeborahK/Angular-GettingStarted

Installation préalable de:

- npm : Gestionnaire de package de Node.
- Angular, Angular CLI, TypeScript et testing tools, linters, etc...

Les dependances declarees avec leur version dans le fichier **package.json**.

Une fois le projet recuperer ouvrir un terminal, allez à la racine du projet puis faire

	npm install
	npm start

### Modifier le texte d'accueil

Il faut modifier le fichier src/app/app.component.html
La page du navigateur se met à jour automatiquement.

### Stoper la compilation

Faire Ctrl+C dans le terminal

## Modules

Exemple du modules ES 2015.

Export Module dans product.ts:

	export class Product{
	}

Import Module dans product-list.ts

	import { Product } from './product'

## Component

Il est composé d'un template (View), class (Class) et de metadata (Annotation).

![Exemple Component](Documents/component.bmp)






