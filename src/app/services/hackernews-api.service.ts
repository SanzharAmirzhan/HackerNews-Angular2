import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HackernewsApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number): Observable<any> {
    let url = this.baseUrl + '/' + storyType.toString() + '?page=' + page.toString();
    return this.http.get(url)
      .map(res => res.json());
  }

  fetchItem(id: number): Observable<any> {
    let url = this.baseUrl + '/item/' + id.toString() + '.json';
    return this.http.get(url).map(res => res.json());
  }

  fetchComments(id: number): Observable<any> {
    let url = this.baseUrl + '/item/' + id.toString();
    return this.http.get(url)
      .map(response => response.json());
  }
}
