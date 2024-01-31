import "~/styles/globals.css";

//Also this is not relevant as it fails with all options
export const runtime = "experimental-edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
