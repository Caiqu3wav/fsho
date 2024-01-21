import React from 'react';
import ReactPlayer from 'react-player';


function Player5() { 
  
  return (
    <div className="music-div flex flex-col items-center">
      <div className="relative">
      <ReactPlayer
       url='https://www.youtube.com/watch?v=M2lQ3E2tHf8'
       controls={false} loop={true} pip={true} width="250px" height="150px" suppressHydrationWarning /></div>
       <div className="flex flex-col mt-2 text-center gap-2 h-fit">
         <div className="text-lg font-semibold">Nome: <span>Maybach</span></div>
         <div className="text-sm">Type: <span>"Hard", "Streets", "Gangsta"</span></div>
         <div className="text-sm">BPM: <span>142</span></div>
         <div className="text-sm">KEY: <span>E major</span></div>
         <div className="text-sm">Preço: <span>149.99</span></div>
         <a href=""><button className="rounded border-none bg-purple-800 text-white w-[100px] h-[40px]">COMPRAR</button></a>
       </div>
     </div>
   );
 };
 
 export default Player5;