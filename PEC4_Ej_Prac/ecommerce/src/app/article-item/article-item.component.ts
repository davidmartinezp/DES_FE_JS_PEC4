import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article: Article = {
    name: '',
    imageUrl: '',
    price: 0,
    isOnSale: false,
    quantityInCart: 0
  };

  incrementQuantity() {
    if (this.article) {
      this.article.quantityInCart++;
    }
  }
  
  decrementQuantity() {
    if (this.article && this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }

}
