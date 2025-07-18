import ErrorGuard, { ErrorGuardProps } from "./error-guard";
import LoadingGuard, { LoadingGuardProps } from "./loading-guard";

type HookValidateGuardProps = ErrorGuardProps & LoadingGuardProps;

export default function HookValidateGuard({
  error,
  loading,
  children,
}: HookValidateGuardProps) {
  return (
    <LoadingGuard loading={loading}>
      <ErrorGuard error={error}>{children}</ErrorGuard>
    </LoadingGuard>
  );
}
