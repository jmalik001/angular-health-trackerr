import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/Entry';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  showBodyFat = true;
  entries: Entry [];
  constructor(public weightService: WeightEntriesService) { }

  ngOnInit() {
    this.weightService.getEntries().subscribe(entries => {
      this.entries = entries;
    });
  }

  toggleBodyFat()  {
    return this.showBodyFat = !this.showBodyFat;
  }

  updateUIData() {
    return this.weightService.getEntries().subscribe((entries) =>
    {
      this.entries = entries;
    });
  }
  createNewWeightEntry(entry: Entry) {
    this.weightService.addEntry(entry).subscribe(() => {
this.updateUIData();
    }
    )
  }

}
