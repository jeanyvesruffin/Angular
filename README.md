# Angular

Angular est un framework JavaScript qui nous aide à creer des sites Web interactifs.

Angular utilise la syntaxe TypeScript qui suis les normes es7+, ainsi que HTML et CSS.

Nous recupererons des styles sur https://getbootstrap.com/ et pour les icones utiliserons la librairie awesome https://fontawesome.com

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

Zone.js permet d'avoir des operations qui s'execute de facon asynchrone, lors d'une interaction utilisateur, lors d'une requete http, suite à un timers ...

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

Une fois le projet recupere ouvrir un terminal, allez à la racine du projet puis faire.

	npm install
	npm install bootstrap
	npm install font-awesome

Tapper enfin la ligne de commande suivante pour compiler et executer le programme dans votre navigateur.

	npm start

### Modifier le texte d'accueil

Il faut modifier le fichier src/app/app.component.html.
La page du navigateur se met à jour automatiquement.

### Stoper la compilation

Faire Ctrl+C dans le terminal

## Export/ Import de classe

Export dans product.ts de la classe Product:

	export class Product{
	}

Import Product dans product-list.ts

	import { Product } from './product'

## Component

Il est composé d'un template (View), class (Class) et de metadata (Annotation).

![Exemple Component](Documents/component.bmp)

## Metadata

![Exemple Metadata](Documents/metadata.bmp)

## Creation Component/ Templates, interpolation et directive

Exemple: Creation d'un component gérant une liste de produit.

### Création component

Nous allons ajouter le component "pm-products" dans le fichier product-list.component.

1 - Création folder "products"

2 - Céation du component "product-list.component.ts":

	import { Component } from '@angular/core';
	@Component({
		selector: 'pm-products',
		templateUrl: './product-list.component.html'
		})
	export class ProductListComponent  {
		pageTitle: string = 'Product List';
	}

3 - Importer dans le fichier styles.css les librairie bootstrap et font-awesome:

	@import "~boostrap/dist/css/bootstrap.min.css";
	@import "~font-awesome/css/font-awesome.min.css";

### Création templet

Dans le fichier html "product-list.component.html".

* Ajout du style **Card** bootstrap [card](https://getbootstrap.com/docs/4.5/components/card/)
* Ajout du systeme **Grid** bootstrap [grid](https://getbootstrap.com/docs/4.5/layout/grid/#offset-classes)
* Ajout du system **Table responsive** bootstrap [table-responsive](https://getbootstrap.com/docs/4.5/content/tables/#breakpoint-specific/)
* Ajout d'un **Tableau** bootstrap [table](https://getbootstrap.com/docs/4.5/content/tables/)
* Ajout d'un **Bouton** bootstrap [btn](https://getbootstrap.com/docs/4.5/components/buttons/#button-tags/)

### Creation directive

1 - Utiliser le component pour y injecter la directive pm-products, dans app.component.ts.

	@Component({
		selector: 'pm-root',
		template: `
		...
			<pm-products></pm-products>
		</div>
		`
	})

Oubien indiquer dans TempletUrl: 'chemin d'acces au fichier html'.
Puis dans le fichier html injecter la directive.

Dans le fichier app.component.ts

	templateUrl:'app.component.html',

Dans le fichier app.component.HTML
	<pm-products></pm-products>

2 - Ajouter le component dans le module concerné app.module.ts

	...
	import { ProductListComponent } from './products/product-list.component';
	...
	@NgModule({
	declarations: [
		...
		ProductListComponent
	],
	...
	})

### Binding avec interpolation

![Exemple Interpolation](Documents/Interpolation.bmp)

Exemple de directive dans le fichier Html:

	<directive></directive>

Correspondant à la directive du component:

	@Component({
		selector: 'directive',
		...
	})

Exemple de directive integre:

	*ngIf
	*ngFor
	*ngSwitchCase
	*mgModel ...

*Remarque:* l'asterisque signifie que c'est une directive structurel d'Angular.

Exemple de directive integre ***ngIf** dans le fichier Html

	<table class="table" *ngIf="products && products.length">
           
Cette directive signifie que si products et products.length retourne vrai alors on affiche la list (Produit, Code, Disponibilité ...) dans le cas contraire elle ne sera pas affichée.

Nous avons donc hardcode une list de produit, celle-ci serait exposé à travers une api coté back.

Dans le fichier product-list.component.ts

	...
	export class ProductListComponent {
		...
		products: any[] = [
			{
				"productId": 2,
				"productName": "Garden Cart",
				"productCode": "GDN-0023",
				"releaseDate": "March 18, 2019",
				"description": "15 gallon capacity rolling garden cart",
				"price": 32.99,
				"starRating": 4.2,
				"imageUrl": "assets/images/garden_cart.png"
			}
			...
		];
	}

Exemple de directive integre ***ngFor** dans le fichier Html

	<tr *ngFor='let product of products'>
		<td></td>
		<td>{{ product.productName }}</td>
		<td>{{ product.productCode }}</td>
		<td>{{ product.releaseDate }}</td>
		<td>{{ product.price }}</td>
		<td>{{ product.starRating }}</td>
	</tr>
           
Cette directive permet d'afficher pour chaque produit de produits : productName, productCode, releaseDate, price, starRating.

Rappel **for...of vs for...in**

![for...of vs for...in](Documents/forInVsForOf.bmp)

## Data binding et pipes

### Property binding

	<img [src]="product.imageUrl">

Dans cet exemple le binding se fait à l'aide des [] suivi de la source mais peut etre fait avec une expression entre {{}} ou par interpolation.

		<img src={{product.imageUrl}>
		<img src="http://openclipart.org/{{product.imageUrl}}">
		<img [src]="product.imageUrl"
            [title]="product.productName"
            [style.width.px]="imageWidth">

### Event binding

Ressource utile repectoriant tous les events possible: 
https://developer.mozilla.org/en-US/docs/web/events

	<button (click)="toggleImage()">

click est le target event et toggleImage le template Statement.

1 - Ecrir la methode toggleImage dans product-list.component.ts

	toggleImage(): void {
		this.showImage = !this.showImage;
	};

2 - Mettre en place l'event sur le bouton dans product-list.component.html

	<button class="btn btn-primary" (click)="toggleImage()">
		Montrer image
	</button>

3 - Puis on ajoute la logic qui affichera ou pas la list suivant l'etat du bouton dans product-list.component.html à l'aide de *ngIf.

	<tr *ngFor='let product of products'>
		<td>
			<img *ngIf="showImage"
			[src]="product.imageUrl"
			[title]="product.productName"
			[style.width.px]="imageWidth"
			[style.margin.px]="imageMargin">
		</td>
	...

4 - Nous allons enfin binding le text du bouton afin qu'il change suivant l'evenement click.

	<button class="btn btn-primary"
		(click)="toggleImage()">
			{{ showImage ? "Cacher":"Montrer" }} image
	</button>

### Liaison bidirectionnelle

Exemple sur le filtre.

Nous utiliserons la directive ngModel [(ngModel)].

1 - Ajouter la propriete dans product-list.component.ts

	listFilter: string = "cart"

2 - Ajouter la directive ngModel dans product-list.component.html.

  [(ngModel)]="listFilter"

3 - Puis utiliser l'interpolation pour changer le texte saisi

	<h4>Filtré par : {{listFilter}}</h4>

4 - Nous devons enfin import le FormModule dans app.module.ts

	...
	import { FormsModule } from '@Angular/forms';
	...
	@NgModule({
	...
		imports: [
		...
			FormsModule
		],
	...

### Transformer les datas avec des pipes

Exemple de specification lowercase:

	{{product.productCode | lowercase }}

1 - Nous voulons par exemple que le nom du produit commence par une majuscule alors dans product-list.component.html.

	<img [src]='product.imageUrl'
		 [title]='product.productName | uppercase' >

Ou s'il on veux le prix en minuscule

	{{ product.price | currency | lowercase }}

Et en $, avec comme parametres 'USD', symbol et digit info (minimum digit) :

	{{ product.price | currency: 'USD':'symbol':'1.2-2' | lowercase }}

1.2 signifie 1 digit à gauche, 2 deux digit a gauche et limité à 2 digit à gauche

	...
	<td>{{ product.productCode | lowercase }}</td>
	<td>{{ product.price | currency:'EUR':'symbol':'1.2-2' }}</td>
	...

![data binding](Documents/dataBinding.bmp)

## Interface

1 - Exemple creer un fichier product.ts dans lequel nous ecrirons notre interface :

	export interface IProduct {
		productId: number;
		productName: string;
		productCode: string;
		releaseDate: Date;
		price: number;
		description: string;
		startRating: number;
		imageUrl: string;
		calculateDiscount(percent: number): number;
	}

2 - Puis nous remplacerons le type any du parametre products par l'interface dans product-list.component.ts

	...
	import { IProduct } from './product';
	...
	product: IProduct[]
	...

Le typage fort permet de lever les eventelles erreurs de syntaxes car les attributs membre de la classe doivent parfaitement match avec ceux de l'interface.

3 - Nous allons maintenant creer la class implementant l'interface dans product.ts avec son constructeur.

	export class Product implements IProduct {
		constructor(public productId: number,
		public productName: string,
		public productCode: string,
		public productDate: string,
		public price: string,
		public description: string,
		public starRating: string,
		public imageUrl: string){
		}
		calculateDiscount(percent: number): number{
			return this.price - (this.price * percent / 100);
		}
	}

## Encapsulation du style Css au component

![Encapsulation Css](Documents/encapsulationCss.bmp)

1 - On creer le fichier css associé au component products

	thead{
		color: #337AB7
	}

2 - Puis nous ajoutons le style à notre component. Nous pouvons ici y ajouter autant de feuilles de style que l'on souhaite:

	@Component({
		...
		styleUrls:['./product-list.component.css']
	})

## Cycle de vie d'un component

![Cycle de vie d'un component](Documents/lifeCycle.bmp)

OnInit: Effectue l'initialisation du component, avec la récupération des datas, par exemple.

Onchanges: Effectue une action apres modification des proprietes d'entree lors d'un click bouton, par exemple.

OnDestry: Effectue le nettoyage

1 - Par exemple, nous pouvons utiliser l'implementation OnInit dans la classe ProductListComponent afin de définir la methode ngOnInit et par la suite initialiser la liste de produit.

	```js
	...
	import { Component, OnInit } from '@angular/core';
	...
	export class ProductListComponent implements OnInit {
		...
	ngOnInit(): void {
		console.log('Initialisation component list produit');
	};
		...
	}
	```

Nous verrons s'afficher le message d'initialisation dans la console.log

## Transformation des datas avec des custom pipes

Nous allons remplacer les tirets (-) des codes produits par des espaces.

1 - Dans le dossier shared creer un fichier convert-to-spaces.pipe.ts

	import { Pipe, PipeTransform } from '@angular/core';
	@Pipe({
		name: 'convertToSpaces'
	})
	export class ConvertToSpacesPipe implements PipeTransform {
		transform(value: string, character: string): string {
			return value.replace(character, ' ');
		}
	}

2 - Utilisation du pipe dans product-list.component.html

	<td>{{ product.productCode | lowercase | convertToSpaces: '-' }}</td>

3 - Ajouter le custom pipe dans le app.module.ts

	...
	import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
	@NgModule({
		declarations: [
		...
		ConvertToSpacesPipe
		],
	...

**ATTENTION : Une recompilation est à faire lorsque l'on effectue un changement dans app.module.ts**

## Getter

![Getter](Documents/getter.bmp)

## Setter

![Setter](Documents/setter.bmp)

## getter/ setter simple sans traitement particulier

 ![Getter & setter](Documents/getterSetter.bmp)

## Filtrer une list

1 - Declarer un attribut de type interface, ici IPrudct[] dans product-list.component.ts:

	filteredProducts: IProduct[];

2 - Generer getter & setter de listFilter à l'aide de l'IDE

	private _listFilter: string;
	public get listFilter(): string {
		return this._listFilter;
	}
	public set listFilter(value: string) {
		this._listFilter = value;
	}

3 - Puis on ajoute à la methode set listFilter la nouvelle attribution de valeur a filteredProducts sur condition que listFilter soit renseigné filtré, dans ce cas on appel la methode performFilter sinon on retourne toute mla liste non filtrée.

	this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;

4 - On creer la methode performFilter() retournant la nouvelle liste de produits filtrée.

	performFilter(filterBy: string): IProduct[] {
		// filterBy est insensitive à la casse (toLocaleLowerCase())
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}

Plus d'information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

5 - on creer un constructeur pour initialiser le filtre:

	constructor(){
		this.filteredProducts = this.products;
		this.listFilter = 'cart'
	}

6 - On change dans le templet la directive *ngFor pour y bind le filtre

	<tr *ngFor='let product of filteredProducts'>

## Construction d'un component imbriqué (poupé russe) Nested Component

Exemple sur la colonne Evaluation nous y ajouterons un component de selection representé par des etoiles.

### Construction component imbriqué
 ![Nested component](Documents/nestedComponent.bmp)

1 - Creation star.component.ts avec ces fichiers html et css associés

* star.component.html

    ```html
	<div class="crop"
		[style.width.px]="starWidth"
		[title]="rating">
	<div style="width: 75px">
		<span class="fa fa-star"></span>
		<span class="fa fa-star"></span>
		<span class="fa fa-star"></span>
		<span class="fa fa-star"></span>
		<span class="fa fa-star"></span>
	</div>
	</div>
	```

* star.component.css

	.crop {
	overflow: hidden;
	}
	div {
	cursor: pointer;
	}

* star.component.ts

Rappel:

 1. Creation @Component + import
 2. A l'interieur de @Component:
	* selector
	* templateUrl
	* styleUrls
 3. Declaration de la classe

	export class NameComponent {
		attribut
		methode
		...
	}

 4. et (ou) implement un event (ex: onchange) sur la class + implementation interface

	export class NameComponent implements OnChanges {
		attribut;
		// retour attendu de la methode sans parametre
		ngOnChange():void{}
	}

Exemple:

	import { Component, OnChanges } from '@angular/core';
	@Component({
		selector: 'pm-star',
		templateUrl: './star.component.html',
		styleUrls: ['./star.component.css']
	})
	export class StarComponent implements OnChanges {
		//Propriets, qui seront bind sur le html à l'aide des []
		rating: number = 4;
		starWidth: number = 4;
		ngOnChanges(): void {
			this.starWidth = this.rating * 75 / 5;
		}
	}

5. Toujours finir par renseigner le app.module

	@NgModule({
  	declarations: [
    ...
    StarComponent
  ],
  ...
  
### Utilisation du component imbriqué

- On remplace {{ product.ranking }} par la directive pm-star est l'atttribut bind [rating]='product.starRating'

	<td><pm-start [rating]='product.starRating'></pm-start></td>

### Passer des datas au component imbriqué en utilisant @Input

Nous devons juste ajouter la decoration @Input() devant l'attribut que l'on desire mettre dans le composant imbriqué

### Passer des datas au component imbriqué en utilisant @Output (emit)

Nous desirons que l'evaluation soit retourné dans le titre de la page

 1. On ajoute l'event dans le fichier html

	<div class="crop"
     [style.width.px]="starWidth"
     [title]="rating"
     (click)="onClick()">

 2. On cree la methode onClick avec un console.log par exemple

	onClick():void{
        console.log("L'evaluation de ${this.rating} est selectionné")
    }

 3. Ajouter la decoration @Output() devant l'attribut que l'on souhaite surveiller, attribut membre à la classe EventEmitter, afin qu'il nous retourne son changement d'état.

 	@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

 4. On utilise cet attribut en utilisant la methode emit d'EventEmitter

	this.ratingClicked.emit(`L'evaluation de ${this.rating} est selectionné`)

 5. Nous pouvons desormais indiquer notre attribut dans product-list.component.html en lui donnant la valeur retourné par la methode onRatingClicked($event)

	<td><pm-star [rating]='product.starRating' 
                 (ratingClicked)='onRatingClicked($event)'>
		</pm-star></td>

 6. On cree la methode onRatingClicked($event) dans product-list.component.ts.

	onRatingClicked(message: string): void{
		this.pageTitle ='List de produit '+ message;
	};

## Injection de services et de dependences

### Construction de service (utile pour logging initialiser des datas...)
Un service doit etre independant et autonome.
Par exemple service de logging.

Exemple de service de data de produit 

 1. Create la classe service
 2. definir les metadata avec les decorations
 3. Importer se dont on a besoin

- Creer nouveau file product.service.ts dans le dossier product

	import { Injectable } from '@angular/core';
	import { IProduct } from './product'

	@Injectable()
	export class ProductService {
		getProducts(): IProduct[] {
			return [
				{
					"productId": 2,
					"productName": "Garden Cart",
					"productCode": "GDN-0023",
					"releaseDate": "March 18, 2019",
					"description": "15 gallon capacity rolling garden cart",
					"price": 32.99,
					"starRating": 4.2,
					"imageUrl": "assets/images/garden_cart.png"
				}
			];
		}
	}

- Enregistrer votre service

	@Injectable({
		providedIn: 'root'
	})


- Puis utiliser le service en l'injectant dans le constructeur dans product-list.component.ts.

	constructor(private productService: ProductService){
		this.filteredProducts = this.products;
		this.listFilter = 'cart'
	}

Puis en l'initialisant dans

	ngOnInit(): void {
		this.products = this.productService.getProducts();
		console.log('Initialisation component list produit');
	};

## Récupération de données à l'aide de Http
Reactive Extensions for JavaScript (RxJS): 
Est une bibliothèque de programmation réactive utilisant des observables qui facilite la composition de code asynchrone ou basé sur le rappel.

**Documentation sur RxJS :https://rxmarbles.com/**

### Extensions observable et reactive

![RxJS](Documents/RxJS.bmp)

Par convention l'observable est noté, par exemple:

	const source$: Observable<number>

![composition des opérateurs](Documents/Observable.bmp)

### Envoi de requete Http

 1. Ajouter la librairy http au fichier app.module.ts

	import { HttpClientModule } from '@angular/common/http';
	@NgModule({
		declarations: [
		...
		],
		imports: [
		...
			HttpClientModule
		],
	...

 2. Dans le fichier product.service.ts, creer un constructeur prenant en parametre une instance d'HttpClient() + declarer un attribut pointant sur l'url de l'api (ici l'api est en local).
 
 Nous pouvons utiliser l'api en local car nous avions definie dans le fichier angular.json src/api:

	"projects": {
		"APM": {
		...
			"assets": [
			"src/favicon.ico",
			"src/assets",
			"src/api"
			],
		...


Dans le fichier product.service.ts

	constructor(private http: HttpClient){}
	private productUrl = 'api/products/product.json';

On peux desormais supprimer les produits hard code pour les remplacer par la list observé telquel:

	import { Observable } from 'rxjs';
	...
	export class ProductService {
		private productUrl = 'api/products/products.json';
		constructor(private http: HttpClient){}
		getProducts(): Observable<IProduct[]> {
			return this.http.get<IProduct[]>(this.productUrl);
		}
	}

Pour toutes envoi de requete http, il est nécessaire de mettre en place les Exception Handling pour traiter les requetes qui echoue ou qui sont incorrect:

	private handleError(err:HttpErrorResponse){
		let errorMessage = '';
		if (err.error instanceof ErrorEvent){
			errorMessage = `Une erreur est apparue : ${err.error.message}`;
		} else {
			errorMessage = `Le code retourné par le serveur : ${err.status}, message d'erreur est : ${err.message}`;
		}
		console.error(errorMessage);
		return throwError(errorMessage);
		};
		getProducts(): Observable<IProduct[]> {
			return this.http.get<IProduct[]>(this.productUrl).pipe(
			tap(data => console.log('Tous : ' + JSON.stringify(data))),
			catchError(this.handleError)
		);
	}

### Sousciption à un observable

	x.subscribe(Observable)
	x.subscribe({
		nextFn,
		errorFn,
		completeFn
	})

![Subscribe d'un observable](Documents/subscribeObservable.bmp)

Dans product-list.component.ts. this.products est en erreur.
En effet suite à la mise en place de l'observable, this.productService.getProduct() nous retournera un type Observable<IProduct[]>, changeons cela:

	...
	errorMessage: string;
	...
	ngOnInit(): void {
		this.productService.getProducts().subscribe({
			next: products => this.products = products,
			error: err => this.errorMessage = err
		});
		console.log('Initialisation component list produit');
	};
	...
	 
Le programme est en erreur ??? Voyons le cheminement:

![Cheminement](Documents/analyse_1.bmp)

1. Angular initialise productService(1)
2. ProductService nous retourne une list d'Observable<IProduct[]>
3. Nous souscrivons l'observable
4. La requete Get est soumise puis nous executons la ligne suivante (next ou error 3.)
5. L'executions nous rempli alors notre filteredProducts mais nous n'avons pas de data...

Dans un second temps

![Cheminement](Documents/analyse_2.bmp)

1. Le service reçoit la reponse http de la requete. La data en reponse est mappé dans un tableau de produit. La reponse achemine les operations et observable emits par le subscribe
2. Notre subscriber recoit les datas emis.
3. Et assigne nos proprietes de produits dans notre tableau de produit emit.

Mais comme nous avons liés dans filteredProducts les produits, nous n'avons pas notifié que nous voulons maintenant recuperer la liste de produits.

Le problème est ici il faut que nous notifions le fait de vouloir remplir notre filtre de produit lors de la subscrition de la requete Get next comme ceci:

	ngOnInit(): void {
		this.productService.getProducts().subscribe({
			next: products => {
				this.products = products;
				this.filteredProducts = this.products;
			},
			error: err => this.errorMessage = err
		});
		console.log('Initialisation component list produit');
	};

Le programme fonctionne et nous pouvons voir dans la console de debug du navigateur, la reponse, le json.