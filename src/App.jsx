import { useState } from 'react';
import './App.css';
import Product from './components/Product';

function App() {
  const products = [
    {
      id: 1,
      title: 'Prajituri',
      price: 10,
      srcImg: "https://teoskitchen.ro/wp-content/uploads/2023/12/prajitura-cu-cafea-3.jpg"
    },
    {
      id: 2,
      title: 'Pizza',
      price: 10,
      srcImg: "https://www.restograf.ro/wp-content/uploads/2020/01/pizza-italiana-Bucuresti-taiata-felii-1500x1000.jpg"
    },
    {
      id: 3,
      title: 'Ciocolata artizanala',
      price: 10,
      srcImg: "https://chocolatedelice.ro/wp-content/uploads/2020/10/Chocolate-Delice-Royal-Box070A7234_Lr-500x625.jpg"
    },
    {
      id: 4,
      title: 'Biscuiti',
      price: 10,
      srcImg: "https://gomagcdn.ro/domains/cafea-premium.ro/files/product/original/3ltjspcsfi5vlgewmfklbfg24woo1ivf2adwf4kh-161-7074.jpeg"
    },
    {
      id: 5,
      srcImg: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
    },
    {
      id: 6,
      title: "Produs nou"
    }
  ]

  return (
    <>
      {
        products.map((product) => {
          return <Product
            title={product.title}
            key={product.id}
            price={product.price}
            srcImg={product.srcImg}
          />
        })
      }
    </>
  );


  /* <Product
        price="10"
        title="Prajituri"
        srcImg="https://teoskitchen.ro/wp-content/uploads/2023/12/prajitura-cu-cafea-3.jpg"
      />
      <Product
        price="30"
        title="Pizza"
        srcImg="https://www.restograf.ro/wp-content/uploads/2020/01/pizza-italiana-Bucuresti-taiata-felii-1500x1000.jpg"
      />
      <Product
        price="100"
        title="Ciocolata artizanala"
        srcImg="https://chocolatedelice.ro/wp-content/uploads/2020/10/Chocolate-Delice-Royal-Box070A7234_Lr-500x625.jpg"
      />
      <Product
        price="50"
        title="Biscuiti"
        srcImg="https://gomagcdn.ro/domains/cafea-premium.ro/files/product/original/3ltjspcsfi5vlgewmfklbfg24woo1ivf2adwf4kh-161-7074.jpeg"
      />
      <Product
        srcImg="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
      />
      <Product
        title="Produs Nou"
      /> */

}

export default App
