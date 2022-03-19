import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = "Stuff Supplier";
  newOrderButtonText = "New request";
  newOfferButtonText = "New offer";

}
