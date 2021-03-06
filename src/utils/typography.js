import Typography from 'typography'
import { black } from 'ansi-colors';

const typography = new Typography({
  title: 'Montserrat + Source Code',
  baseFontSize: '16px',
  baseLineHeight: 1.618,
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['900', '900i'],
    },
    {
      name: 'Source Code Pro',
      styles: ['400', '900'],
    },
    {
      name: 'IBM Plex Mono',
      styles: ['400'],
    },
    {
      name: 'Futara',
      styles: ['400', '900'],
    },
    {
      name: 'Futura',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Futura', 'League Spartan', 'sans-serif'],
  bodyFontFamily: ['Avenir', 'Nunito Sans', 'Helvetica Neue', 'sans-serif'],
  
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 900,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    blockquote: {
      ...scale(1 / 5),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    'pre[class*="language-"],code[class*="language-"]': {
      fontFamily: ['IBM Plex Mono', 'monospace'].join(','),
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    'h1,h2,h3,h4,h5,h6': {
      fontFamily: ['Montserrat', 'Helvetica', 'serif'].join(','),
      fontWeight: options.headerWeight,
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: 'none',
    },
    'mark,ins': {
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
  }),
})

const { rhythm, scale } = typography

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export { rhythm, scale, typography as default }
