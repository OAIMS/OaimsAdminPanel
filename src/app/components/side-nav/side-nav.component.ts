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
      "displayName": 'Categories Boxes',
      "routeName": 'categories-box'
    },
    {
      "displayName": 'Collection Data',
      "routeName": 'collection-data'
    },
    {
      "displayName": 'Top Selling',
      "routeName": 'top-selling'
    },
    {
      "displayName": 'Featured Products',
      "routeName": 'featured-products'
    },
    {
      "displayName": 'All Products',
      "routeName": 'all-products'
    },

    {
      "displayName": 'Categories & Subcategories',
      "routeName": 'categories-subcategories'
    },
    {
      "displayName": 'Contact Us',
      "routeName": 'contact-us'
    },
    {
      "displayName": 'Orders',
      "routeName": 'orders'
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
