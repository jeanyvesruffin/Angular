import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
	selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'List de produit';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	errorMessage: string;
	private _listFilter: string;
	public get listFilter(): string {
		return this._listFilter;
	}
	public set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}
	filteredProducts: IProduct[];
	products: IProduct[] = [
		/*{
			"productId": 2,
			"productName": "Garden Cart",
			"productCode": "GDN-0023",
			"releaseDate": "March 18, 2019",
			"description": "15 gallon capacity rolling garden cart",
			"price": 32.99,
			"starRating": 4.2,
			"imageUrl": "assets/images/garden_cart.png"
		},
		{
			"productId": 5,
			"productName": "Hammer",
			"productCode": "TBX-0048",
			"releaseDate": "May 21, 2019",
			"description": "Curved claw steel hammer",
			"price": 8.9,
			"starRating": 4.8,
			"imageUrl": "assets/images/hammer.png"
		}*/
	];
	toggleImage(): void {
		this.showImage = !this.showImage;
	};
	ngOnInit(): void {
		// this.products = 
		this.productService.getProducts().subscribe({
			next: products => {
				this.products = products;
				this.filteredProducts = this.products;
			},
			error: err => this.errorMessage = err
		});
		console.log('Initialisation component list produit');
	};
	performFilter(filterBy: string): IProduct[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
	};
	onRatingClicked(message: string): void{
		this.pageTitle ='List de produit '+ message;
	};
	constructor(private productService: ProductService){
		/*this.filteredProducts = this.products;
		this.listFilter = 'cart'*/
	}
}