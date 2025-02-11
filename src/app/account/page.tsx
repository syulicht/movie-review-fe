import { getAccountData } from "@/actions/account";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

const AccountForm = async ({}) => {
  const cookieList = await cookies();
  const isLogin = cookieList.has("token");
  const data = await getAccountData();
  if (!isLogin || !data) {
    redirect("/signin");
  }

  return (
    <div className="w-full flex flex-row justify-between mt-8">
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
      <div>
        <label className="text-white">User Name</label>
        <input
          type="text"
          className="w-4/5 bg-black border-white h-12 text-white border-2 rounded-md p-4"
          value={data.user.name}
        />
      </div>
    </div>
  );
};

export default AccountForm;
