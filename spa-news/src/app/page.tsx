'use client';

import { Provider } from 'react-redux';
import { NewsCatalog } from './components/NewsCatalog';
import { store } from '@/store/store';

export default function Home() {
  return (
    <Provider store={store}>
      <NewsCatalog />
    </Provider>
  );
}
