import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  classList: any;
  classListKeys: string[];
  searchText: string;
  searchResult: string;

  constructor(private http: HttpClient) {
    http.get('./assets/class-email-dictionary.json', { responseType: 'text' })
      .subscribe(data => {
        this.classList = JSON.parse(data);
        this.classListKeys = Object.keys(this.classList);
      }
    );
  }
    search() {
    let email = this.classList[this.searchText];
    if (email) {this.searchResult = email;} 
    else {this.searchResult = 'No Such a Name Found ' + this.searchText + ' Please Enter Another Name';}
  }
}



