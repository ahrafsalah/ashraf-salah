// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // ⚠️ تأكد من صحة مسار الملف حسب مكان حفظه

export default createMiddleware(routing);

export const config = {
  // تفعيل الميدل وير على الروابط
  matcher: ['/', '/(ar|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};