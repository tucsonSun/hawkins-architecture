import {Injectable, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {filter, map, pairwise, takeUntil} from "rxjs/operators";
import {
    ActivatedRoute,
    Event,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
    RouterEvent
} from "@angular/router";
import {Position} from "./scroller.service";

@Injectable({
    providedIn: 'root'
})
export class MyAppRouterService implements OnInit {



    constructor() {
    }

    ngOnInit(): void {}


    public navigationStart$(routerEventsObs$: Observable<Event>): Observable<NavigationStart> {
        return routerEventsObs$
            .pipe(filter((event: Event) =>
                event instanceof NavigationStart
            )).pipe(
                map((event: Event) => {
                        return event as NavigationStart; //do nothing just pass thru result
                    }
                ));
    }

    public navigationEnd$(routerEventsObs$: Observable<Event>): Observable<NavigationEnd> {
        return routerEventsObs$
            .pipe(filter((event: Event) =>
                event instanceof NavigationEnd
            )).pipe(
                map((event: Event) => {
                        return event as NavigationEnd; //do nothing just pass thru result
                    }
                ));
    }

    public navigationError$(routerEventsObs$: Observable<Event>): Observable<NavigationError> {
        return routerEventsObs$
            .pipe(filter((event: Event) =>
                event instanceof NavigationError
            )).pipe(
                map((event: Event) => {
                        return event as NavigationError; //do nothing just pass thru result
                    }
                ));
    }

}
