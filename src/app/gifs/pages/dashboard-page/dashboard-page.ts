import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideMenuHeader} from '../../components/side-menu/side-menu-header/side-menu-header';
import {SideMenuOptions} from '../../components/side-menu/side-menu-options/side-menu-options';
import {SideMenu} from '../../components/side-menu/side-menu';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    SideMenu
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css'
})
export default class DashboardPage {

}
