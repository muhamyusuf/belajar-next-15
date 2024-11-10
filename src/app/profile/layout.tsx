export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <p>INI NAVBAR PROFILE</p>

        {children}
      </body>
    </html>
  );
}
