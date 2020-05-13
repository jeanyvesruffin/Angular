# Angular

Angular est un framework JavaScript qui nous aide à créer des sites Web interactifs.

Angular utilise la syntaxe TypeScript qui suis les normes es7+.


## Version

**AngularJS** inclus toutes les versions Angular 1.x.

**Angular** inclus toutes les versions Angular 2+.

## Architecture

- One way Data Flow: Flux de données à sens unique

![One way Data Flow](dataFlow.bmp)

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

Zone.js permet d'avoir des opérations qui s'execute de facon asynchrone, lors d'une interaction utilisateur, lors d'une requete http, suite à un timers ...

- Rendering Targets: Rendu des elements

Le rendu est diffusé sur tous les navigateur et visible qur:

* Browser/DOM
* Server-Side
* Native Mobile Apps  
* Native Desktop Apps
* Other  

## Test tool

Angular contient des outils de test telques:

* TestBed
* Async & fakeAsync
* MockBackend

## Module API

	@NgModule({
		declarations: [ AppComponent, HomeComponent ],
		imports: [ BrowserModule ],
		providers: [ Auth ],
		bootstrap: [ AppComponent ]
	})

