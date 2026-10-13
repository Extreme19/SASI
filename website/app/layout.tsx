import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={metadataBase:new URL('https://joshiverse.com'),title:{default:'Joshiverse | Learn. Grow. Lead.',template:'%s | Joshiverse'},description:'Joshiverse empowers learners and communities through knowledge, opportunity and Share A Smile Initiative outreaches.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
