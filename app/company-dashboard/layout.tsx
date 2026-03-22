import CompanySidebar from '@/components/CompanySidebar';

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <CompanySidebar />
      <main className="flex-1 lg:ml-64 p-4 md:p-8 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
