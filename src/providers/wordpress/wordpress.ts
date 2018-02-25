import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WordpressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WordpressProvider {

  constructor(public http: Http) {
    console.log('Hello WordpressProvider Provider');
  }
  getPosts() {
    return this.http.get('https://2017.kyoto.wordcamp.org/wp-json/wp/v2/posts')
  }

}
