import { wixClientServer } from "@/lib/wixClientServer";
import "./VerifyAccountWarning.css";

const VerifyAccountWarning = async () => {
  try {
    const wixClient = await wixClientServer();
    const { member } = await wixClient.members.getCurrentMember();

    // If no member (not logged in) OR email is verified => don't show
    if (!member || member.loginEmailVerified) {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }

  return (
    <div className="overflow-hidden w-full bg-yellow-200 py-1">
      <p className="w-full text-sm text-primary whitespace-nowrap animate-marquee">
        Please verify your account!
      </p>
    </div>
  );
};

export default VerifyAccountWarning;
