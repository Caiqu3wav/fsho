import React from 'react';
import ReactPlayer from 'react-player';


function Player2() { 
  
  return (
    <div className="music-div flex flex-col items-center">
      <div className="relative">
      <ReactPlayer
       url='https://www.youtube.com/watch?v=FZep4jHj1gM'
       controls={false} loop={true} pip={true} width="250px" height="150px" suppressHydrationWarning /></div>
       <div className="flex flex-col mt-2 text-center gap-2 h-fit">
       <div className="text-lg font-semibold">Nome: <span>Illusions</span></div>
         <div className="text-sm">Type: <span>Plugg, Pluggnb, Dark, Romantic</span></div>
         <div className="text-sm">BPM: <span>148</span></div>
         <div className="text-sm">KEY: <span>Eb minor</span></div>
         <div className="text-sm">Preço: <span>99.99</span></div>
         <a href=""><button className="rounded border-none bg-purple-800 text-white w-[100px] h-[40px]">COMPRAR</button></a>
       </div>
     </div>
   );
 };
 
 export default Player2;