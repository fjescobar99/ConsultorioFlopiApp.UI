// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Tomá el token de donde lo guardes (localStorage, servicio, etc.)
  const token = localStorage.getItem('access_token');

  const isAuthCall = req.url.includes('login');
  console.log('Intercepting request:', req.url, 'Token:', token, 'Is Auth Call:', isAuthCall);

  const authReq = !token || isAuthCall
    ? req
    : req
    .clone({ setHeaders: { Authorization: `Bearer ${token}` } });

  return next(authReq);
};
