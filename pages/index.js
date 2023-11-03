import { Inter } from 'next/font/google'
import Header from '../components/header';
import HeroImage from '../components/heroimage';
import TestContents from '../components/testcontents';
import JobHistory from '@/components/jobhistory';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <HeroImage />
      <JobHistory />
      <TestContents />
    </div>
    // コマンド
  )
}
