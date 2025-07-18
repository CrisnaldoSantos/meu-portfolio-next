export interface LoadingGuardProps {
  children: React.ReactNode;
  loading: boolean;
}

export default function LoadingGuard({ children, loading }: LoadingGuardProps) {
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-6 bg-slate-700 rounded w-48 mb-4"></div>
        <div className="h-16 bg-slate-700 rounded w-full mb-2"></div>
        <div className="h-12 bg-slate-700 rounded w-3/4 mb-6"></div>
        <div className="h-20 bg-slate-700 rounded w-full"></div>
      </div>
    );
  }
  return <div>{children}</div>;
}
