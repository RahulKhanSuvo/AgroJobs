import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, PlusCircle } from "lucide-react";

export default function Education() {
  return (
    <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-5 h-5 text-[#004A80]" />
          <h2 className="text-xl font-bold text-slate-800">Education</h2>
          <div className="flex items-center gap-2 ml-2">
            <span className="text-sm font-bold text-orange-500">60%</span>
            <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="bg-orange-500 h-full w-[60%]" />
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="rounded-full border-[#004A80] text-[#004A80] hover:bg-blue-50 font-bold h-9"
        >
          <PlusCircle className="w-4 h-4 mr-2" /> Add Education
        </Button>
      </div>

      <div className="p-8">
        <div className="border border-slate-100 rounded-2xl p-8 space-y-6">
          {/* School/University - Full Width */}
          <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80] transition-all">
            <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 ml-[-4px]">
              School/University*
            </legend>
            <Input
              variant="ghost"
              className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
              placeholder="Enter school or university name"
            />
          </fieldset>

          <div className="grid grid-cols-2 gap-6">
            {/* Degree */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 ml-[-4px]">
                Degree*
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
                placeholder="e.g. Bachelor's"
              />
            </fieldset>

            {/* Graduation Year */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 ml-[-4px]">
                Graduation Year*
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
                placeholder="YYYY"
              />
            </fieldset>
          </div>

          {/* Major / Field of Study - Full Width */}
          <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
            <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 ml-[-4px]">
              Major / Field of Study
            </legend>
            <Input
              variant="ghost"
              className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
              placeholder="e.g. Computer Science"
            />
          </fieldset>

          {/* GPA Section */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-bold text-slate-700">GPA</h4>
            <div className="grid grid-cols-2 gap-6">
              <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
                <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 ml-[-4px]">
                  GPA
                </legend>
                <Input
                  variant="ghost"
                  className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
                  placeholder="3.8"
                />
              </fieldset>

              <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
                <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 ml-[-4px]">
                  Max
                </legend>
                <Input
                  variant="ghost"
                  className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
                  placeholder="4.0"
                />
              </fieldset>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-6 pt-6">
            <Button className="bg-[#004A80] hover:bg-[#003866] text-white px-10 h-11 font-bold rounded-lg shadow-md shadow-blue-900/10 transition-all">
              Save Education
            </Button>
            <button
              type="button"
              className="text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
