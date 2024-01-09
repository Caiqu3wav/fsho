import React from 'react';
import BeatModel from '../../../../models/BeatModel';
import BeatCard from '../BeatCard/BeatCard';
import mongoose, { Types } from 'mongoose';
import { fetchBeats } from '@/app/BeatService';
import Image from 'next/image';
import Player from '../Player/player/player';
import Player2 from '../Player/player2/player2';



function Playlist() {

     return ( 
      <div>
       <Player/>
       <Player2/>
      </div>
  );
}


export default Playlist;