function Title({ children }) {
   return (
      <h1>{children}</h1>
   )
}
function Code({ children }) {
   return (
      <p> Артикул: {children}</p>
   )
}

function Gallery({ src, alt }) {
   return (<img width="200" height="257" src={src} alt={alt}></img>)
}
function Price({ oldPrice, newPrice }) {
   return (
      <p>Цена: <del>{oldPrice}₽</del> <b>{newPrice} ₽</b> </p>
   );
}
function Quantity() {
   <div>
      Количество: <button type="button">-</button><span>1</span> <button type="button">+</button>
   </div>
}
function Delivery({ children }) {
   return <p><span>Доставка:</span> {children}</p>
}
function Button({ children }) {
   return <button type="button">{children}</button>
}

function Description({ children }) {
   return (
      <div>
         <h2>Описание</h2>
         <p>{children}</p>
         <Button>Подробнее</Button>
      </div>
   )
}

export default function ProductPage({ product }) {
   return (
      <>
         <Title>Name is {product.name}</Title>
         <Code>{product.code}</Code>
         <div style={{ display: 'flex' }}>
            <Gallery src={product.src} alt={product.alt} />
            <div>
               <Price oldPrice={product.oldPrice} newPrice={product.price}></Price>
               <Quantity></Quantity>
               <Delivery>{product.delivery}</Delivery>
               <Button>Купить</Button>
            </div>
         </div>
         <Description>{product.description}</Description>
      </>
   )
}