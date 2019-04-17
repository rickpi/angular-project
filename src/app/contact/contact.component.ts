import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rtz-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  standard = {
    firstname: 'Virginie',
    lastname: 'Yes',
    role: 'Accueil',
    award: '',
    phoneNumber: '01-01-01-01-01'
  };

  sommelier = {
    firstname: 'Jean',
    lastname: 'Poivrot',
    role: 'Sommelier',
    award: 'Meilleur Ouvrier de France 2007',
    phoneNumber: '02-02-02-02-02'
  };

  boucher = {
    firstname: 'Didier',
    lastname: 'LeGras',
    role: 'Boucher',
    award: 'Meilleur Ouvrier de France 2016',
    phoneNumber: '03-03-03-03-03'
  };

  zoomedPhoneNumber = '';

  constructor() { }

  ngOnInit() {
  }

  displayBig(userPhoneNumber: string) {
    this.zoomedPhoneNumber = userPhoneNumber;
  }
}
