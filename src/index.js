import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProductPage from './components/product-page';

const product = {
   name: "3D принтер",
   code: 2840367,
   price: 33333,
   oldPrice: 55555,
   delivery: "1 апреля",
   src: "https://i.ibb.co/gPCq1G4/image.png",
   description: `это "текст-рыба", часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.`
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ProductPage product={product} />

   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
