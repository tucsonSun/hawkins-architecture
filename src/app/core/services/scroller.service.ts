import {Injectable} from '@angular/core';
import {fromEvent, interval, Observable} from "rxjs";
import {filter, map, pairwise, throttle} from "rxjs/operators";


export interface Position {
  scrollHeight: number,
  scrollTop:    number,
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

  public  scrollToElement(elementId: string): void {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    } else {
      throw `Error with EgrScrollToDirective: '${elementId}' element not found on page.`;
    }
  }



  public onScrolledDown$(): Observable<[Position, Position]> {
    return this.scrollObservable$
        //.pipe(throttle(() => interval(500))) dont think i need to throttle since scrollObservable$ already does
        .pipe(
            map((doc: Document) => {
                  return {
                    scrollHeight: doc.documentElement.scrollHeight,
                    scrollTop:    doc.documentElement.scrollTop || doc.body.scrollTop,
                    clientHeight: doc.documentElement.clientHeight
                  } as Position;
                }
            ))
        .pipe(pairwise<Position>())
        .pipe(filter((positions: [Position, Position]) =>
            this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1], this._scrollPercent))
        );
  }


  private isScrollExpectedPercent(position:Position, percent:number) {
    return ((position.scrollTop + position.clientHeight) / position.scrollHeight) > (percent/100);
  }

  private isUserScrollingDown(positions:Array<Position>) {
    return positions[0].scrollTop < positions[1].scrollTop;
  }
}



