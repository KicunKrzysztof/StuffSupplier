import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../../../models/offer';

@Component({
  selector: 'app-offer-list-item',
  templateUrl: './offer-list-item.component.html',
  styleUrls: ['./offer-list-item.component.scss']
})
export class OfferListItemComponent implements OnInit {

  @Input() offer: Offer = {} as Offer;

  constructor() { }

  ngOnInit(): void {
  }
}
