export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full">
      {children}
    </main>
  );
}
