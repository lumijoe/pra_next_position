import { Inter } from 'next/font/google'
import HeroImage from '../components/heroimage';
import TestContents from '../components/testcontents';
import JobHistory from '@/components/jobhistory';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* Header(pages/_app.js) */}
      <HeroImage />
      <JobHistory />
      <TestContents />
      {/* Footer(pages/_app.js) */}
    </div>
    // コマンド
  )
}
