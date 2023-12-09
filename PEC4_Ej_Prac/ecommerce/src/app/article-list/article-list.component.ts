import { Component } from '@angular/core';

@Component({
  selector: 'app-article-list',
  template: `<div *ngFor="let article of articles">
                <app-article-item [article]="article"></app-article-item>
             </div>`,
  styles: ``
})
export class ArticleListComponent {
  articles = [
    {
      name: 'JavaScript y Angular: De los fundamentos del lenguaje al desarrollo de una aplicación web',
      imageUrl: '../assets/JSYAngular.jpg',
      price: 28.41,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      name: 'AngularJS',
      imageUrl: '../assets/AngularJS.jpg',
      price: 36.10,
      isOnSale: false,
      quantityInCart: 0
    },
    {
      name: 'El gran libro de Angular',
      imageUrl: '../assets/AngularGranLibro.jpg',
      price: 23.56,
      isOnSale: true,
      quantityInCart: 0
    }
  ];
}
