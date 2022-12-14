import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UIProvider } from '../context/ui'
import { EntriesProvider } from 'context/entries'
import { darkTheme } from '../themes'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}

export default MyApp
