import React from "react";
import { notFound } from "next/navigation";
import { FaGlobe } from "react-icons/fa";
import { BadgeLink } from "@/components/common/BadgeLinik";
import CVDownloadButton from "@/components/cv/CVDownloadButton";
import CVPreview from "@/components/cv/CVPreview";
import Language from "@/components/common/Language";

export const dynamic = "force-dynamic";

export default function CVPage() {
  if (process.env.NODE_ENV === "production") return notFound();

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <BackgroundDecor />

      {/* Main Container - Aligned to 210mm (A4) */}
      <div className="max-w-[210mm] mx-auto flex flex-col gap-8">
        
        {/* Header Section */}
        <header className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 leading-tight">
                Life <span className="text-primary">Project</span>
              </h1>
              <p className="text-slate-400 text-sm italic">
                Curriculum Vitae in PDF format
              </p>
            </div>
            <CVDownloadButton lang="en" label="Download" />
          </div>

          <div className="mt-6 sm:mt-0">
            <Language target="cv" />
          </div>
        </header>

        {/* Document Section */}
        <main className="w-full flex justify-center group shadow-2xl rounded-sm overflow-hidden">
          <div className="relative w-full">
            <CVPreview lang="en" />
          </div>
        </main>
      </div>

      <PrintStyles />
    </div>
  );
}

function BackgroundDecor() {
  return (
    <>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] -z-10" />
    </>
  );
}

function PrintStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @media print {
          body { background: white !important; margin: 0; padding: 0; }
          nav, button, footer, header { display: none !important; }
          .max-w-[210mm] { max-width: 100% !important; margin: 0 !important; }
        }
      `,
      }}
    />
  );
}
