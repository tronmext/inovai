import Sidebar from '@/components/Sidebar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-4 md:p-8 overflow-x-hidden flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
