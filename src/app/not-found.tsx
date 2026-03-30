import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="mt-4 text-2xl font-semibold">Η σελίδα δεν βρέθηκε</p>
      <p className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
        Η σελίδα που αναζητάτε ενδέχεται να έχει αφαιρεθεί, να έχει μετονομαστεί
        ή να μην είναι προσωρινά διαθέσιμη.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-6 font-semibold text-neutral-50 transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-neutral-600"
      >
        Επιστροφή στην Αρχική
      </Link>
    </div>
  );
}
