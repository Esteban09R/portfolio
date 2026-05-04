import React from 'react';

interface CVPreviewProps {
  lang: 'es' | 'en';
}

export default function CVPreview({ lang }: CVPreviewProps) {
  return (
    <div className="w-full h-full min-h-[1100px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/10">
      <iframe src={`/api/cv/download/${lang}`} width="100%" height="1100px" className="border-none" />
    </div>
  );
}
