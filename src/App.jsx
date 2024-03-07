import Person from "./Person";

function App() {
  return (
    <div className="container">
      <Person img="https://www.zdnet.com/a/img/resize/f792d73c3e241b8f40a52875616f490ea1a08e97/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=1200&width=1200" 
      item ="Mobile" price ="20000" qua="5" total="50000"/> 

      <Person img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-airpods-2022?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1673992683197" 
      item ="EarBuds" price ="1000" qua="5" total="5000"/>   

      <Person  img="https://www.bigbasket.com/media/uploads/p/l/40198093_2-hp-32-gb-pendrive-usb-31.jpg"
      item ="Pendrive" price ="1000" qua="5" total="5000"/>  

      <Person img="https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg" 
      item ="Mouse" price ="500" qua="5" total="500"/> 

      <Person img="https://i.pinimg.com/originals/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg"
      item ="DSLR Camera" price ="100000" qua="5" total="500"/> 
      
      <Person img="https://5.imimg.com/data5/ANDROID/Default/2023/2/SU/OJ/SV/43693212/product-jpeg.jpg"
      item ="Begs" price ="800" qua="5" total="500"/> 

      <Person img="https://rukminim1.flixcart.com/image/850/1000/xif0q/shoe/r/l/v/-original-imaggcb4jh3mg49a.jpeg?q=90"
      item ="Shooes" price ="700" qua="5" total="500"/> 
    
      <Person img="https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/f/v/4/-original-imagwy8da6z5ju75.jpeg?q=90"
      item ="HP Leptop" price ="70000" qua="5" total="500"/> 
         
      </div>
  );
}

export default App;
