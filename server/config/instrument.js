import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // nodeProfilingIntegration(),  <-- comment this out
    Sentry.mongooseIntegration()
  ],
  sendDefaultPii: true,
});
