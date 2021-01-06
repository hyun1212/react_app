import React from 'react';

function Food(props) {
  return <h1>I like {props.fav} food</h1>
}


function Food2({fav}) {
  return <h1>I like {fav} food</h1>
     }

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://love.seoul.go.kr/pds/Board/seoul_news_write/201812_18_1.jpg'
  }

];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name}/>))}
      

    </div>
  );
}

export default App;
