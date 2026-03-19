import { Link } from '@tanstack/react-router'

type Props = {
  isNotFound: true
  routeId?: string
}

export function NotFoundComponent(props: Props) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-background px-4 text-center">
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
          404
        </h1>
        <p className="mt-3 text-muted-foreground">
          Page not found.
          {props.routeId ? (
            <span className="block mt-1 text-xs text-muted-foreground/80">
              route: {props.routeId}
            </span>
          ) : null}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

