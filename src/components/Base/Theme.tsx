import { ThemeProvider } from "styled-components";

export default ({ children }) => {
  return (
    <ThemeProvider theme={themeData}>
      {children}
    </ThemeProvider>
  )
};

const themeData = {
  fontSize: {
    small: '14px',
    middle: '18px',
    large: '22px',
    giant: '34px'
  },
  fontColor: {
    dark44: '#444',
    dark66: '#666',
    dark88: '#888',
    dark99: '#999'
  }
}
