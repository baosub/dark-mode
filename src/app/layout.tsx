

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
//import { ThemeProvider } from '@mui/material/styles';
//import theme from '../theme';
import NavigationBar from './components/NavigationBar';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@/context/ThemeContext';




export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>

          <ThemeProvider>
            <CssBaseline/>

            <NavigationBar />
            {children}</ThemeProvider>



        </AppRouterCacheProvider>

      </body>
    </html>
  )
}
