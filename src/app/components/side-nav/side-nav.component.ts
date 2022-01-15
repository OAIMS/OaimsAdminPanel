import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavInterface } from './interface/NavInterface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  userProfile: NavInterface[] = [
    {
      "displayName": 'Banners',
      "routeName": 'banner'
    },
    {
      "displayName": 'Carousel',
      "routeName": 'carousel'
    },
    {
      "displayName": 'Pending Application',
      "routeName": 'pending_appointments'
    },
    {
      "displayName": 'Appointments History',
      "routeName": 'appointment-history'
    }
    // 'User Information', 'Medical History', 'Medicine Status',
  ];

  constructor(private route_: Router) { }

  ngOnInit(): void {
  }
  loadUserInformationComponent(componentName: string) {
    console.log(componentName)
    this.route_.navigate([
      `${componentName.toLowerCase()}`,
    ]);

  }

}
