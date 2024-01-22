export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="pt-20">{children}</section>;
}
