import {Injectable} from '@angular/core';
import {fromEvent, interval, Observable} from "rxjs";
import {filter, map, pairwise, throttle} from "rxjs/operators";


export interface Position {
    scrollHeight: number,
    scrollTop: number,
    clientHeight: number
}


@Injectable({
    providedIn: 'root'
})
export class ScrollerService {

    private _scrollPercent: number = 80;
    public scrollObservable$ = new Observable();

    constructor() {
        this.initScrollObs();
    }


    private initScrollObs(): void {
        this.scrollObservable$ = fromEvent<Event>(window, "scroll").pipe(throttle(() => interval(500)));
    }

    public scrollToTopOfPage(): void {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    public scrollToElement(elementId: string): void {
        const element = document.querySelector(elementId);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        } else {
            throw `Error with EgrScrollToDirective: '${elementId}' element not found on page.`;
        }
    }


    public onScrolledDown$(ignorePercentage: boolean = false): Observable<[Position, Position]> {
        return this.scrollObservable$
            //.pipe(throttle(() => interval(500))) dont think i need to throttle since scrollObservable$ already does
            .pipe(
                map((event: Event) => {
                        const value = {
                            scrollHeight: window.document.documentElement.scrollHeight,
                            scrollTop: window.document.documentElement.scrollTop || window.document.body.scrollTop,
                            clientHeight: window.document.documentElement.clientHeight
                        } as Position;
                        console.log(value, 'scrollDown');
                        return value;
                    }
                ))
            .pipe(pairwise<Position>())
            .pipe(filter((positions: [Position, Position]) =>
                this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(ignorePercentage, positions[1]))
            );
    }

    public onScrolledUp$(): Observable<[Position, Position]> {
        return this.scrollObservable$
            //.pipe(throttle(() => interval(500))) dont think i need to throttle since scrollObservable$ already does
            .pipe(
                map((event: Event) => {
                        const value = {
                            scrollHeight: window.document.documentElement.scrollHeight,
                            scrollTop: window.document.documentElement.scrollTop || window.document.body.scrollTop,
                            clientHeight: window.document.documentElement.clientHeight
                        } as Position;
                        console.log(value, 'scrollUp');
                        return value;
                    }
                ))
            .pipe(pairwise<Position>())
            .pipe(filter((positions: [Position, Position]) =>
                this.isUserScrollingUp(positions))
            );
    }


    private isScrollExpectedPercent(ignorePercentage: boolean, position: Position) {
        if (ignorePercentage) {
            return true; //do nothing since ignore true
        }
        return ((position.scrollTop + position.clientHeight) / position.scrollHeight) > (this._scrollPercent / 100);
    }

    private isUserScrollingDown(positions: Array<Position>) {
        return positions[0].scrollTop < positions[1].scrollTop;
    }

    private isUserScrollingUp(positions: Array<Position>) {
        console.log(positions[0], positions[1], positions[0].scrollTop > positions[1].scrollTop, "values for up");

        return positions[0].scrollTop > positions[1].scrollTop;
    }
}



