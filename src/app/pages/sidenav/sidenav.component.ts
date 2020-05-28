import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
    ActivatedRoute,
    Event,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    ParamMap,
    Router
} from '@angular/router';
import {Observable, Subject, Subscription} from 'rxjs';
import {MatSidenav} from "@angular/material/sidenav";
import {paths} from "../../app-routing.module";
import {ColorPickerService} from "../../core/services/color-picker.service";
import {ScrollerService} from "../../core/services/scroller.service";
import {filter, map, takeUntil} from "rxjs/operators";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

    private subKiller$ = new Subject();
    private routerSub$: Subscription
    private state$: Subscription;
    private currentPathName: string;
    @ViewChild('snav') public sidenav: MatSidenav;
    public title = `Architect Hawkins LLC`;

    constructor(private router: Router,
                private activeRoute: ActivatedRoute,
                private colorPickerService: ColorPickerService,
                private scrollerService: ScrollerService) {

    }


    ngOnDestroy() {
        this.subKiller$.next()
        this.subKiller$.complete()
    }

    // This will be used for closing the sidenav drawer and scrolling to the top of screen
    ngOnInit() {
        //init RouteSub
        this.routerSub$ = this.router.events.pipe(
            takeUntil(this.subKiller$),
        ).subscribe((routerEvent: Event) => {
            this.closeSideNav(routerEvent);
            this.showLoader(routerEvent);
            this.setCurrentPage(routerEvent);
        });

        //init stateSub
        this.state$ = this.router.events.pipe(
            filter(e => e instanceof NavigationStart),
            map(() => this.router.getCurrentNavigation().extras.state),
            takeUntil(this.subKiller$),
        ).subscribe((state: any) => {
            console.log('************************************************************state');
            const value = state ? state.data['sectionId'] : null;
            console.log(`Route sectionId "${value}"`);
            if (value) {
                setTimeout(() => { this.scrollerService.scrollToElementId(`#${value}`), 1000 });
            } else {
                this.scrollerService.scrollToTopOfPage();
            }
        });
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

    /**
     * Method will close the side nav and scoll to top of page
     * @param routerEvent
     */
    private closeSideNav(routerEvent: any): void {
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

    public snavToggle(snav) {
        snav.toggle();
    }


}
