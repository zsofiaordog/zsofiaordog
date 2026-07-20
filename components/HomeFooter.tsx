export default function HomeFooter() {
  return (
    <footer className="absolute bottom-10 left-0 z-10 w-full text-center text-xs tracking-[0.3em] text-white/50">
      © {new Date().getFullYear()} Zsófia ördög. All Rights Reserved
    </footer>
  );
}