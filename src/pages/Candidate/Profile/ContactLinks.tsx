import { Input } from "@/components/ui/input";
import { Contact } from "lucide-react";

export default function ContactLinks() {
  const links = [
    { label: "Website", value: "https://rahul-khan-suvo.vercel.app" },
    { label: "LinkedIn", value: "https://linkedin.com/in/rahulsuvo" },
    { label: "GitHub", value: "https://github.com/RahulKhanSuvo" },
    { label: "Twitter", value: "https://x.com/RahulKhanSuvo" },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <Contact className="w-5 h-5 text-[#004A80]" />
          <h2 className="text-xl font-bold text-slate-800">Contact & Links</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-orange-500">90%</span>
          <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="bg-orange-500 h-full w-[90%]" />
          </div>
        </div>
      </div>

      <div className="p-8">
        <form className="grid grid-cols-2 gap-x-6 gap-y-8">
          {links.map((link, index) => (
            <fieldset
              key={index}
              className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80] transition-all"
            >
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 ml-[-4px]">
                {link.label}
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0 overflow-hidden text-ellipsis whitespace-nowrap"
                defaultValue={link.value}
                placeholder={`Enter your ${link.label} URL`}
              />
            </fieldset>
          ))}
        </form>
      </div>
    </div>
  );
}
