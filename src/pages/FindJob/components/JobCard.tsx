import { Heart, MapPin, Clock, Star } from "lucide-react";
import CommonWrapper from "@/components/common/CommonWrapper";
import { cn } from "@/lib/utils";

export interface Job {
  id: number;
  company: string;
  logo: string;
  title: string;
  location: string;
  postedAt: string;
  salary: string;
  deadline: string;
  tags: string[];
  rating: number;
}

interface JobCardProps {
  job: Job;
  layout?: "grid" | "list";
}

export default function JobCard({ job, layout = "grid" }: JobCardProps) {
  const isList = layout === "list";

  return (
    <CommonWrapper
      className={cn(
        "group transition-all duration-300 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 relative hover:shadow-[0_20px_40px_rgba(16,185,129,0.05)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1",
        isList ? "p-4 md:p-6" : "p-6",
      )}
    >
      <button
        className={cn(
          "absolute p-2 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 transition-colors shadow-sm z-10",
          isList ? "top-4 right-4 md:top-6 md:right-6" : "top-6 right-6",
        )}
      >
        <Heart className="size-5" />
      </button>

      <div
        className={cn(
          "flex",
          isList
            ? "flex-col md:flex-row md:items-center gap-4 md:gap-6"
            : "flex-col space-y-6",
        )}
      >
        {/* Logo and Title Section */}
        <div
          className={cn(
            "flex items-start gap-5",
            isList ? "flex-1 min-w-0" : "",
          )}
        >
          <div className="size-16 shrink-0 rounded-2xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center overflow-hidden p-3 border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform duration-500">
            <img
              src={job.logo}
              alt={job.company}
              className="size-full object-contain"
            />
          </div>
          <div className="space-y-1.5 mt-1 overflow-hidden">
            <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md inline-block">
              {job.company}
            </p>
            <h4 className="text-lg font-black text-slate-900 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
              {job.title}
            </h4>
            {isList && (
              <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 mt-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-emerald-500/70" />
                  <span className="text-xs font-bold">{job.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-emerald-500/70" />
                  <span className="text-xs font-bold">{job.postedAt}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {!isList && (
          <>
            <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-emerald-500/70" />
                <span className="text-xs font-bold">{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-emerald-500/70" />
                <span className="text-xs font-bold">{job.postedAt}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight border border-slate-100 dark:border-slate-800"
                >
                  {tag}
                </span>
              ))}
              <div className="flex items-center gap-1 ml-auto">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`size-3 ${star <= job.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 dark:text-slate-800"}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* List View Extra Info / Action Section */}
        <div
          className={cn(
            "flex items-center justify-between",
            isList
              ? "md:flex-col md:items-end md:justify-center md:gap-3 md:border-l md:border-slate-100 md:dark:border-slate-800 md:pl-6 shrink-0"
              : "pt-4 border-t border-slate-50 dark:border-slate-800",
          )}
        >
          <div className={cn("space-y-1", isList ? "md:text-right" : "")}>
            <p className="text-sm md:text-base font-black text-slate-900 dark:text-white">
              {job.salary}
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
              {job.deadline}
            </p>
            {isList && (
              <div className="flex items-center gap-0.5 mt-1 md:justify-end">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`size-2.5 ${star <= job.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 dark:text-slate-800"}`}
                  />
                ))}
              </div>
            )}
          </div>
          <button className="text-xs font-black text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-all active:scale-95">
            Apply Now
          </button>
        </div>
      </div>
    </CommonWrapper>
  );
}
