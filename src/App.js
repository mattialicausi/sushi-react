import React, {Component} from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

// importo immagini
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {

  state = {
    cards:[
      {id: 0, nome: "California", prezzo: 1.99, img: california},
      {id: 1, nome: "Dragon", prezzo: 1.99, img: dragon, quantita: 0},
      {id: 2, nome: "Dynamite", prezzo: 1.99, img: dynamite, quantita: 0},
      {id: 3, nome: "Philadelphia", prezzo: 1.99, img: philadelphia, quantita: 0},
      {id: 4, nome: "Rainbow", prezzo: 1.99, img: rainbow, quantita: 0},
      {id: 5, nome: "Shrimp", prezzo: 1.99, img: shrimp, quantita: 0},
    ]
  }

  render() {
    return (
      <>
        <Navbar/>
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr/>
          <div className="row">
            
            {this.state.cards.map(card => (
              <Card
              key= {card.id}
              nome= {card.nome}
              prezzo= {card.prezzo}
              img= {card.img}/>
            ))}
         
          </div>
        </div>
      </>
      
    );
  }
 
}

export default App;
