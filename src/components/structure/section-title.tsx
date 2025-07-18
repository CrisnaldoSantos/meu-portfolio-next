interface SessionTitleProps {
  sectionNumber: string;
  title: string;
}

export default function SessionTitle({
  sectionNumber,
  title,
}: SessionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-lightest-slate mb-8 font-fira flex items-center">
      <span className="text-accent mr-3">{sectionNumber}.</span> {title}
      <span className="flex-grow h-px bg-slate-700 ml-4"></span>
    </h2>
  );
}
