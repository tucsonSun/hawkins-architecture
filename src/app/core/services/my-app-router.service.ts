import {Injectable, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {filter, map, pairwise, takeUntil, throttle} from 'rxjs/operators';
import {
    ActivatedRoute,
    Event,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
    RouterEvent
} from '@angular/router';
import {Position} from './scroller.service';

@Injectable({
    providedIn: 'root'
})
export class MyAppRouterService {



    constructor() {
    }


    public navigationStart$(routerEventsObs$: Observable<Event>): Observable<NavigationStart> {
        return routerEventsObs$
            .pipe(filter((event: Event) => event instanceof NavigationStart))
            .pipe(
                map((event: Event) => {
                        return event as NavigationStart; // do nothing just pass thru result
                    }
                ));
    }

    public navigationEnd$(routerEventsObs$: Observable<Event>): Observable<NavigationEnd> {
        return routerEventsObs$
            .pipe(filter((event: Event) =>  event instanceof NavigationEnd))
            .pipe(
                map((event: Event) => {
                        return event as NavigationEnd; // do nothing just pass thru result
                    }
                ));
    }

    public navigationError$(routerEventsObs$: Observable<Event>): Observable<NavigationError> {
        return routerEventsObs$
            .pipe(filter((event: Event) => event instanceof NavigationError))
            .pipe(
                map((event: Event) => {
                        return event as NavigationError; // do nothing just pass thru result
                    }
                ));
    }


    /**
     * The navigation state that was previously supplied to the `pushState` call,
     * when the navigation is triggered by a `popstate` event. Otherwise null.
     *
     * The state object is defined by `NavigationExtras`, and contains any
     * developer-defined state value, as well as a unique ID that
     * the router assigns to every router transition/navigation.
     *
     * From the perspective of the router, the router never "goes back".
     * When the user clicks on the back button in the browser,
     * a new navigation ID is created.
     *
     * Use the ID in this previous-state object to differentiate between a newly created
     * state and one returned to by a `popstate` event, so that you can restore some
     * remembered state, such as scroll position.
     *
     */
    public backButton$(routerEventsObs$: Observable<Event>): Observable<NavigationEnd> {
        const navigationStart$ = this.navigationStart$(routerEventsObs$);

        return navigationStart$
            .pipe(filter((eventNav: NavigationStart) => eventNav.restoredState && eventNav.restoredState != null))
            .pipe(throttle(() => interval(300)))
            .pipe(
                map((result: any) => {
                        // // This "restoredState" property is defined when the navigation
                        // // event is triggered by a "popstate" event (ex, back / forward
                        // // buttons). It will contain the ID of the earlier navigation event
                        // // to which the browser is returning.
                        // // --
                        // // CAUTION: This ID may not be part of the current page rendering.
                        // // This value is pulled out of the browser; and, may exist across
                        // // page refreshes.
                        //
                        // if ( result.restoredState ) {
                        //
                        //     console.log(
                        //         "restoring navigation id:",
                        //         result.restoredState.navigationId
                        //     );
                        //     console.log(result.restoredState);
                        //
                        // }

                        return result; // do nothing just pass thru result
                    }
                ));
    }
}
