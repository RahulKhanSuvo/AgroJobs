"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  value?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
  className?: string;
};

export default function SkillTagsInput({
  value = [],
  onChange,
  placeholder = "Type /react and press enter",
  className,
}: Props) {
  const [tags, setTags] = React.useState<string[]>(value);
  const [input, setInput] = React.useState("");

  // Sync external value changes (important)
  React.useEffect(() => {
    setTags(value);
  }, [value]);

  const addTag = (tag: string) => {
    if (!tag || tags.includes(tag)) return;

    const newTags = [...tags, tag];
    setTags(newTags);
    onChange?.(newTags);
  };

  const removeTag = (tag: string) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    onChange?.(newTags);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      let tag = input.trim();

      if (tag.startsWith("/")) tag = tag.slice(1);

      if (tag.length > 0) {
        addTag(tag.toLowerCase());
        setInput("");
      }
    }

    if (e.key === "Backspace" && !input && tags.length) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div
      className={cn(
        "flex min-h-8 flex-wrap items-center gap-1.5 rounded-md border border-border px-1.5 py-1 text-xs focus-within:ring-1 focus-within:ring-ring",
        className,
      )}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 rounded bg-[#004A80]/10 px-1.5 py-0.5 text-[#004A80]"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="hover:text-red-500"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 min-w-15 bg-transparent outline-none text-xs placeholder:text-muted-foreground"
      />
    </div>
  );
}
