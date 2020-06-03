import {Injectable} from '@angular/core';
import {fromEvent, interval, Observable} from "rxjs";
import {filter, map, pairwise, throttle} from "rxjs/operators";


export interface Position {
    scrollHeight: number,
    scrollTop: number,
    clientHeight: number,
    isTopOfPage: boolean,
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
        this.scrollObservable$ = fromEvent<Event>(window, "scroll").pipe(
            throttle(() => interval(300))
        );
    }

    public scrollToTopOfPage(): void {
        //FYI: For some reason window.scrollTo didnt work when position:fix in parent
        window.scrollTo({top: 0, behavior: 'smooth'});

        //const element = document.getElementsByTagName("app-root")[0];
        //this.scrollToElement(element);
    }

    public scrollToElementId(elementId: string): void {
        const element = document.querySelector(elementId);
        this.scrollToElement(element);
    }

    public scrollToElement(element: Element): void {
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        } else {
            throw `Error with method scrollToElement: '${element}' element not found on page.`;
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
                            clientHeight: window.document.documentElement.clientHeight,
                            isTopOfPage: (window.document.documentElement.scrollTop || window.document.body.scrollTop) === 0
                        } as Position;
                        return value;
                    }
                ))
            .pipe(pairwise<Position>())
            .pipe(filter((positions: [Position, Position]) =>
                this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(ignorePercentage, positions[1]))
            )
            .pipe(
                map((result: [Position, Position]) => {
                        //This last mapping is not necessary its only for debugging
                        console.log(result[0], result[1], result[0].scrollTop > result[1].scrollTop, "scrollDown");
                        return result; //do nothing just pass thru result
                    }
                ));
    }

    public onScrolledUp$(): Observable<[Position, Position]> {
        return this.scrollObservable$
            //.pipe(throttle(() => interval(500))) dont think i need to throttle since scrollObservable$ already does
            .pipe(
                map((event: Event) => {
                        const value = {
                            scrollHeight: window.document.documentElement.scrollHeight,
                            scrollTop: window.document.documentElement.scrollTop || window.document.body.scrollTop,
                            clientHeight: window.document.documentElement.clientHeight,
                            isTopOfPage: (window.document.documentElement.scrollTop || window.document.body.scrollTop) === 0
                        } as Position;
                        return value;
                    }
                ))
            .pipe(pairwise<Position>())
            .pipe(filter((positions: [Position, Position]) =>
                this.isUserScrollingUp(positions))
            )
            .pipe(
                map((result: [Position, Position]) => {
                        //This last mapping is not necessary its only for debugging
                        console.log(result[0], result[1], result[0].scrollTop > result[1].scrollTop, "scrollUp");
                        return result; //do nothing just pass thru result
                    }
                ));
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
        return positions[0].scrollTop > positions[1].scrollTop;
    }
}



