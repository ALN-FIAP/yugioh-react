import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
   BrowserRouter, Route, Routes, useSearchParams
} from "react-router-dom";
import { searchCardByName } from './client/ygopro-client';
import { CardList } from './components/card-list-view';
import { CardView } from './components/card-view';
import { Header } from './components/header';
import appTheme from './theme';

function App(props) {
   let [searchParams, setSearchParams] = useSearchParams();
   //let [pathParams, setPathParams] = useParams();

   let cards = null;





   const [searchResultState, setSearchResultState] = useState({ cards: null });
   const [textValue, setTextValue] = useState(
      searchParams.get('cardName') || ''
   );

   const searchCard = async () => {
      const searchResult = await searchCardByName(textValue);
      setSearchResultState({ cards: searchResult });
   };

   useEffect(() => {
      if (searchParams.get('cardName')) {
         searchCard(searchParams.get('cardName'));
      }
   }, []);


   return (
      <ThemeProvider theme={appTheme}>
         <Header searchHandler={searchCard} setTextHandler={setTextValue} textValue={textValue} />
         <Routes>
            <Route path="/" element={(<div>HOME</div>)} />
            <Route path="card/:id" element={
               (searchResultState.cards !== null) ?
                  <CardView card={searchResultState.cards[0]} />
                  : null} />
            <Route path="list" element={
               (searchResultState.cards !== null) ?
                  <CardList cards={searchResultState.cards} />
                  : null} />

         </Routes>
      </ThemeProvider>
   );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<BrowserRouter>
   <App />
</BrowserRouter>);