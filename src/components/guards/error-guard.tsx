export interface ErrorGuardProps {
  error?: string;
  children: React.ReactNode;
}

export default function ErrorGuard({ error, children }: ErrorGuardProps) {
  if (error) {
    return (
      <div className="text-red-400">
        <p>Erro ao carregar dados: {error}</p>
      </div>
    );
  }

  return <div>{children}</div>;
}
