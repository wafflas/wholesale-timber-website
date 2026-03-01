import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-display font-bold tracking-tight">404</h1>
      <p className="text-heading mt-4 font-semibold">Η σελίδα δεν βρέθηκε</p>
      <p className="text-body mt-2 text-muted-foreground">
        Η σελίδα που αναζητάτε ενδέχεται να έχει αφαιρεθεί, να έχει μετονομαστεί
        ή να μην είναι προσωρινά διαθέσιμη.
      </p>
      <Link
        href="/"
        className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6 inline-flex h-10 items-center justify-center rounded-md px-6 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Επιστροφή στην Αρχική
      </Link>
    </div>
  );
}
