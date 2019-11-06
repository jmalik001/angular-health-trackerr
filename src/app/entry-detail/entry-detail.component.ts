import { Component, OnInit } from '@angular/core';
import { Entry } from '../model/Entry';
import { WeightEntriesService } from '../weight-entries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
entry: Entry;
  constructor(public entryService: WeightEntriesService,
    private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.currentRoute.snapshot.params.id;
    this.entryService.getEntries().subscribe((entries) => {
this.entry = entries.find(e => {
  return e.id === id;
});
    });
  }

}
