import Link from "next/link";

const SocialSidebar = () => {
  return (
    <>
      {/* Left Sidebar - Social Links */}
      <div className="hidden md:flex fixed bottom-0 left-10 flex-col items-center space-y-6">
        <Link
          href="https://github.com/CrisnaldoSantos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-accent transition-all hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.73c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/crisnaldo-carvalho-76741212b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-accent transition-all hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </Link>
        <div className="w-px h-24 bg-slate"></div>
      </div>

      {/* Right Sidebar - Email */}
      <div className="hidden md:flex fixed bottom-0 right-10 flex-col items-center space-y-6">
        <Link
          href="mailto:crisnaldo.carvalho@outlook.com"
          className="font-fira text-sm tracking-widest [writing-mode:vertical-rl] text-slate hover:text-accent transition-all hover:-translate-y-1"
        >
          crisnaldo.carvalho@outlook.com
        </Link>
        <div className="w-px h-24 bg-slate"></div>
      </div>
    </>
  );
};

export default SocialSidebar;
