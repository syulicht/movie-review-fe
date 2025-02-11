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
    <div>
      <div className="w-full flex flex-row justify-between mt-8">
        <ProfileImage url={data.user.profileImageUrl} />
        <UsernameInput defaultValue={data.user.name} />
      </div>
      <div>
        <button className="bg-blue-600 rounded-xl text-white px-16 py-8">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
