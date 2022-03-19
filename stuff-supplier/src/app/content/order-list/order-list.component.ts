import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  orders: Order[] = [];

  ngOnInit(): void {
    this.httpService.get<Order>('Order/orders').subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }
}
