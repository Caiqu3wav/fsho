import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Playlist from './components/Playlist/playlist'
import { fetchBeats } from './BeatService'
import { Beat } from '../../models/BeatModel'

interface HomeProps {
  beats: Beat[];
}

const Home: React.FC<HomeProps> = ({ beats }) => (
    <main className='bg-white h-screen'>
   <Header/>
   <Hero/>
   <Playlist />
   </main>
  );



export default Home;