import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  offers: Offer[] = [];

  ngOnInit(): void {
    this.httpService.get<Offer>('Offer/offers').subscribe((offers: Offer[]) => {
      this.offers = offers;
    });
  }
}
