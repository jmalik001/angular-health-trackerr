import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
@Input() showBodyFat: boolean;
@Output() create = new EventEmitter();
model;
  constructor() {
    console.log(this.showBodyFat);
    this.resetModel();
  }

  ngOnInit() {
  }

  createEntry() {
    const newEntry = Object.assign({}, this.model,
      {
      bodyfat : this.model.bodyfat / 100,
      date : new Date(this.model.date),
    });
    this.create.emit(newEntry);
  }

  resetModel() {
      this.model = {};
  }

}
