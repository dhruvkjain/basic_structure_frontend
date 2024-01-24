import { Component, useState } from 'react'
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state={};
  }

  moveRight=()=>{
    const rightbtn = document.getElementsByClassName("rbtn")[0];
  }
  moveLeft=()=>{

  }

  render(){
    return(
      <div className="main">
        <div className="first w-[99vw] h-screen ">
          {/* <section className="absolute flex justify-center items-center p-16 h-screen">
          <div className="bg-[#ffbf69] rounded-3xl">
          <p className="text-5xl rounded-t-3xl bg-white text-black mix-blend-screen">Wanna Take a Break</p>
          <div className='flex justify-center items-center'><img className="" src="backfruits2.png"></img></div>
          <p className='p-5 text-5xl font-serif '>Our New Soda !!!</p>
          <p className="p-2 pb-0 text-xl font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam quasi sunt mollitia consequatur adipisci deleniti suscipit provident. Voluptatibus consequatur magni repellat deserunt quasi explicabo in magnam vero consequuntur quas!</p>
          </div>
          </section>
          <section className="overflow-hidden absolute flex justify-center items-center p-16 h-screen ">
            <div className="overflow-hidden fixed flex justify-center items-center"><img className="overflow-hidden can translate-y-[50%] translate-x-[-100%]" src="sodacan.png"></img></div>
          </section>
          <section className="overflow-hidden absolute flex justify-center items-center p-16 h-screen ">
            <div className="flex justify-center items-center"><img className="translate-x-[-70%]" src="fruits.png"></img></div>
          </section>
          <section className="overflow-hidden absolute flex justify-center items-center p-16 h-screen ">
            <div className="flex justify-center items-center"><img className="w-1/3 translate-y-[-70%]" src="fruitoncan.png"></img></div>
          </section> */}
        </div>
        
        <div className="slider w-screen second bg-[#ff99c8]">
          <div className='buttons flex z-10 absolute w-screen h-100vh'>
            <button onClick={this.moveLeft}  className='rbtn pt-6 w-[100px] h-[100px]'><img src="leftarrow.png"></img></button>
            <button onClick={this.moveRight} className='lbtn pt-6 w-[100px] h-[100px]'><img src="rightarrow.png"></img></button>
          </div>
          <section className=" bg-teal-400">
            <h1>Section One</h1>
          </section>
          <section className=' bg-purple-500'>
            <h1>Section Two</h1>
          </section>
          <section className=' bg-slate-600'>
            <h1>Section Three</h1>
          </section>
          <section className='bg-black'>
            <h1>Section Four</h1>
          </section>
          <section className=' bg-red-600'>
            <h1>Section Five</h1>
          </section>
        </div>
        <div className="h-screen w-screen third bg-[#fcf6bd]">
          <section></section>
        </div>
      </div>
    )
  }
}

export default App
