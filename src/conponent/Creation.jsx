import React, { Component } from 'react'
import Animer from './Animer'
import New from './New'
import { NavLink } from 'react-router-dom'





export default class Creation extends Component {
  render() {
    return (
      <>
      <div className="">
        <div className="h-32 text-center bg-black"><h1 className='pt-16 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-amber-50 animate-pulse'> Mes inspiration && Création</h1></div>
      
      <div className="flex items-center justify-start bg-cover contrast-125" style={{height:'550px',backgroundImage:'url(/anim/R2.jpeg)'}}>
     
      <div className="flex justify-between w-1/2">
        <img
          src="anim/pp.jpg"
          alt=""
          className="object-cover w-2/6 transition duration-500 ease-in-out transform border-2 border-white rounded cursor-pointer h-52 hover:scale-125"
        />
        <img
          src="anim/trou.jpg"
          alt=""
          className="object-cover w-2/6 transition duration-500 ease-in-out transform border-2 border-white rounded cursor-pointer h-52 hover:scale-125"
        />
        <img
          src="anim/an.jpeg"
          alt=""
          className="object-cover w-2/6 transition duration-500 ease-in-out transform border-2 border-white rounded cursor-pointer h-52 hover:scale-125"
        />
        <img
          src="anim/rt.jpg"
          alt=""
          className="object-cover w-2/6 transition duration-500 ease-in-out transform border-2 border-white rounded cursor-pointer h-52 hover:scale-125"
        />
                <img
          src="anim/yes.jpg"
          alt=""
          className="object-cover w-2/6 transition duration-500 ease-in-out transform border-2 border-white rounded cursor-pointer h-52 hover:scale-125"
        />
 
      </div>
</div>
      </div>


<div className="flex justify-start bg-black contrast-125 " style={{height:'500px'}}>
   <New></New>
</div>
     
   <div className="">
      
    <div className="flex justify-center gap-1.5 items-center h-screen px-16 bg-black">
    <Animer></Animer>
    </div>
   </div>

     
  
   <footer class="bg-black text-white py-8">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-4 md:mb-0">
                    <h3 class="text-xl mb-2">Informations</h3>
                    <ul>
                        <li>  <NavLink to="/accueil">Accueil</NavLink></li>
                        <li><NavLink to="/creation">Creation</NavLink></li>
                        <li><NavLink>Contactez-nous</NavLink></li>
                    </ul>
                </div>
                <div class="mb-4 md:mb-0">
                    <h3 class="text-xl mb-2">Liens utiles</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Conditions d'utilisation</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl mb-2">Suivez-nous</h3>
                    <div class="flex items-center space-x-4">
                        <a href="#" class="text-white hover:text-gray-300"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-white hover:text-gray-300"><i class="fab fa-instagram"></i></a>
                        <a class="text-white" href="https://api.whatsapp.com/send?phone=2250706525932"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

      </>
    )
  }
}
