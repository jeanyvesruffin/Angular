import { Injectable } from '@angular/core';
import { IProduct } from './product'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private productUrl = 'api/products/products.json';
    constructor(private http: HttpClient){}
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
        /*[
            {
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
            },
            {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2018",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "assets/images/xbox-controller.png"
            }
        ];*/
    }

}