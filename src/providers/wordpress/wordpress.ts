import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WordpressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WordpressProvider {

  constructor(public http: Http) {}
  getPosts() {
    return this.http.get('https://2018.osaka.wordcamp.org/wp-json/wp/v2/posts')
  }

}
