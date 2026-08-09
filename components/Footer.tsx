export default function Footer() {
  return (
    <footer className="w-full mt-32 py-12 text-center text-xs tracking-[0.12em] opacity-50">
      © {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
}