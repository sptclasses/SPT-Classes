import React from "react";

export function ShimmerCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4 animate-pulse">
      <div className="shimmer-wrapper h-40 rounded-lg"></div>
      <div className="space-y-3">
        <div className="shimmer-wrapper h-5 rounded w-3/4"></div>
        <div className="shimmer-wrapper h-4 rounded w-full"></div>
        <div className="shimmer-wrapper h-4 rounded w-5/6"></div>
      </div>
      <div className="shimmer-wrapper h-10 rounded-lg w-full"></div>
    </div>
  );
}

export function ShimmerAnnouncementCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-4 animate-pulse min-h-[14rem]">
      <div className="shimmer-wrapper h-6 rounded w-2/3"></div>
      <div className="space-y-2">
        <div className="shimmer-wrapper h-4 rounded w-full"></div>
        <div className="shimmer-wrapper h-4 rounded w-5/6"></div>
        <div className="shimmer-wrapper h-4 rounded w-4/5"></div>
      </div>
      <div className="shimmer-wrapper h-8 rounded w-1/3"></div>
    </div>
  );
}

export function ShimmerReviewCard() {
  return (
    <div className="w-[400px] h-[300px] bg-blue-50 rounded-2xl shadow-md p-4 flex flex-col gap-3 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full shimmer-wrapper"></div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="shimmer-wrapper h-4 w-24 rounded"></div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="shimmer-wrapper h-4 w-4 rounded"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-1">
        <div className="shimmer-wrapper h-3 w-[90%] rounded"></div>
        <div className="shimmer-wrapper h-3 w-[80%] rounded"></div>
        <div className="shimmer-wrapper h-3 w-[70%] rounded"></div>
        <div className="shimmer-wrapper h-3 w-[60%] rounded"></div>
      </div>
    </div>
  );
}

export function ShimmerHeroCard() {
  return (
    <div className="bg-[#0B235A] text-white rounded-lg p-6 shadow-xl border border-white/10 space-y-3 animate-pulse">
      <div className="shimmer-wrapper h-5 w-32 rounded bg-white/20"></div>
      <div className="space-y-2">
        <div className="shimmer-wrapper h-4 w-full rounded bg-white/20"></div>
        <div className="shimmer-wrapper h-4 w-3/4 rounded bg-white/20"></div>
        <div className="shimmer-wrapper h-4 w-1/2 rounded bg-white/20"></div>
      </div>
      <div className="shimmer-wrapper h-4 w-28 rounded bg-orange-400/40 mt-3"></div>
    </div>
  );
}

export function ShimmerCourseCard() {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-xl animate-pulse">
      <div className="w-full h-48 bg-white/20 shimmer-wrapper"></div>
      <div className="p-6 text-white space-y-4">
        <div className="shimmer-wrapper h-6 w-3/4 rounded bg-white/20"></div>
        <div className="space-y-2">
          <div className="shimmer-wrapper h-4 w-full rounded bg-white/20"></div>
          <div className="shimmer-wrapper h-4 w-5/6 rounded bg-white/20"></div>
        </div>
        <div className="shimmer-wrapper h-4 w-1/2 rounded bg-white/20"></div>
        <div className="shimmer-wrapper h-12 w-full rounded-xl bg-white/20"></div>
      </div>
    </div>
  );
}
