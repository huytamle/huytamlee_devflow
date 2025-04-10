import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <div className="text-3xl font-bold text-violet-500 font-space-grotesk bg-amber-500">
        Hello World!
      </div>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit" className="cursor-pointer">
          Log out
        </Button>
      </form>
    </>
  );
};

export default Home;
