import Image from "next/image";

type Props = {
  url: string;
};

export const ProfileImage = ({}: Props): React.JSX.Element => {
  return (
    <div className="rounded-full">
      <Image src={"/account.svg"} width={350} height={350} alt="accountPic" />
      <div className="w-full">
        <div className="w-[50px] mr-0 ml-auto">
          <button>
            <Image src={"/pen.svg"} width={50} height={50} alt="edit" />
          </button>
        </div>
      </div>
    </div>
  );
};
