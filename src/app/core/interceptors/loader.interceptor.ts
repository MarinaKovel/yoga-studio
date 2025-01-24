import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ActiveRequestsService } from '../../share/services/active-requests.service';

export const LoadingInterceptorFn: HttpInterceptorFn = (req, next) => {
  const activeRequests = inject(ActiveRequestsService);

  activeRequests.increment();
  document.body.classList.add('loading');

  return next(req).pipe(
    finalize(() => {
      activeRequests.decrement();
      if (activeRequests.isZero()) {
        document.body.classList.remove('loading');
      }
    })
  );
};