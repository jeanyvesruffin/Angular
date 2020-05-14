# Angular

Angular est un framework JavaScript qui nous aide à creer des sites Web interactifs.

Angular utilise la syntaxe TypeScript qui suis les normes es7+, ainsi que HTML et CSS.

## Part 1: Introduction
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

## Part 2: Quick starter

Telecharger le projet d'étude à l'adresse url:

https://github.com/DeborahK/Angular-GettingStarted

Installation préalable de:

- npm : Gestionnaire de package de Node.
- Angular, Angular CLI, TypeScript et testing tools, linters, etc...

Les dependances declarees avec leur version sont dans le fichier **package.json**.

Une fois le projet recupere ouvrir un terminal, allez à la racine du projet puis faire

	npm install
	npm start

### Modifier le texte d'accueil

Il faut modifier le fichier src/app/app.component.html.
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

## Metadata

![Exemple Metadata](Documents/metadata.bmp)

## Creation Component

Nous allons remplacer le component "root" app.component.ts par:

	import { Component } from '@angular/core';
	@Component({
	selector: 'pm-root',
	template:`
	<div>
		<h1>{{pageTitle}}</h1>
		<div>My First Component</div>
	</div>
	`
	})
	export class AppComponent  {
	pageTitle: string = 'Gestion entreprise';
	}

**Attention** nous injectons ici directement le templet html à l'aide de `` (back ticks not quotes, touche alt+7)

**CheckList Component: Class**

1 - Donner un nom clair precede de Component (ex: AppComponent), syntaxe PascalCasing avec le mot clé export

	export class AppComponent  {
	}

2 - Ajouter les attributs que l'on type, les valeurs par défaut, syntaxe camelCase commenceant par une minuscule

	export class AppComponent  {
	pageTitle: string = 'Gestion entreprise';
	}

3 - Créer les methodes

**CheckList Component: Decoration -> Metadata**

1 - Ajouter la decoration au component: Prefixe avec @; suffixe avec ().

	@Component()

2 - Ajouter un selecteur (Directive html)  qui sera le nom de notre composant sur la balise HTML, prefixe pour plus de clarté.

	@Component({
	selector: 'pm-root',
	})

3 - Ajouter un template qui sera le HTML injecté dans le navigateur soit par injection soit en important

	@Component({
	selector: 'pm-root',
	template:`
	<div>
		<h1>{{pageTitle}}</h1>
		<div>My First Component</div>
	</div>
	`
	})
