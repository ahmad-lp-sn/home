import { RejesterFrom } from "./_components/RejesterFrom/RejesterFrom";
import { ProgressIndicator } from "./_components/ProgressIndicator/ProgressIndicator";

export default function SignUp() {
  return (
    <div className="inset-0 relative h-full w-ful flex flex-col justify-center items-center">
      <ProgressIndicator />
      <div className="font-bold text-[40px] text-amber-300 p-8">HOME</div>
      <div className="flex flex-col gap-2 rounded-lg shadow-sm bg-slate-50 border-amber-200 text-black border-[4px] p-4 w-[95%] md:w-[50%]">
        <div className="font-bold text-lg">Rejester</div>
        <RejesterFrom />
      </div>
    </div>
  );
}
