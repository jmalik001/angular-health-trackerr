import { Injectable } from '@angular/core';
import { Entry } from './model/Entry';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {
  constructor(private http: HttpClient) {

  }
  public sortedEntries: Entry[];

  getEntries() {
    return this.http.get<Entry[]>('http://localhost:3000/entries').pipe(
      map(entries => {
        return entries.map((entry: Entry) => {
          entry.date = new Date(entry.date);
          return entry;
        });
      }),
      map(entries => {
        return entries.sort((a: Entry, b: Entry) => {
          if (a.date > b.date) {
            return 1;
          } else if (a.date.getTime() === b.date.getTime()) {
            return 0;
          } else {
            return -1;
          }
        });
      })
    );
  }

  addEntry(entry: Entry) {
    return this.http.post('http://localhost:3000/entries', entry);
  }

}
