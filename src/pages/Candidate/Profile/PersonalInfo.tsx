import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Camera } from "lucide-react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function PersonalInfo() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header with Progress Bar */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-[#004A80]" />
          <h2 className="text-xl font-bold text-slate-800">
            Personal Information
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-emerald-500">100%</span>
          <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-full" />
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Profile Photo Upload Section */}
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden transition-all group-hover:border-[#004A80]">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-10 h-10 text-slate-300" />
              )}
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-2 -right-2 p-2 bg-[#004A80] text-white rounded-lg shadow-lg hover:bg-[#003866] transition-colors"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-700">Profile Photo</h4>
            <p className="text-xs text-slate-400">PNG, JPG or GIF. Max 2MB.</p>
            <div className="flex gap-3 pt-1">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-xs font-bold text-[#004A80] hover:underline"
              >
                Upload new
              </button>
              {image && (
                <button
                  onClick={removeImage}
                  className="text-xs font-bold text-red-400 hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {/* Full Name */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80] transition-all">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Full Name
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-700 font-medium focus-visible:ring-0 text-sm"
                defaultValue="Md. Rahul Khan Suvo"
              />
            </fieldset>

            {/* Location */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80] transition-all">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Location
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-700 font-medium focus-visible:ring-0 text-sm"
                defaultValue="Dhaka, Bangladesh"
              />
            </fieldset>

            {/* Primary Role */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80] transition-all">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Primary Role*
              </legend>
              <Input
                variant="ghost"
                className="h-9 px-0 text-slate-700 font-medium focus-visible:ring-0 text-sm"
                defaultValue="Frontend Engineer"
              />
            </fieldset>

            {/* Years of Experience */}
            <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-1.5 pt-0.5 focus-within:border-[#004A80] transition-all">
              <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 -ml-1">
                Years of experience*
              </legend>
              <NativeSelect className="h-9  bg-pink-700  w-[100%] border-none p-0 text-slate-700 font-medium text-sm focus:ring-0 appearance-none cursor-pointer">
                <NativeSelectOption value="1">1+ Year</NativeSelectOption>
                <NativeSelectOption value="5">5+ Years</NativeSelectOption>
                <NativeSelectOption value="3">3+ Years</NativeSelectOption>
                <NativeSelectOption value="3">5+ Years</NativeSelectOption>
              </NativeSelect>
            </fieldset>
          </div>

          {/* Roles Multi-Select */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">
              Open to the following roles
            </label>
            <div className="flex flex-wrap items-center gap-2 p-2 border border-slate-200 rounded-xl min-h-14">
              <span className="flex items-center gap-1 bg-[#EBF5FF] text-[#004A80] px-3 py-1.5 rounded-lg text-xs font-bold border border-[#D1E9FF]">
                Mobile Developer{" "}
                <span className="ml-1 cursor-pointer opacity-60">×</span>
              </span>
              <span className="flex items-center gap-1 bg-[#EBF5FF] text-[#004A80] px-3 py-1.5 rounded-lg text-xs font-bold border border-[#D1E9FF]">
                Backend Engineer{" "}
                <span className="ml-1 cursor-pointer opacity-60">×</span>
              </span>
              <input
                className="outline-none text-sm text-slate-400 ml-2 bg-transparent"
                placeholder="Select roles..."
              />
            </div>
          </div>

          {/* Bio Section */}
          <fieldset className="relative border border-slate-200 rounded-xl px-4 pb-2 pt-0.5 focus-within:border-[#004A80] transition-all">
            <legend className="text-[11px] font-semibold text-[#004A80] px-1.5 ml-[-4px]">
              Your bio
            </legend>
            <Textarea
              variant="ghost"
              className="min-h-32 px-0 py-2 text-slate-700 font-medium resize-none focus-visible:ring-0 text-sm leading-relaxed"
              defaultValue="Dedicated and highly skilled Senior Frontend Developer with 5+ years of experience in building high-quality, scalable web applications."
            />
            <div className="absolute bottom-3 right-4 text-[10px] text-slate-400 font-semibold bg-white px-1">
              126 / 1000
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
