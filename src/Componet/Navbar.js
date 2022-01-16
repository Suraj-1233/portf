import React from 'react'

const Navbar =()=> {
    return (
       <div className='nevbar'> 
          <div className='nev_left'>
          <img src={require("../image/logo.png")} alt='photo'/>    

          </div>
         <div className='nev_rigth'>
          <li><a href='/'>home</a></li>
          
          <li><a href='/about me'>about me</a></li>
          <li><a href='/resume'>RESUME</a></li>
          <li><a href='/contact me'>CONTACT ME</a></li>
         

         </div>

</div>



            


        
    )
}

export default Navbar
