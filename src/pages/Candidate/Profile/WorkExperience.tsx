"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, ChevronDown, PlusCircle, Trash2 } from "lucide-react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import TagInput from "@/components/common/TagInput";
import { useState } from "react";

export default function WorkExperience() {
  const [skills, setSkills] = useState<string[]>([]);

  return (
    <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <Briefcase className="w-5 h-5 text-[#004A80]" />
          <h2 className="text-xl font-bold text-slate-800">Work Experience</h2>
          <div className="flex items-center gap-2 ml-2">
            <span className="text-sm font-bold text-orange-500">85%</span>
            <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="bg-orange-500 h-full w-[85%]" />
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="rounded-full border-[#004A80] text-[#004A80] hover:bg-blue-50 font-bold h-9"
        >
          <PlusCircle className="w-4 h-4 mr-2" /> Add Experience
        </Button>
      </div>

      <div className="relative p-8 pl-14">
        {/* Timeline Dot & Line */}
        <div className="absolute left-7 top-10 bottom-10 w-px bg-slate-200"></div>
        <div className="absolute left-5.5 top-10 w-3 h-3 rounded-full bg-[#004A80] border-4 border-white shadow-sm ring-1 ring-slate-200"></div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {/* Job Title */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80] transition-all">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Job Title*
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
                defaultValue="Senior Frontend Engineer"
              />
            </fieldset>

            {/* Company Name */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80] transition-all">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Company Name*
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
                defaultValue="Sofvence Solutions"
              />
            </fieldset>

            {/* Industry */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Industry*
              </legend>
              <div className="relative">
                <NativeSelect className="h-9 w-full bg-transparent border-none p-0 text-slate-400 font-medium text-sm focus:ring-0 appearance-none">
                  <NativeSelectOption value="">
                    Type to search or select
                  </NativeSelectOption>
                </NativeSelect>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </fieldset>

            {/* Current Position */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Current Position*
              </legend>
              <div className="relative">
                <NativeSelect className="h-9 w-full bg-transparent border-none p-0 text-slate-700 font-medium text-sm focus:ring-0 appearance-none">
                  <NativeSelectOption>Mid-Senior Level</NativeSelectOption>
                </NativeSelect>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </fieldset>
          </div>

          {/* Current Salary Section */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 space-y-4">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Current Salary
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <fieldset className="relative border border-slate-200 bg-white rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
                <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                  Amount
                </legend>
                <Input
                  variant="ghost"
                  className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
                  defaultValue="85000"
                />
              </fieldset>

              <fieldset className="relative border border-slate-200 bg-white rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
                <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                  Type
                </legend>
                <div className="relative">
                  <NativeSelect className="h-9 w-full bg-transparent border-none p-0 text-slate-700 font-medium text-sm focus:ring-0 appearance-none">
                    <NativeSelectOption>Yearly</NativeSelectOption>
                  </NativeSelect>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </fieldset>

              <fieldset className="relative border border-slate-200 bg-white rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
                <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                  Currency
                </legend>
                <div className="relative">
                  <NativeSelect className="h-9 w-full bg-transparent border-none p-0 text-slate-700 font-medium text-sm focus:ring-0 appearance-none">
                    <NativeSelectOption>USD</NativeSelectOption>
                  </NativeSelect>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </fieldset>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 items-center">
            {/* Employment Type */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Employment Type*
              </legend>
              <div className="relative">
                <NativeSelect className="h-9 w-full bg-transparent border-none p-0 text-slate-700 font-medium text-sm focus:ring-0 appearance-none">
                  <NativeSelectOption>Full-time</NativeSelectOption>
                </NativeSelect>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </fieldset>

            {/* Still Working Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded bg-white checked:bg-[#004A80] checked:border-[#004A80] transition-all"
                  defaultChecked
                />
                <svg
                  className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold text-slate-700 group-hover:text-[#004A80] transition-colors">
                Still Working*
              </span>
            </label>

            {/* Dates */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80]">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Start Date*
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-700 font-medium text-sm focus-visible:ring-0"
                defaultValue="January 2022"
              />
            </fieldset>

            <fieldset className="relative border border-slate-200 bg-slate-50/50 rounded-xl px-4 pb-1.5 pt-0.5">
              <legend className="text-[11px] font-semibold text-slate-400 px-1.5 -ml-1">
                End Date
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-300 font-medium text-sm focus-visible:ring-0"
                defaultValue="--------- ----"
                disabled
              />
            </fieldset>
          </div>

          {/* Skills Tags */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">
              Skills Gained
            </label>
            <TagInput onChange={setSkills} value={skills} />
          </div>

          {/* Description */}
          <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-2 pt-0.5 focus-within:border-[#004A80]">
            <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
              Description
            </legend>
            <Textarea
              variant="ghost"
              className="min-h-24 px-0 py-2 text-slate-700 font-medium resize-none focus-visible:ring-0 text-sm leading-relaxed"
              defaultValue="Leading the frontend team in developing an enterprise-level SaaS dashboard."
            />
          </fieldset>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex gap-8 items-center">
              <Button className="bg-[#004A80] hover:bg-[#003866] text-white px-8 h-11 font-bold rounded-lg shadow-md shadow-blue-900/10 transition-all">
                Save Experience
              </Button>
              <button
                type="button"
                className="text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Cancel
              </button>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-600 transition-colors"
            >
              <Trash2 className="w-4 h-4" /> Remove
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
