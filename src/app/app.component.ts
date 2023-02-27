import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }
    initializeApp() {
      this.platform.ready().then(() => {
        const firebaseConfig = {
          apiKey: "AIzaSyBDSJGzSuUEzG23QueQgaNZ11Fxg5QYyqk",
          authDomain: "csd228-c21e1.firebaseapp.com",
          projectId: "csd228-c21e1",
          storageBucket: "csd228-c21e1.appspot.com",
          messagingSenderId: "168882523408",
          appId: "1:168882523408:web:9042566b87c459c8186995",
          measurementId: "G-538B3FGXBR"
      }
      firebase.initializeApp(firebaseConfig);
      });
      }
}
