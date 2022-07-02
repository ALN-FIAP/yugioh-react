import axios from 'axios';

const YGOPRO_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

export async function searchCardByName(cardName) {
    const result = await axios.get(YGOPRO_URL,  {
        params: {
          name: cardName
        }
      });

      console.log(result);

      return result.data.data[0];
}