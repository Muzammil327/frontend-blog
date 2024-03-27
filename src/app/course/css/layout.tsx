import MenuLeft from "./menuleft/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="md:grid md:grid-cols-9 grid-cols-12">
        <div className="md:col-span-2">
          <MenuLeft />
        </div>
        <div className="md:col-span-7 mt-24 md:px-8">
          <h1> {children}</h1>
        </div>
      </div>
    </>
  );
}
