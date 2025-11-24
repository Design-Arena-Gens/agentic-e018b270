export const metadata = {
  title: 'بوست انستغرام - عيادة الأسنان',
  description: 'تصميم بوست احترافي لعيادة طب الأسنان',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
