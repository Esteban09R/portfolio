import { NextResponse } from 'next/server';
import React from 'react';
import path from 'path';
import { PROFILE } from '@/constants/profile';

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: Promise<{ lang: string }> }) {
  try {
    const { lang } = await params;
    
    if (lang !== 'en' && lang !== 'es') {
      return new NextResponse('Invalid language', { status: 400 });
    }

    let data, labels;
    if (lang === 'en') {
      const enModule = await import('@/app/en/cv/cv-data');
      data = enModule.CV_DATA;
      labels = enModule.CV_LABELS;
    } else {
      const esModule = await import('@/app/es/cv/cv-data');
      data = esModule.CV_DATA;
      labels = esModule.CV_LABELS;
    }

    // Dynamic import to avoid issues with some environments
    const { renderToBuffer, Font } = await import('@react-pdf/renderer');
    const { CVDocument } = await import('@/components/cv/CVDocument');

    // Register fonts
    try {
      Font.register({
        family: 'Roboto',
        fonts: [
          { src: path.join(process.cwd(), 'public', 'fonts', 'Roboto-Regular.ttf'), fontWeight: 400 },
          { src: path.join(process.cwd(), 'public', 'fonts', 'Roboto-Medium.ttf'), fontWeight: 500 },
          { src: path.join(process.cwd(), 'public', 'fonts', 'Roboto-Bold.ttf'), fontWeight: 700 },
        ]
      });
    } catch (fontErr) {
      console.error("Font registration error:", fontErr);
    }

    // Resolve absolute path for the image to work in the server-side PDF generation
    const processedData = {
      ...data,
      image: data.image && data.image.startsWith('/') 
        ? path.join(process.cwd(), 'public', data.image) 
        : data.image
    };

    const pdfBuffer = await renderToBuffer(React.createElement(CVDocument, { 
      data: processedData, 
      labels 
    }) as any);

    return new NextResponse(pdfBuffer as any, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="CV_${PROFILE.name.replace(/\s+/g, "_")}_${lang}.pdf"`,
      },
    });
  } catch (err: any) {
    console.error("PDF Generation Error:", err);
    return new NextResponse(JSON.stringify({ error: err.message, stack: err.stack }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
