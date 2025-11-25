import { Cohort } from "@/utils/types";
import { Eye, Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface CohortCardProps {
  cohort: Cohort;
}

export default function CohortCard({ cohort }: CohortCardProps) {
  return (
    <div className="bg-[#0b1220] rounded-md overflow-hidden border border-slate-800 shadow-sm mb-6 flex flex-col ">
      <div className="relative h-48 w-full bg-slate-900 transform transition-transform duration-300 hover:scale-110">
        <Image
          src="https://i.pinimg.com/736x/ff/ad/d0/ffadd05c91a3025f9bad3895f090ecce.jpg"
          alt="Cohort 1"
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      
      {/* Cohort info i.e[name, description, status, startDate, endDate] */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-slate-100 font-medium">{cohort.name}</h2>
            <p className="text-sm text-slate-400 mt-1">
              {cohort.description}
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
          {/* Cohort status: active/ongoing/completed */}
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs px-2 py-1 rounded-md border bg-green-800/30 border-green-700 text-green-200">
              Active
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link href={`/cohorts/view?id=${cohort.id}`}>
              <button className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm flex items-center gap-2 w-full xs:w-auto cursor-pointer">
                <Eye className="h-6 w-6" /> View
              </button>
            </Link>
            <Link href={`/cohorts/edit?id=${cohort.id}`}>
              <button className="px-2 py-1 rounded-md border text-slate-100 border-slate-700 text-sm flex items-center gap-2 w-full xs:w-auto cursor-pointer">
                <Edit className="h-6 w-6" /> Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-3 text-sm text-slate-400">
          <div><span>Start Date: </span>{new Date(cohort.startDate).toDateString()} {" "}</div>
          <div><span>End Date: </span>{new Date(cohort.endDate).toDateString()}</div>
        </div>
      </div>
    </div>
  )
}
