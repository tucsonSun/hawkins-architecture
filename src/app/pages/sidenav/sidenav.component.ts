import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import {MatSidenav} from "@angular/material/sidenav";
import {paths} from "../../app-routing.module";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  public showSubmenuProfile = false;
  public showSubmenuHome = false;
  private routerSub: Subscription;
  private currentPathName: string;
  @ViewChild('snav') public sidenav: MatSidenav;
  title = `Architect Hawkins LLC`;

  constructor(private router: Router,) {

  }


  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  // This will be used for closing the sidenav drawer and scrolling to the top of screen
  ngOnInit() {
    this.routerSub = this.router.events.subscribe(routerEvent => {
      this.closeSideNav(routerEvent);
      this.showLoader(routerEvent);
      this.setCurrentPage(routerEvent);
      this.setShowHideSubmenus();
    });
  }

  private setShowHideSubmenus(): void {
    //reset all to false first
    this.showSubmenuProfile = false;
    this.showSubmenuHome = false;

    if (this.currentPathName && this.currentPathName.includes(paths.HOME)) {
      this.showSubmenuHome = true;
    }
    else if (this.currentPathName && this.currentPathName.includes(paths.PORTFOLIO)) {
      this.showSubmenuProfile = true;
    }
    else {
      return; //do nothing
    }
  }

  public setCurrentPage(routerEvent: any): void {
    if (routerEvent instanceof NavigationEnd) {
      // Hide loading indicator
      this.currentPathName = (routerEvent as NavigationEnd).url.substr(1);
      console.log(`currentPageName=${this.currentPathName}`)
    }
  }

  private showLoader(routerEvent: any): void {
    if (routerEvent instanceof NavigationStart) {
      // Show loading indicator
    }

    if (routerEvent instanceof NavigationEnd) {
      // Hide loading indicator
      //console.log(routerEvent, "end");
    }

    if (routerEvent instanceof NavigationError) {
      // Hide loading indicator

      // Present error to user
      //console.log(routerEvent.error);
    }
  }

  public closeSideNavAction(): void {
    setTimeout(() =>{ this.sidenav.close(); }, 1000);
  }
  /**
   * Method will close the side nav and scoll to top of page
   * @param routerEvent
   */
  private closeSideNav(routerEvent: any):void {
    if (this.sidenav && routerEvent instanceof NavigationEnd) {
      this.sidenav.close();
      window.scrollTo(0, 0);
    }
    else {
      return;
    }
  }
  // openThemeMenu() {}
  // pickColor(color: string) {
  //   let colorTheme = '';
  //   if (color !== '') {
  //     colorTheme = `-${color}`;
  //   }
  //   this.colorPicker.setColorClass(
  //     `angular-material-router-app-theme${colorTheme}`
  //   );
  // }
  snavToggle(snav) {
    snav.toggle();
  }


}
