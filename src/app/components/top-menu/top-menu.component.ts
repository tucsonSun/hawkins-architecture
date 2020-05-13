import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent implements OnInit, OnDestroy{

  private subscribeKiller = new Subject();

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.initRouterSub();
    this.initShowHomeMenuLinks();
  }

  ngOnDestroy() {
    this.subscribeKiller.next()
    this.subscribeKiller.complete()
  }

  // public initRouterSub(): void {
  //   this.router.events.pipe(takeUntil(this.subscribeKiller)).subscribe((val) => {
  //     // see also
  //     console.log(val);
  //     console.log(this.router.url);
  //   });
  // }

  public initShowHomeMenuLinks(): boolean {
    console.log(this.router.url);
    if (this.router.url === '/home') {
      return true;
    }
    return false;
  }
}
