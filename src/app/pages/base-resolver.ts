import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';


export abstract class BaseResolver<T> implements Resolve<Observable<T>>
{
  constructor()
  {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T>
  {
    this.showLoader();

    return this.loadData(route, state).pipe(
      finalize(() => this.hideLoader()),
      catchError(error =>
      {
        console.log(error);
        return throwError(() => new Error(error));
      }),
    );
  }

  showLoader()
  {
  }

  hideLoader()
  {
  }

  abstract loadData(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): Observable<T>;
}
