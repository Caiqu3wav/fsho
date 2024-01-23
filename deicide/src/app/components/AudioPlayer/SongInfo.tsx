type SongInfoProps = {
  nome?: string;
  imagem?: string;
};

const SongInfo = ({ nome, imagem }: SongInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <img
        className="drop-shadow-lg rounded-sm mb-10"
        width={180}
        height={180}
        src={imagem}
      />
      <span className="text-2xl drop-shadow-lg text-primary">{nome}</span>
    </div>
  );
};

export default SongInfo;