import { AiTwotonePlayCircle } from "react-icons/ai";
import { PiPauseCircleDuotone } from "react-icons/pi";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { FaShuffle } from "react-icons/fa6";
import { PiShuffleAngularDuotone } from "react-icons/pi";
import { FaRepeat } from "react-icons/fa6";
import { PiRepeatDuotone } from "react-icons/pi";
import React from "react";



type ControlsProps = {
    onPlayClick: () => void;
    onPrevClick: () => void;
    onNextClick: () => void;
    onRepeatClick: () => void;
    onShuffleClick: () => void;
    isPlaying: boolean;
    repeat: boolean;
    shuffle: boolean;
    playSpecificTrack: (trackIndex: number) => void; // Adicione esta linha
  };

  export interface ExtendedControlsProps extends ControlsProps {
    playSpecificTrack: (trackIndex: number) => void;
  }
  
  const Controls = ({
    onPlayClick,
    isPlaying,
    onPrevClick,
    onNextClick,
    repeat,
    onRepeatClick,
    shuffle,
    onShuffleClick,
    playSpecificTrack,
  }: ControlsProps) => {
    return (
        <div className="flex flex-row mt-4 text-4xl">
          <ImageButton
            src={shuffle ? <FaShuffle /> : <PiShuffleAngularDuotone />}
            onClick={onShuffleClick}
          />
          <ImageButton src={<MdSkipPrevious />} onClick={onPrevClick} />
          <ImageButton
            className="mr-2 ml-2"
            src={isPlaying ? <PiPauseCircleDuotone /> : <AiTwotonePlayCircle />}
            onClick={onPlayClick}
          />
          <ImageButton src={<MdSkipNext />} onClick={onNextClick} />
          <ImageButton
            src={repeat ? <FaRepeat /> : <PiRepeatDuotone />}
            onClick={onRepeatClick}
          />
          <button onClick={() => playSpecificTrack(0)}>
        Play Specific Track
      </button>
        </div>
      );
    };

    export default Controls;

    type ImageButtonProps = {
        src: React.ReactNode;
        onClick: () => void;
        className?: string;
      };
      
      const ImageButton = ({ onClick, src, className }: ImageButtonProps) => {
        const buttonSize = 65;
        return (
          <button onClick={onClick}>
            <div className={`drop-shadow-lg ${className ?? ''}`}>
              {React.cloneElement(src as React.ReactElement, { width: buttonSize, height: buttonSize })}
            </div>
          </button>
        );
      };
      