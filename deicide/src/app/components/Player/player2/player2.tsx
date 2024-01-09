'use client';
import { useEffect, useRef, useState } from 'react';
import { PiSpeakerHighDuotone } from 'react-icons/pi';
import Image from 'next/image';
import { MdOutlineMotionPhotosPaused } from 'react-icons/md';
import { PiPlayCircleBold } from 'react-icons/pi';

const sound2 = {
  title: 'Spinnin',
  style: 'Supertrap',
  price: '149,99',
  waveType: '/assets/beats/(lunchbox)spinnin.mp3',
  imageUrl: '/assets/img/spinninbg.jpg',
};

const Player2 = () => {
  const [play, setPlay] = useState(false);
  const spinninRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const MAX = 20;

  useEffect(() => {
    const audio = spinninRef.current;

    if (!audio) {
      return;
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Remova esta parte do código que tenta iniciar a reprodução automaticamente
  // useEffect(() => {
  //   if (spinninRef.current) {
  //     spinninRef.current.play();
  //     setPlay(true);
  //   }
  // }, [sound2.waveType]);

  const startPlayback = () => {
    if (spinninRef.current) {
      spinninRef.current.play();
      setPlay(true);
    }
  };


  const toggleAudio = () => {
    if (play) {
      spinninRef.current?.pause();
    } else {
      void spinninRef.current?.play();
    }
    setPlay(!play); // Inverter o valor do estado
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    if (spinninRef.current) {
      spinninRef.current.volume = volume;
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const seekBar = e.currentTarget;
    const offsetX = e.nativeEvent.offsetX;
    const seekPercentage = offsetX / seekBar.offsetWidth;
    const newTime = seekPercentage * (duration || 0);
    const currentAudio = spinninRef.current;

    if (!isNaN(newTime) && currentAudio) {
      const isDoubleClick = Math.abs(newTime - currentTime) < 1;

      if (isDoubleClick) {
        currentAudio.currentTime = newTime;
      } else {
        currentAudio.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  return (
<main>
          <div className="bg-accent flex h-fit max-w-fit flex-col rounded-lg border-2 border-cyan-700 pb-4 text-center shadow">
        <div className="relative flex flex-col space-y-0">
          <Image
            width={200}
            height={200}
            className="mx-auto max-h-48 w-full flex-shrink-0 rounded-t-lg pb-2"
            src={sound2.imageUrl}
            alt="waves"
          />
          <button
            onClick={startPlayback}
            type="button"
            className="absolute right-5 left-0 top-[15%] m-auto w-9 rounded-full p-2 text-white shadow-sm"
          >
            {!play ? (
              <PiPlayCircleBold className="h-12 w-12" aria-hidden="true" />
            ) : (
              <MdOutlineMotionPhotosPaused className="h-12 w-12" aria-hidden="true" />
            )}
          </button>
          <dl className="mt-1 flex flex-col p-4 ">
            <dd className="text-lg text-white">{sound2.title}</dd>
          </dl>
          <dl className="mt-1 flex flex-col p-4 ">
            <dd className="text-lg text-white">{sound2.style}</dd>
          </dl>
          <dl className="mt-1 flex flex-col p-4 ">
            <dd className="text-lg text-white">{sound2.price}</dd>
          </dl>
          <div className="mx-4 flex">
            <input
              type="range"
              className="mr-2 w-full accent-cyan-700 rounded"
              min={0}
              max={MAX}
              onChange={(e) => handleVolume(e)}
            />
            <PiSpeakerHighDuotone className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          {currentTime !== null && duration !== null ? (
            <div className="flex items-center mx-4 mt-4 text-white">
              <span className="mr-2">{formatTime(currentTime)}</span>
              <div className="w-full h-1 bg-white rounded overflow-visible" onClick={(e) => handleSeek(e)}>
                <div
                  className="h-full bg-accent-cyan-700"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              <span className="ml-2">{formatTime(duration)}</span>
            </div>
          ) : (
            <div className="flex items-center mx-4 mt-4 text-white">
              <span className="mr-2">00:00</span>
              <div className="w-full h-1 bg-white rounded overflow-visible">
                <div className="h-full bg-accent-cyan-700" style={{ width: '0%' }} />
              </div>
              <span className="ml-2">00:00</span>
            </div>
          )}
        </div>
      </div>
      <audio ref={spinninRef} src={sound2.waveType} />
</main>  
);
};

export default Player2;