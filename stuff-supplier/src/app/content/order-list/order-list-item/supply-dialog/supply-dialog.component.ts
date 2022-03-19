import { Component, Inject, OnInit } from '@angular/core';
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

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}