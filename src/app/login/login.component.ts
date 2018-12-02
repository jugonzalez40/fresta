import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  private giffs: Observable<any>;
  private httpClient :HttpClient ;
  private images :Array<String> = [];
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;



  }

  ngOnInit() {
    this.giffs = this.httpClient.get('https://api.giphy.com/v1/gifs/search?api_key=u3uWS5zfyE3kZ955zjJ3T2lV2f3yNjWv&q=random&limit=100&offset=0&rating=R&lang=en');

    this.giffs.subscribe((data)=>{
      data.data.forEach(d=>{
        this.images.push(d.images.fixed_height_small.url);
      });
    })
  }

}
