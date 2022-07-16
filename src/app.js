import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material/styles';
import {Header} from './components/header';
import {CardView} from './components/card-view';
import {CardList} from './components/card-list-view'
import appTheme from './theme';
import {searchCardByName} from './client/ygopro-client';

function App () {
   const [searchResultState, setSearchResultState] = useState({cards: null});

   const searchCard = async (cardName) => {
      const searchResult = await searchCardByName(cardName);
      setSearchResultState({cards: searchResult});
   };
   return (
      <ThemeProvider theme={appTheme}>
         <Header searchHandler={searchCard}></Header>
         {(searchResultState.cards !== null) ?
            <CardList cards={searchResultState.cards} />
            : null
         }
      </ThemeProvider>
    );
}
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App></App>);