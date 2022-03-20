import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Order } from 'src/app/models/order';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { SupplyDialogComponent } from './supply-dialog/supply-dialog.component';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  constructor(private httpService: HttpService, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  @Input() order: Order = {} as Order;
  @Output() orderRemoved = new EventEmitter<number>();


  ngOnInit(): void {
  }

  supply(): void {
    const dialogRef = this.dialog.open(SupplyDialogComponent, {
      width: '400px',
      data: this.order.orderItems
    });

    dialogRef.afterClosed().pipe(
      switchMap(result => result ? this.httpService.put('Order/order', this.order) : EMPTY)
    ).subscribe((order: any) => {
      if (order) 
        this.notifySuccess('Order successfully supplied');
    });
  }

  remove(): void {
    this.httpService.delete('Order/order', this.order.id).subscribe((removed: boolean) => {
      if (removed) {
      this.notifySuccess('Order successfully removed');
      this.orderRemoved.emit(this.order.id);
      }
      else 
        this.notifyFail('Failed to remove an order');
    }, () => {
      this.notifyFail('Failed to remove an order');
    });
  }


  private notifyFail(message: string): void {
    this.snackBar.open(message, 'Close', { duration: 2000, verticalPosition: 'top', horizontalPosition: 'center'});
  }

  private notifySuccess(message: string): void {
    this.snackBar.open(message, 'Close', { duration: 2000, verticalPosition: 'top', horizontalPosition: 'center'});
  }
}