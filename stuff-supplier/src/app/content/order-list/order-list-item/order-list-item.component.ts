import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  constructor() { }

  @Input() order: Order = {} as Order;


  ngOnInit(): void {
  }
}