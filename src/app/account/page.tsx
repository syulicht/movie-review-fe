import { accountType } from "@/types/account";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ProfileImage } from "./components/ProfileImage";
import { UsernameInput } from "./components/UsernameInput";

const AccountForm = async ({}) => {
  const cookieList = await cookies();
  const isLogin = cookieList.has("token");
  const data: accountType = /*await getAccountData()*/ {
    user: { id: 1, name: "yusato", profileImageUrl: "nbovfao" },
  };
  if (!isLogin || !data) {
    redirect("/signin");
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
        <ProfileImage url={data.user.profileImageUrl} />
        <div className="flex flex-col justify-between w-full">
          <UsernameInput defaultValue={data.user.name} />
          <button className="bg-blue-600 rounded-xl text-white px-16 py-4 mt-8 mx-auto md:mx-0 hover:bg-blue-700 transition-colors duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
