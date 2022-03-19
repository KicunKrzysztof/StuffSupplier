import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { Address } from '../models/Address';
import { OrderItem } from '../models/OrderItem';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  constructor() { }

  status = 'new';
  title = 'potrzeba mi pieluszek, go...'

  ngOnInit(): void {
  }
}