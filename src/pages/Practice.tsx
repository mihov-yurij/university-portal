import { useState, useEffect } from 'react';
import type { FC } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { Loader2, ChevronRight, BookOpen } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface Contract {
  subject: string;
  company: string;
  number: string;
  date: string;
  file: string;
}

const CONTRACTS_DATA: Contract[] = [
  { subject: "Про організацію практики", company: "MSC Crewing LLC", number: "№54 від 03.09.2020р", date: "До 31.12.2025р", file: "msc_crewing.pdf" },
  { subject: "Про організацію практики", company: "ПАТ \"ОДЕСКАБЕЛЬ\"", number: "№20/21 від 22.11.2021р.", date: "До 31.12.2026р.", file: "odeskabely.pdf" },
  { subject: "Про організацію практики", company: "ПП \"ЛЮКС-СМС\"", number: "№3/23 від 03.01.2023р.", date: "До 01.01.2028р.", file: "pologenya.pdf" },
  { subject: "Про організацію практики", company: "ТОВ \"АВГУСТ-V\"", number: "№4/23 від 03.01.2023р.", date: "До 01.01.2028р", file: "pologenya1.pdf" },
  { subject: "Про організацію практики", company: "ПП «Стар Транс»", number: "№5/23 від 03.01.2023р.", date: "До 01.01.2028р", file: "pologenya.pdf" },
  { subject: "Про організацію практики", company: "КП \"Одесміськелектротранс\"", number: "№6/23 від 03.01.2023р", date: "До 01.01.2028р", file: "pologenya1.pdf" },
  { subject: "Про організацію практики", company: "ТОВ \"МОРТЕЛЕКОМ\"", number: "№8/23 від 04.01.2023р.", date: "До 01.01.2028р.", file: "msc_crewing.pdf" },
  { subject: "Про організацію практики", company: "ТОВ \"ПОРТУС ЛІБЕРА\"", number: "№9/23 від 04.01.2023р", date: "До 01.01.2028р.", file: "odeskabely.pdf" },
  { subject: "Про організацію практики", company: "ТОВ \"СЕЛЕКТ БЛЕК СІ ТУРС\"", number: "№10/23 від 04.01.2023р.", date: "До 01.01.2028р.", file: "pologenya.pdf" },
  { subject: "Про організацію практики", company: "ТОВ \"ІНТЕР ТРАНС ЛОДЖИСТІКС\"", number: "№15/3/23 від 01.02.2023р.", date: "До 02.02.2028р.", file: "pologenya1.pdf" },
  { subject: "Про організацію практики", company: "ТОВ \"БАСТІКО УКРАЇНА\"", number: "№22/23 від 14.04.2023р.", date: "До 14.04.2023р.", file: "msc_crewing.pdf" },
];

export const PracticePage: FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  // Динамически внедряем правильный viewport при загрузке страницы
  useEffect(() => {
    let meta = document.querySelector('meta[name="viewport"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'viewport');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }, []);

  async function loadPdf(fileName: string) {
    if (loading) return;
    setLoading(true);
    setImages([]);
    setActiveDoc(fileName);
    try {
      const loadingTask = pdfjsLib.getDocument(`/opit/${fileName}`);
      const pdf = await loadingTask.promise;
      const urls: string[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          await page.render({ canvasContext: context, viewport, canvas }).promise;
          urls.push(canvas.toDataURL('image/webp', 0.8));
        }
      }
      setImages(urls);
    } catch (e) { 
      console.error(e); 
    }
    setLoading(false);
  }

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '16px', boxSizing: 'border-box' }}>
      
      {/* Глобальный сброс некорректных ограничений по ширине для родительских тегов */}
      <style>{`
        html, body, #root, main, .maritime-bg {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 100% !important;
          overflow-x: hidden !important;
          box-sizing: border-box !important;
        }
      `}</style>
      
      {/* Заголовки */}
      <div style={{ marginBottom: '24px', width: '100%' }}>
        <h2 style={{ color: '#1a2c3d', fontWeight: 900, fontSize: '20px', textTransform: 'uppercase', fontStyle: 'italic', margin: 0 }}>
          Організація практики
        </h2>
        <p style={{ color: '#2563eb', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', marginTop: '8px', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <BookOpen size={12} /> Методичні та договірні матеріали
        </p>
      </div>

      {/* 1. Кнопки программ */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', width: '100%', boxSizing: 'border-box' }}>
        <button 
          onClick={() => loadPdf('naskrizna_programa.pdf')}
          style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '12px', border: activeDoc === 'naskrizna_programa.pdf' ? '1px solid #3b82f6' : '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', textAlign: 'left', boxSizing: 'border-box' }}
        >
          <span style={{ color: '#1a2c3d', fontWeight: 900, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', paddingRight: '8px', lineHeight: 1.4, wordBreak: 'break-word', whiteSpace: 'normal' }}>
            Наскрізна програма практики
          </span>
          <ChevronRight size={14} style={{ color: activeDoc === 'naskrizna_programa.pdf' ? '#3b82f6' : '#cbd5e1', flexShrink: 0 }} />
        </button>

        <button 
          onClick={() => loadPdf('metodychni_rekomendat.pdf')} 
          style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '12px', border: activeDoc === 'metodychni_rekomendat.pdf' ? '1px solid #3b82f6' : '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', textAlign: 'left', boxSizing: 'border-box' }}
        >
          <span style={{ color: '#1a2c3d', fontWeight: 900, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', paddingRight: '8px', lineHeight: 1.4, wordBreak: 'break-word', whiteSpace: 'normal' }}>
            Методичні рекомендації до оформлення звіту з виробничої практики
          </span>
          <ChevronRight size={14} style={{ color: activeDoc === 'metodychni_rekomendat.pdf' ? '#3b82f6' : '#cbd5e1', flexShrink: 0 }} />
        </button>
      </div>

      {/* 2. Таблица баз практики с изолированной прокруткой */}
      <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', fontSize: '10px', width: '100%', marginBottom: '32px', boxSizing: 'border-box' }}>
        <div style={{ padding: '16px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#1a2c3d', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em' }}>
          Бази практики (договори)
        </div>
        <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', minWidth: '650px', tableLayout: 'fixed' }}>
            <thead style={{ color: '#94a3b8', textTransform: 'uppercase', fontWeight: 900, background: '#f8fafc' }}>
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <th style={{ padding: '12px 16px', width: '25%' }}>Предмет договору</th>
                <th style={{ padding: '12px 16px', width: '45%' }}>Назва підприємства</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', width: '18%' }}>Номер і дата</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', width: '12%' }}>Термін дії</th>
              </tr>
            </thead>
            <tbody style={{ fontWeight: 'bold', textTransform: 'uppercase', color: '#1a2c3d' }}>
              {CONTRACTS_DATA.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9', background: activeDoc === item.file ? '#f0fdf4' : 'transparent' }}>
                  <td style={{ padding: '12px 16px', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.subject}</td>
                  <td style={{ padding: '12px 16px', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                    <button 
                      onClick={() => loadPdf(item.file)}
                      style={{ background: 'none', border: 'none', padding: 0, fontWeight: 900, color: activeDoc === item.file ? '#2563eb' : '#1e40af', cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', fontSize: '10px', textTransform: 'uppercase' }}
                    >
                      {item.company}
                    </button>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#64748b', whiteSpace: 'nowrap' }}>{item.number}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#64748b', whiteSpace: 'nowrap' }}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Область вывода PDF страниц */}
      <div style={{ minHeight: '200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '12px', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>
        {loading && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.95)', zIndex: 10 }}>
            <Loader2 size={20} className="animate-spin" style={{ color: '#2563eb', marginBottom: '8px' }} />
            <span style={{ fontWeight: 900, color: '#1a2c3d', fontSize: '9px', textTransform: 'uppercase' }}>Завантаження...</span>
          </div>
        )}
        
        {!loading && images.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 16px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 900, fontSize: '10px' }}>
            Оберіть документ для перегляду
          </div>
        )}

        <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>
          {images.map((url, i) => (
            <div key={i} style={{ width: '100%', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9', borderRadius: '8px', overflow: 'hidden', background: '#fff', boxSizing: 'border-box' }}>
              <img 
                src={url} 
                alt={`Page ${i + 1}`} 
                style={{ width: '100%', height: 'auto', maxWidth: '100%', display: 'block', objectFit: 'contain' }} 
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};








