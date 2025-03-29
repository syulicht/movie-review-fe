"use client";

import { downloadAvatar, uploadAvatar } from "@/actions/avatar";
import imageCompression from "browser-image-compression";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";

type Props = {
  url: string;
};

export const ProfileImage = ({ url }: Props): React.JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("");

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? null;
    if (files) {
      try {
        // ここにファイルアップロードのロジックを実装
        console.log("ファイルをアップロード:", files[0].name);
        const compressedFile = await imageCompression(files[0], {
          maxSizeMB: 1, // 最大ファイルサイズを1MBに設定
          maxWidthOrHeight: 1024, // 最大の幅または高さ
          useWebWorker: true, // Web Workerを使って圧縮
        });
        setImage("");
        await uploadAvatar(compressedFile, url);
        const image = await downloadAvatar(url);
        setImage(image);
      } catch (error) {
        console.error("アップロードエラー:", error);
      }
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      const image = await downloadAvatar(url);
      console.log(image);
      setImage(image);
    };
    fetchImage();
  }, []);
  return (
    <div className="rounded-full w-[250px] h-[250px] mx-auto md:mx-0">
      {image ? (
        <Image
          src={image}
          width={250}
          height={250}
          alt="accountPic"
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
        </div>
      )}
      <div className="absolute bottom-0 right-0 p-2">
        <button
          onClick={handleButtonClick}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <Image src={"/pen.svg"} width={25} height={25} alt="edit" />
        </button>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};
