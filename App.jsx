import React from 'react'
import Header from './componates/Header'
import Hero from './componates/Hero'
import Gallary from './componates/Gallary'
import Pricing from './componates/Pricing'
import Team from './componates/Team'
import Footer from './componates/Footer'

const App = () => {
  let Dict ={
    img1:'https://plus.unsplash.com/premium_photo-1727443878180-a5c3aefd8b2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
    img2:'https://images.unsplash.com/photo-1729201958417-d729cf4b02b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
    img3:'https://images.unsplash.com/photo-1729682459691-e18931cf9893?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
    img4:'https://plus.unsplash.com/premium_photo-1728417202003-d746a7fded79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D',
    img5:'https://images.unsplash.com/photo-1729694811891-40eebb6c901c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D',
    img6:'https://images.unsplash.com/photo-1727461895261-9a006b52f342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTB8fHxlbnwwfHx8fHw%3D'
  };
  let hero={
    img:'https://images.unsplash.com/photo-1728327511232-f387c138a097?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D'
  }
  return (
    <>
      <Header/>
      <Hero photo={hero.img}/>
      <Gallary photo1={Dict.img1} photo2={Dict.img3} photo3={Dict.img2} photo4={Dict.img4} photo5={Dict.img5} photo6={Dict.img6}/>
      <Pricing/>
      <Team/>
      <Footer/>
    </>
  )
}

export default App
