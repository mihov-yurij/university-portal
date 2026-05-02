import { GraduationCap, Users, BookOpen, ExternalLink, Link as LinkIcon, FileCheck, Globe } from 'lucide-react';

const MEMBERS = [
  {
    id: 1,
    name: "Савельєва І.В.",
    role: "Професор кафедри",
    degree: "д.е.н., професор",
    photo: "/lecturers/savelieva.png",
    bio: "Наукові досягнення — більше 60 наукових робіт. Керує міжнародними грантовими програмами.",
    interests: "управління контейнерним бізнесом, гендерна рівність",
    links: {
      scholar: "https://google.com.ua",
      orcid: "https://orcid.org",
      scopus: "https://scopus.com"
    }
  },
  {
    id: 2,
    name: "Котлубай Олексій Михайлович",
    role: "Науковий керівник",
    degree: "д.е.н., професор",
    photo: "/lecturers/kotlubay.png",
    bio: "Почесний працівник морського та річкового транспорту України. Нагороджений відзнакою МОН України «За наукові досягнення».",
    links: { scholar: "#", orcid: "#", scopus: "#" }
  },
  {
    id: 3,
    name: "Гребенник Н.Г.",
    role: "Доцент кафедри",
    degree: "к.е.н., доцент",
    photo: "/lecturers/grebenik.png",
    bio: "Близько 120 наукових праць: 5 монографій, 11 підручників, 39 статей у фахових виданнях.",
    interests: "Підприємництво, малий бізнес, кластеризація в економіці",
    links: { scholar: "https://google.com.ua", orcid: "https://orcid.org", scopus: "#" }
  },
  {
    id: 4,
    name: "Матвієнко М.В.",
    role: "Доцент кафедри",
    degree: "к.е.н., доцент",
    photo: "/lecturers/matviyenko.jpg",
    bio: "Більше 50 робіт, в т.ч. 3 монографії. Досліджує фінансовий менеджмент та бізнес-моделювання.",
    interests: "Управління бізнесом, фінансовий менеджмент, голуба економіка",
    links: { scholar: "https://google.com.ua", orcid: "https://orcid.org", scopus: "https://scopus.com" }
  },
  {
    id: 5,
    name: "Щербина В.В.",
    role: "Доцент кафедри",
    degree: "к.е.н., доцент",
    photo: "/lecturers/shcherbina.jpg",
    bio: "69 наукових робіт, у тому числі 39 статей у фахових виданнях. Співавтор 3 монографій.",
    interests: "Транспортний бізнес, логістика, морська торгівля",
    links: { scholar: "https://google.com.ua", orcid: "https://orcid.org", scopus: "https://scopus.com" }
  },
  {
    id: 6,
    name: "Ремзіна Наталя Андріївна",
    role: "Доцент кафедри",
    degree: "к.е.н., доцент",
    photo: "/lecturers/remzina.png",
    bio: "40 наукових робіт, 3 статті Scopus. Досліджує ланцюжки постачань та маркетинг.",
    interests: "Логістика, туризм, бізнес-комунікації, реклама",
    links: { scholar: "https://google.com.ua", orcid: "https://orcid.org", scopus: "https://scopus.com" }
  }
];

export default function ScienceSchool() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HEADER SECTION */}
      <section className="bg-[#1a2c3d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="text-yellow-400" size={36} />
            <p className="text-yellow-400 font-black uppercase tracking-[0.3em] text-xs">Наукова школа</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
            Підприємництво на <br /> морському транспорті
          </h1>
          <div className="flex gap-10 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <Users className="text-yellow-400" size={20} />
              <span className="font-bold uppercase text-[10px] tracking-widest">2 доктори наук</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-yellow-400" size={20} />
              <span className="font-bold uppercase text-[10px] tracking-widest">6 кандидатів наук</span>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-24">
            {MEMBERS.map((person) => (
              <div key={person.id} className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-1/3">
                  <img src={person.photo} alt={person.name} className="rounded-[3rem] shadow-2xl border-8 border-slate-50 w-full aspect-[4/5] object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <span className="text-yellow-500 font-black uppercase text-[10px] tracking-[0.2em] mb-2 block">{person.role}</span>
                  <h3 className="text-3xl font-black text-[#1a2c3d] uppercase mb-2">{person.name}</h3>
                  <p className="text-slate-400 font-bold italic mb-6">{person.degree}</p>
                  <p className="text-slate-600 leading-relaxed text-justify mb-8">{person.bio}</p>
                  {person.interests && (
                    <div className="mb-8">
                      <p className="text-[10px] font-black text-[#1a2c3d] uppercase mb-3 tracking-widest">Область інтересів</p>
                      <p className="text-sm text-slate-500">{person.interests}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(person.links).map(([key, url]) => (
                      url !== "#" && (
                        <a key={key} href={url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors">
                          {key === 'scholar' && <BookOpen size={14} />}
                          {key === 'orcid' && <LinkIcon size={14} />}
                          {key === 'scopus' && <ExternalLink size={14} />}
                          {key}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH WORK SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black text-[#1a2c3d] uppercase mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-yellow-500"></span>
            Науково-дослідна робота кафедри
          </h2>
          
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 mb-10">
            <p className="text-yellow-500 font-black text-[10px] tracking-widest uppercase mb-4">Поточна тема (2023-2025)</p>
            <h4 className="text-xl font-black text-[#1a2c3d] uppercase leading-tight mb-6">
              Економіко-організаційне обґрунтування розробки маркетингових стратегій розвитку підприємств морського, туристичного та готельно-ресторанного бізнесу
            </h4>
            <div className="flex flex-wrap gap-6 text-[11px] font-bold uppercase text-slate-400 mb-8 pb-8 border-b">
              <span>Реєстрація: 0123U101181</span>
              <span>Керівник: доц. Наврозова Ю.О.</span>
            </div>
            <button className="bg-[#1a2c3d] text-white px-8 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest flex items-center gap-3 hover:bg-blue-900 transition-all">
              <FileCheck size={18} /> Акт впровадження
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <p className="text-slate-400 font-black text-[10px] tracking-widest uppercase mb-4 text-blue-600">Міжнародні проекти</p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Globe className="shrink-0 text-yellow-500" />
                    <p className="text-sm font-bold text-[#1a2c3d]">Danube Transnational Program (Smart & Sustainable Transport Chains)</p>
                  </div>
                  <div className="flex gap-4">
                    <Globe className="shrink-0 text-yellow-500" />
                    <p className="text-sm font-bold text-[#1a2c3d]">Nansen EDU-2025 (AI-Driven Green & Digital Maritime Education)</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
