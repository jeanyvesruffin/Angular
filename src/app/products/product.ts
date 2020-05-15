export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
    // calculateDiscount(percent: number): number;
}

/*export class Product implements IProduct {
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
}*/
