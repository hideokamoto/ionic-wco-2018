import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2017-06-24';
  about: {
    title: string,
    description: string,
    date: string,
    imagePath: string,
    location: string
  } = {
    title: '',
    description: '',
    date: '',
    imagePath: '',
    location: ''
  };

  constructor(public confData: ConferenceData) { }
  ionViewDidLoad() {
    this.confData.getAbout().subscribe((aboutData: any) => {
      this.about = aboutData
    })
  }

}
