import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    NavigationStart,
    Router
} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {MatSidenav} from "@angular/material/sidenav";
import {ColorPickerService} from "../../core/services/color-picker.service";
import {ScrollerService} from "../../core/services/scroller.service";
import {filter, map, takeUntil} from "rxjs/operators";
import {MyAppRouterService} from "../../core/services/my-app-router.service";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

    private subKiller$ = new Subject();
    private navigationEndSub$: Subscription
    private state$: Subscription;
    private currentPathName: string;
    private currentStateValue: any;
    @ViewChild('snav') public sidenav: MatSidenav;
    public title = `Architect Hawkins LLC`;

    constructor(private router: Router,
                private activeRoute: ActivatedRoute,
                private colorPickerService: ColorPickerService,
                private scrollerService: ScrollerService,
                private myAppRouterService: MyAppRouterService) {

    }


    ngOnDestroy() {
        this.subKiller$.next()
        this.subKiller$.complete()
    }

    // This will be used for closing the sidenav drawer and scrolling to the top of screen
    ngOnInit() {
        this.initNavigationEndSubscribe();
        //init stateSub
        this.initNavState();
    }

    private initNavState(): void {
        //init stateSub
        this.state$ = this.router.events.pipe(
            filter(e => e instanceof NavigationStart),
            map(() => this.router.getCurrentNavigation().extras.state),
            takeUntil(this.subKiller$),
        ).subscribe((state: any) => {
            console.log('************************************************************state start');
            this.currentStateValue = state ? state.data['sectionId'] : null;
            console.log(`Route sectionId from getCurrentNavigation().extras.state)="${this.currentStateValue}"`);
            console.log('************************************************************state end');
        });
    }

    private initNavigationEndSubscribe(): void {
        //init NavigationEnd subscribe
        this.navigationEndSub$ = this.myAppRouterService.navigationEnd$(this.router.events).pipe(
            takeUntil(this.subKiller$),
        ).subscribe((routerEvent: NavigationEnd) => {
            console.log('initNavigationEndSubscribe fired.................. ');
                this.closeSideNav(routerEvent);
                this.setCurrentPathName(routerEvent);
                this.setScrollToSection();
            }
        );
    }

    public setScrollToSection(): void {
        if (this.currentStateValue) {
            this.scrollerService.scrollToElementId(`#${this.currentStateValue}`); //only scrollToSection when we have a currentStateValue
        }
        this.currentStateValue = null; //reset currentStateValue after scroll complete
    }

    public setCurrentPathName(routerEvent: any): void {
        if (routerEvent instanceof NavigationEnd) {
            // Hide loading indicator
            this.currentPathName = (routerEvent as NavigationEnd).url.substr(1);
            console.log(`currentPageName=${this.currentPathName}`)
        }
    }

    // private showLoader(routerEvent: any): void {
    //     if (routerEvent instanceof NavigationStart) {
    //         // Show loading indicator
    //     }
    //
    //     if (routerEvent instanceof NavigationEnd) {
    //         // Hide loading indicator
    //         //console.log(routerEvent, "end");
    //     }
    //
    //     if (routerEvent instanceof NavigationError) {
    //         // Hide loading indicator
    //
    //         // Present error to user
    //         //console.log(routerEvent.error);
    //     }
    // }

    /**
     * Method will close the side nav and scoll to top of page
     * @param routerEvent
     */
    private closeSideNav(routerEvent: NavigationEnd): void {
        if (this.sidenav && routerEvent instanceof NavigationEnd) {
            this.sidenav.close();
        } else {
            return;
        }
    }

    public isLinkActive(urlSubstring: string): boolean {
        const containsUrlSubstring = this.router.url.includes(urlSubstring);
        return containsUrlSubstring;
    }

    public pickColor(color: string) {
        this.colorPickerService.setColorClass(`${color}`);
    }

    public snavToggle(natSidenav: MatSidenav) {
        natSidenav.toggle();
    }


}
