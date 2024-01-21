import { Playlist } from "@/app/AudioBack/Types";


const beats : Playlist = [
    { id: 1, nome: 'Purple', imagem: '/assets/img-beats/purple.png', 
    audio: '/assets/beats/(pluggnb)purple_.mp3', estilo: ['plugg', 'pluggnb'],
dataLnc: '2023/01/24', },
{ id: 2, nome: 'Bounce', imagem: '/assets/img-beats/bounce.png', 
audio: '/assets/beats/(westcoast)bounce.mp3', estilo: 'westcoast',
dataLnc: '2023/02/27', },
{ id: 3, nome: 'Ride', imagem: '/assets/img-beats/ride.png', 
audio: '/assets/beats/(hide)ride.mp3', estilo: ['hard', 'gangsta'],
dataLnc: '2023/03/15', },
{ id: 4, nome: 'Slay', imagem: '/assets/img-beats/slay.png', 
audio: '/assets/beats/slay.mp3', estilo: ['dark', 'hard'],
dataLnc: '2023/03/19', },
{ id: 5, nome: 'Bape', imagem: '/assets/img-beats/bape.png', 
audio: '/assets/beats/bape.mp3', estilo: ['plugg', 'pluggnb'],
dataLnc: '2023/04/03', },
{ id: 6, nome: 'Angels', imagem: '/assets/img-beats/angels.png', 
audio: '/assets/beats/angels.mp3', estilo: ['ambient', 'dark', 'melodic', 'sad'],
dataLnc: '2023/06/28', },
{ id: 7, nome: 'Glock19', imagem: '/assets/img-beats/glock19.png', 
audio: '/assets/beats/glock19.mp3', estilo: ['dark', 'hard', 'darkplugg'],
dataLnc: '2023/07/20', },
{ id: 8, nome: 'Evil', imagem: '/assets/img-beats/evil.png', 
audio: '/assets/beats/evil.mp3', estilo: ['dark', 'hard', 'ambient'],
dataLnc: '2023/07/20', },
];

export async function GET(request: Request) {
    return new Response(JSON.stringify(beats), {
      headers: { 'Content-Type': 'application/json' },
    });
  }