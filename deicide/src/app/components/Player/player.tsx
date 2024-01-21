import React from 'react';
import ReactPlayer from 'react-player';



function Player() {  

  return (
    <div className="music-div flex flex-col items-center">
      <div className="relative">
      <ReactPlayer
       url='https://www.youtube.com/watch?v=kD-2x46h3LU'
       controls={false} loop={true} pip={true} width="250px" height="150px" suppressHydrationWarning/></div>
       <div className="flex flex-col mt-2 text-center gap-2 h-fit">
         <div className="text-lg font-semibold">Nome: <span>X2C</span></div>
         <div className="text-sm">Type: <span>Supertrap, Ambient</span></div>
         <div className="text-sm">BPM: <span>165</span></div>
         <div className="text-sm">KEY: <span>E minor</span></div>
         <div className="text-sm">Preço: <span>149.99</span></div>
         <a href=""><button className="rounded border-none bg-purple-800 text-white w-[100px] h-[40px]">COMPRAR</button></a>
       </div>
     </div>
   );
 };
 
 export default Player;