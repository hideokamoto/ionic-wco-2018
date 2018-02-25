import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { WordpressProvider } from '../../providers/wordpress/wordpress'

/**
 * Generated class for the BlogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blogs',
  templateUrl: 'blogs.html'
})
export class BlogsPage {
  posts: {
    ID: number,
    title: {
      rendered: string
    },
    content: {
      rendered: string,
    },
    date: string,
  }[] = [];

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public wp: WordpressProvider) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.wp.getPosts()
      .subscribe( data => {
        this.posts = JSON.parse(data['_body'])
        loading.dismiss();
      })
  }

}
