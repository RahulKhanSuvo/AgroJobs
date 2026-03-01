"use client";

import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search } from "lucide-react";

export default function DashboardSearch() {
  return (
    <div className="flex items-center rounded-4xl bg-[#F8FAFC] dark:bg-accent">
      {/* Location Select */}
      <div className="flex-shrink-0">
        <Select>
          <SelectTrigger className="w-full border-none shadow-none focus:ring-0">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent className="border-none shadow-none">
            <SelectGroup>
              <SelectLabel>Location</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Search Input with Icon */}
      <div className="relative flex-1">
        <Input
          placeholder="Job title, Keyword, Company"
          className="border-none shadow-none focus:ring-0 pl-10 bg-transparent"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  );
}
