import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4 m-2">{children}</main>
      <footer className="flex-none">
        <Footer />
      </footer>
    </div>
  );
}
