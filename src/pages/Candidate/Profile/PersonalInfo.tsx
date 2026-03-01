import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import UserPicUpload from "./UserPicUpload";

export default function PersonalInfo() {
  return (
    <div className="bg-white dark:bg-accent-foreground rounded-4xl px-7 ">
      <div className="border-b">
        <h2 className="flex text-xl py-6 font-bold">
          {" "}
          <User /> Personal Information
        </h2>
      </div>
      {/* image section */}
      <div>
        <UserPicUpload />
      </div>
      <form>
        <fieldset className="relative border border-border rounded-xl p-4">
          <legend className="px-2 text-sm  font-medium text-[#004A80] dark:text-muted-foreground">
            First Name
          </legend>

          <Input
            variant="ghost"
            className="border-border placeholder:text-border"
            placeholder="Enter first name"
          />
        </fieldset>
      </form>
    </div>
  );
}
