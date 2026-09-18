/* Content-shaped loading placeholders — replace bare "Loading…" text
   so the roster table, hub cards and full-page guards don't jump when
   data arrives. Respects prefers-reduced-motion via the .skeleton
   shimmer defined in index.css. */

export function SkeletonLine({ w = "100%", h = "0.9rem" }) {
  return <div className="skeleton rounded" style={{ width: w, height: h }} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 space-y-3">
      <SkeletonLine w="40%" h="0.7rem" />
      <SkeletonLine w="70%" h="1.4rem" />
      <SkeletonLine w="90%" />
    </div>
  );
}

export function SkeletonRow() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-line bg-white p-4">
      <div className="skeleton rounded-full shrink-0" style={{ width: 40, height: 40 }} />
      <div className="flex-1 space-y-2">
        <SkeletonLine w="30%" h="0.6rem" />
        <SkeletonLine w="60%" />
      </div>
    </div>
  );
}

export function FullPageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="skeleton-ring" role="status" aria-label="Loading" />
    </div>
  );
}
