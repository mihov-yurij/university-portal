import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, MessageCircle, SendHorizontal } from 'lucide-react';




export default function Contacts() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Дякуємо! Ваше повідомлення надіслано. Ми зв’яжемося з вами найближчим часом.');
  };

  return (
    <div className="bg-white min-h-screen pt-10">
      <div className="container mx-auto px-4 py-16">        
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#1a2c3d] uppercase tracking-tighter mb-4">
            Наші <span className="text-blue-600 italic">контакти</span>
          </h1>
          <div className="h-1.5 w-24 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">          
         
          <div className="space-y-8">
            <div className="bg-[#1a2c3d] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-2xl text-[#1a2c3d]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-widest text-yellow-500 mb-1">Адреса</h4>
                    <p className="font-bold text-lg leading-tight">вул. Мечникова, 34, м. Одеса, 65029</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-2xl text-[#1a2c3d]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-widest text-yellow-500 mb-1">Телефон</h4>
                    <p className="font-bold text-lg leading-tight">+38 (048) 728-31-00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-2xl text-[#1a2c3d]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-widest text-yellow-500 mb-1">Email</h4>
                    <p className="font-bold text-lg leading-tight">mb-m@onmu.org.ua</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 space-y-4">
              <h3 className="text-xl font-black text-[#1a2c3d] uppercase tracking-tight mb-4">Напишіть нам</h3>
              <input type="text" placeholder="Ваше ім'я" required className="w-full p-4 bg-white rounded-2xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-yellow-500 transition-all" />
              <input type="email" placeholder="Ваш Email" required className="w-full p-4 bg-white rounded-2xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-yellow-500 transition-all" />
              <textarea placeholder="Ваше повідомлення" rows={4} className="w-full p-4 bg-white rounded-2xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-yellow-500 transition-all resize-none"></textarea>
              <button className="w-full bg-[#1a2c3d] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3">
                <Send size={18} /> Надіслати запит
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe 
                src="https://google.com" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
            
      <div className="flex justify-center gap-6">
  <a href="#" className="p-4 bg-slate-100 rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
    <Globe size={24} />
  </a>
  <a href="#" className="p-4 bg-slate-100 rounded-2xl hover:bg-pink-600 hover:text-white transition-all">
    <MessageCircle size={24} />
  </a>
  <a href="#" className="p-4 bg-slate-100 rounded-2xl hover:bg-blue-400 hover:text-white transition-all">
    <SendHorizontal size={24} />
  </a>
</div>

          </div>

        </div>
      </div>
    </div>
  );
}

