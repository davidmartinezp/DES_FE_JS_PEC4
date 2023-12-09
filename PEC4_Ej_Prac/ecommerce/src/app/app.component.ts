import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';

  listaArticulos: Article[] = [
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

