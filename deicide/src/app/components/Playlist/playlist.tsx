"use client"
import { useEffect, useState } from 'react'
import "./playlist.css"
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import AudioPlayer from '../AudioPlayer/Audioplayer';

const Playlist = () => {
 const [beats, setBeats] = useState([]);
 const [ordenacao, setOrdenacao] = useState('recentes');

 useEffect(() => {
  async function fetchBeats() {
    try {
      const response = await fetch('/api/beats');
      const data = await response.json();

      const beatsOrdenados = data.sort((a, b) => {
        const dataA = new Date(a.dataLnc);
        const dataB = new Date(b.dataLnc);

        return ordenacao === 'recentes' ? dataB - dataA : dataA - dataB;
      });

      setBeats(beatsOrdenados);
    } catch (error) {
      console.error('Erro ao buscar beats', error);
    }
  }

  fetchBeats();
}, [ordenacao]);

  return (
    <div className='playlist-container flex items-center flex-col justify-center'>
      <div className='flex'>
      <div>
      <h1 className='playlisth1'>Playlist</h1>
      <div className='playlist-icon'>
      <RiNeteaseCloudMusicFill/></div></div>
      <div className='mt-6'>
      <label className='ml-[400px]' htmlFor="ordenacao">Ordenar por:</label>
      <select className='bg-black h-7 ml-2' id="ordenacao" value={ordenacao}
      onChange={(e) => setOrdenacao(e.target.value)}>
        <option value="recentes">Recentes</option>
        <option value="antigos">Antigos</option>
      </select></div>
      </div>
    <div className='grid grid-cols-4 justify-between gap-6 pl-14 pb-4'>
      {beats.map((beat) => (
        <div key={beat.id}>
          <img className='w-[200px] h-[200px]' src={beat.imagem} alt={`Capa de ${beat.nome}`} />
          <h2>{`${beat.nome}`}</h2>
          <p>Gêneros: {Array.isArray(beat.estilo) ? beat.estilo.join(', ') : beat.estilo}</p>
        </div>
      ))}
    </div>
    <AudioPlayer />
    </div>
  );
}

export default Playlist;