import Image from "next/image";
import { Search, Eye, Edit, Plus } from "lucide-react";
import Link from "next/link";

export default function Cohorts() {
  return (
    <div className="p-2 sm:p-4 bg-[#0B0C10] min-h-screen">
      {/* Header / Metrics */}
      <header className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-100">Cohorts</h1>
            <p className="text-sm text-slate-400">
              List of Cohorts enrolled across our edTech offerings
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            <div className="bg-[#0f1724] px-4 py-2 rounded-md border border-slate-800 text-sm min-w-[120px]">
              <div className="text-xs text-slate-400">Total cohorts</div>
              <div className="text-lg font-medium text-white">3</div>
            </div>
            <div className="bg-[#0f1724] px-4 py-3 rounded-md border border-slate-800 text-sm min-w-[120px]">
              <div className="text-xs text-slate-400">Active</div>
              <div className="text-lg font-medium text-white">2</div>
            </div>
            {/* Add New Cohort Button */}
            <Link href="/cohorts/add">
              <button className="flex items-center gap-2 bg-[#0F1724] hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors cursor-pointer">
                <Plus className="h-4 w-4" />
                Add New Cohort
              </button>
            </Link>
          </div>
        </div>
      </header>
      {/* Filter Bar and Sorting cards */}
      <div className="mb-6 bg-[#0b1220] p-3 sm:p-4 rounded-md border border-slate-800 flex flex-col lg:flex-row lg:items-center gap-3">
        <label className="flex items-center gap-2 flex-1">
          <span className="sr-only">Search cohorts</span>
          <div className="flex items-center gap-2 px-3 py-2 bg-[#0f1724] rounded-md border border-slate-800 w-full">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              placeholder="Search by title or tag"
              className="bg-transparent outline-none text-slate-200 placeholder:text-slate-500 w-full text-sm"
            />
          </div>
        </label>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="text-sm text-slate-400">Status</div>
          <div className="flex gap-2 flex-wrap">
            <button className="px-3 py-1 rounded-md text-sm border bg-slate-700 text-white border-slate-600 cursor-pointer">
              All
            </button>
            <button className="px-3 py-1 rounded-md text-sm border bg-transparent text-slate-300 border-slate-800 cursor-pointer">
              Active
            </button>
            <button className="px-3 py-1 rounded-md text-sm border bg-transparent text-slate-300 border-slate-800 cursor-pointer">
              Ongoing
            </button>
            <button className="px-3 py-1 rounded-md text-sm border bg-transparent text-slate-300 border-slate-800 cursor-pointer">
              Completed
            </button>
          </div>
        </div>
        <div className="lg:ml-auto flex items-center gap-2">
          <label className="text-sm text-slate-400">Sort</label>
          <select
            className="px-3 py-2 text-sm rounded-md bg-[#0f1724] border border-slate-800"
          >
            <option>Start date (newest)</option>
            <option>Start date (oldest)</option>
            <option>Name (A → Z)</option>
          </select>
        </div>
      </div>
      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#0b1220] rounded-md overflow-hidden border border-slate-800 shadow-sm mb-8 flex flex-col">
          <div className="relative h-48 w-full bg-slate-900 transform transition-transform duration-300 hover:scale-110 ">
            <Image
              src="https://i.pinimg.com/736x/49/f9/65/49f9657b4889e617d16138e05c121d95.jpg"
              alt="Full-Stack Web Dev — Cohort 14 cover"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-slate-100 font-medium">
                  Full-Stack Web Dev - Cohort 1
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Full-Stack Web Development. Intensive 6-month program covering HTML, CSS, JS, React, Node and deployment.
                </p>
              </div>
            </div>
            <div className="mt-3 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 rounded-md border bg-green-800/30 border-green-700 text-green-200">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
               <Link href={"/cohorts/view"}>
               <button className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm flex items-center gap-2 w-full xs:w-auto cursor-pointer">
                  <Eye className="h-4 w-4" /> View
                </button>
               </Link> 
                <Link href={"/cohorts/edit"}>
                 <button className="px-2 py-1 rounded-md border border-slate-700 text-sm flex items-center gap-2 w-full xs:w-auto cursor-pointer">
                  <Edit className="h-4 w-4" /> Edit
                </button>
                </Link>
               
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-400">
              <div>Start: Sep 1, 2025</div>
              <div>End: Feb 28, 2026</div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-[#0b1220] rounded-md overflow-hidden border border-slate-800 shadow-sm mb-8 flex flex-col">
          <div className="relative h-48 w-full bg-slate-900 transform transition-transform duration-300 hover:scale-110 ">
            <Image
              src="https://i.pinimg.com/736x/ff/ad/d0/ffadd05c91a3025f9bad3895f090ecce.jpg"
              alt="Full-Stack Web Dev — Cohort 14 cover"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-slate-100 font-medium">
                  AI Fundamentals [ AI & Machine Learning ] - Cohort 2
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Introductory program focused on machine learning fundamentals and Python.
                </p>
              </div>
            </div>
            <div className="mt-3 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 rounded-md border bg-green-800/30 border-green-700 text-green-200">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link href={"/cohorts/view"}>
                <button className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm flex items-center gap-2 w-full xs:w-auto cursor-pointer">
                  <Eye className="h-4 w-4" /> View
                </button>
                </Link>
                <Link href={"/cohorts/edit"}>
                <button className="px-2 py-1 rounded-md border border-slate-700 text-sm flex items-center gap-2 w-full xs:w-auto cursor-pointer">
                  <Edit className="h-4 w-4" /> Edit
                </button>
                </Link>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-400">
              <div>Start: Jan 1, 2026</div>
              <div>End: Feb 28, 2026</div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-[#0b1220] rounded-md overflow-hidden border border-slate-800 shadow-sm mb-8 flex flex-col">
          <div className="relative h-48 w-full bg-slate-900 transform transition-transform duration-300 hover:scale-110 ">
            <Image
              src="https://i.pinimg.com/736x/c7/3a/19/c73a19e2e58b089ea1736bddfe3d7ccc.jpg"
              alt="Full-Stack Web Dev — Cohort 14 cover"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-slate-100 font-medium">
                  Product Design - Cohort 3
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Hands-on course teaching research, prototyping and visual design.
                </p>
              </div>
            </div>
            <div className="mt-3 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 rounded-md border bg-yellow-800/70 border--700 text-yellow-200">
                  Ongoing
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link href={"/cohorts/view"}>
                 <button className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm flex items-center gap-2 w-full xs:w-auto cursor-pointer">
                  <Eye className="h-4 w-4" /> View
                </button>
                </Link>
               <Link href={"/cohorts/edit"}>
                <button className="px-2 py-1 rounded-md border border-slate-700 text-sm flex items-center gap-2 w-full xs:w-auto cursor-pointer">
                  <Edit className="h-4 w-4" /> Edit
                </button>
               </Link>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-400">
              <div>Start: Sep 1, 2025</div>
              <div>End: Feb 28, 2026</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}