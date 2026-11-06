import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ht-ink pt-24 text-ht-paper">
      <PageMeta
        title="Page not found"
        description="The page you requested is not on the Hunza Technologies website."
        path="/404"
      />
      <div className="container-site">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-5xl">This page is not here.</h1>
        <p className="mt-4 max-w-md text-ht-paper/70">
          The address may have changed. Use the menu to reach Home, Services, Training or Contact.
        </p>
        <Link to="/" className="btn btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
