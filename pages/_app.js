import '@/styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tasks from '@/reducers/tasks';

const store = configureStore({
  reducer: { tasks },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Todo List 📝</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
