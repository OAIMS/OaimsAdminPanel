import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css'],
})
export class DeletePopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  confirm(){
    this.dialogRef.close({data:'You Confirmed'})
  }
  cancel(): void {
    this.dialogRef.close({data:'You Canceled'});
  }
}
