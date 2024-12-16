
import Footer from './(components)/footer/footer';
import HomePage from './(components)/home/home';
import Header from './(components)/navbar/navbar';

import TwoImages from './(components)/twoimage';

export default function Home() {
  return (
    <div>
      <Header/>
      <TwoImages/>
    <HomePage/> 
    <Footer/>
    </div>
  )
}

