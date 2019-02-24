import login from './request-handler/login';
import userRegistration from './request-handler/userRegistration';
import userVerification from './request-handler/userVerification';
import astrolgerRegistration from './request-handler/astrologerRegistration';
import addQuestionHelper from './request-handler/addQuestionHelper';
import fetchAppInitialData from './request-handler/fetchAppInitialData';
import paymentHandler from '../api/stripePaymentHandler';
import fetchWebInitialData from './request-handler/fetchWebInitialData';

export default function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.post('/auth/login', login);
  app.post('/auth/verification', userVerification);
  app.post('/auth/userRegistration', userRegistration);
  app.post('/auth/astrologerRegistration', astrolgerRegistration);
  app.post('/app/addQuestion', addQuestionHelper);
  app.post('/app/payment', paymentHandler);
  app.get('/app/fetch-initial-data', fetchAppInitialData);
  app.get('/web/fetch-initial-data', fetchWebInitialData);
}
