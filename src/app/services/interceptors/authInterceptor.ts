// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Tomá el token de donde lo guardes (localStorage, servicio, etc.)
  const token = localStorage.getItem('access_token');

  const isAuthCall = req.url.includes('/api/auth/login');

  const authReq = !token || isAuthCall
    ? req
    : req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });

  return next(authReq);
};
