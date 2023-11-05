import { Inter } from 'next/font/google'
import HeroImage from '../components/heroimage';
import TestContents from '../components/testcontents';
import JobHistory from '@/components/jobhistory';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* Header(pages/_app.js) */}
      {/* Hero画像、オーバーレイ */}
      <HeroImage />
      {/* テキスト on Hero画像 */}
      <JobHistory />
      {/* テキスト main */}
      <TestContents />
      {/* Footer(pages/_app.js) */}
    </div>
  )
}
