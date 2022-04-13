import React, { memo, Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from '@/router';
import store from './store';

import ZLAppHeader from '@/components/app-header';
import ZLAppFooter from '@/components/app-footer';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}
export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ZLAppHeader />
        <Suspense fallback={<div>loading...</div>}>
          <AppRoutes />
        </Suspense>
        <ZLAppFooter />
      </BrowserRouter>
    </Provider>
    
  )
})