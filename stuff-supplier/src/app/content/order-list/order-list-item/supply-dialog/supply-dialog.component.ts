import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderItem } from 'src/app/models/order-item';

@Component({
  selector: 'app-supply-dialog',
  templateUrl: './supply-dialog.component.html',
  styleUrls: ['./supply-dialog.component.scss']
})
export class SupplyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SupplyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrderItem[],
  ) {}

  @ViewChild('form') form?: ElementRef;

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    console.log(this.form);
    if (!this.form?.nativeElement.className.includes('invalid')) {
    this.data.forEach(data => {
      if (data.quantity && data.providedQuantity)
        data.providedQuantity += data.quantity
    })
    this.dialogRef.close(true);
  }
  }
}
