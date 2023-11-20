// components/heroimage.js

import React from 'react';

export default function HeroImage() {
    return (
        <div>
            {/* Hero画像、その上のオーバーレイ処理 */}
            <div className="w-[100%] h-[30vh] bg-emerald-500 sticky   top-14 z-30">
                <div className="w-[100vw] h-[30vh] bg-black opacity-60 absolute top-0"></div>
            </div>
            {/* Hero画像の次の黒背景、白文字テキスト */}
            <div className="bg-blue-500 w-[100vw] h-[30vh]">
                <div className='w-[100vw] h-[30vh] z-40'>
                    <div className="text-white">ABOUT</div>
                    <div className="text-white">ABOUT</div>
                    <div className="text-white">ABOUT</div>
                    <div className="text-white">ABOUT</div>
                    <div className="text-white">ABOUT</div>
                    <div className="text-white">ABOUT</div>
                    <div className="text-white">ここまでHeroimageコンポーネント↓</div>
                </div>
            </div>
            
        </div>
    )
}