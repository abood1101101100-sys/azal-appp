import { Button } from "@/components/ui/button";
import { Plane, Calendar, MapPin, Users, Phone, ArrowLeft, ShieldCheck, CheckCircle2, Globe2, Quote, Mail, Facebook, Instagram, Linkedin, Twitter, FileText, Menu } from "lucide-react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-secondary">
      {count}{suffix}
    </div>
  );
}

export default function Home() {
  const [tripType, setTripType] = useState("round");

  return (
    <div className="min-h-screen w-full flex flex-col font-sans selection:bg-secondary selection:text-primary">
      {/* Top Utility Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white text-sm">
        <div className="container mx-auto px-4 h-11 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 text-white/90 order-3">
            <a href="#" aria-label="Threads" className="hover:text-secondary transition-colors"><FileText className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-secondary transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-secondary transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="X" className="hover:text-secondary transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-secondary transition-colors"><Facebook className="h-4 w-4" /></a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/90 order-2">
            <MapPin className="h-4 w-4 text-secondary" />
            <span>عدن، اليمن</span>
          </div>
          <div className="flex items-center gap-5 text-white/90 order-1">
            <a href="mailto:info@azalairlinesye.com" className="hidden sm:flex items-center gap-2 hover:text-secondary transition-colors" dir="ltr">
              <Mail className="h-4 w-4 text-secondary" />
              <span>info@azalairlinesye.com</span>
            </a>
            <a href="tel:+967772723472" className="flex items-center gap-2 hover:text-secondary transition-colors" dir="ltr">
              <Phone className="h-4 w-4 text-secondary" />
              <span>+967772723472</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="fixed top-11 left-0 right-0 z-40 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
          <Link href="/">
            <img 
              src="https://azalairlinesye.com/wp-content/uploads/2025/09/WhatsApp_Image_2025-10-15_at_8.57.13_PM-removebg-preview.png" 
              alt="طيران آزال" 
              className="h-14 w-auto object-contain cursor-pointer"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-7 font-display font-semibold text-primary text-[15px]">
            <a href="#home" className="text-secondary hover:text-secondary transition-colors">الرئيسية</a>
            <a href="#services" className="hover:text-secondary transition-colors">خدماتنا</a>
            <a href="#news" className="hover:text-secondary transition-colors">اخبار الشركة</a>
            <a href="#about" className="hover:text-secondary transition-colors">من نحن</a>
            <a href="#instructions" className="hover:text-secondary transition-colors">تعليمات المسافر</a>
            <a href="#policies" className="hover:text-secondary transition-colors">قواعد عامة</a>
            <a href="#contact" className="hover:text-secondary transition-colors">تواصل معنا</a>
          </div>
          <div className="flex items-center gap-3">
            <Button className="hidden md:flex bg-primary text-white hover:bg-primary/90 font-display rounded-full px-6">
              تصفح بروفايل للشركة
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden text-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-44 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[100vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/hero-bg.png" 
            alt="طائرة آزال في السماء" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/85 via-primary/50 to-transparent"></div>
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-primary-foreground drop-shadow-lg text-center lg:text-right order-2 lg:order-1"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6 font-display text-sm font-semibold backdrop-blur-sm">
              طيران آزال | Azal Airlines
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight mb-6 text-white">
              <span className="text-secondary">اكتشف آفاقك</span> الجديدة <br/>
              وجهتك القادمة <br className="hidden lg:block"/>
              تبدأ من هنا
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl text-white/90 font-medium lg:mr-0 lg:ml-auto">
              الناقل الجوي المفضل الذي يربط بين اليمن والعالم، تجربة سفر استثنائية تعكس أصالة الضيافة اليمنية وروح الابتكار.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-xl"
          >
            <Card className="p-6 bg-background/95 backdrop-blur-xl border-secondary/20 shadow-2xl shadow-primary/20 rounded-2xl">
              <div className="flex gap-4 mb-6 border-b border-border pb-4">
                <button 
                  onClick={() => setTripType("round")}
                  className={`font-display font-semibold pb-2 border-b-2 transition-colors ${tripType === 'round' ? 'border-secondary text-primary' : 'border-transparent text-muted-foreground hover:text-primary'}`}
                >
                  ذهاب وعودة
                </button>
                <button 
                  onClick={() => setTripType("one")}
                  className={`font-display font-semibold pb-2 border-b-2 transition-colors ${tripType === 'one' ? 'border-secondary text-primary' : 'border-transparent text-muted-foreground hover:text-primary'}`}
                >
                  ذهاب فقط
                </button>
                <button 
                  onClick={() => setTripType("multi")}
                  className={`font-display font-semibold pb-2 border-b-2 transition-colors ${tripType === 'multi' ? 'border-secondary text-primary' : 'border-transparent text-muted-foreground hover:text-primary'}`}
                >
                  متعدد المدن
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
                    <Input placeholder="من (مدينة أو مطار)" className="pr-3 pl-10 h-12 bg-white" />
                  </div>
                  <div className="relative group">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
                    <Input placeholder="إلى (مدينة أو مطار)" className="pr-3 pl-10 h-12 bg-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
                    <Input type="date" className="pr-3 pl-10 h-12 bg-white text-right text-muted-foreground" />
                  </div>
                  {tripType === 'round' && (
                    <div className="relative group">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
                      <Input type="date" className="pr-3 pl-10 h-12 bg-white text-right text-muted-foreground" />
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-secondary transition-colors" />
                  <Input placeholder="1 مسافر، الدرجة السياحية" className="pr-3 pl-10 h-12 bg-white cursor-pointer" readOnly />
                </div>

                <Button className="w-full h-14 text-lg font-display font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-4 rounded-xl shadow-lg shadow-secondary/20 transition-all hover:scale-[1.02]">
                  ابحث عن رحلتك
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-primary mb-6">قصتنا تبدأ من هنا</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                تأسست شركة طيران آزال لتكون الناقل الجوي المفضل الذي يربط بين اليمن والعالم، برؤية تركز على الجودة والالتزام بالمواعيد وتقديم تجربة سفر مريحة وآمنة. نحن نفخر بحمل اسم اليمن وتقديم ضيافته الأصيلة في كل رحلة.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  <Globe2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  أن نصبح الخيار الأول للمسافرين من وإلى المنطقة، وأن نكون علامة مميزة في صناعة الطيران عبر تقديم خدمات حديثة وموثوقة تلبي تطلعات عملائنا.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  <Plane className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">رسالتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نسعى إلى ربط الناس بالمدن والوجهات بأمان وكفاءة عالية، مع توفير تجربة سفر استثنائية تعكس أصالة الضيافة اليمنية وروح الابتكار.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold font-display tracking-wider mb-2 block">اكتشف العالم</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-4">وجهاتنا المميزة</h2>
            <p className="text-muted-foreground text-lg">نسافر بك إلى أهم المدن في المنطقة والعالم، مع باقة من الخيارات التي تناسب تطلعاتك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: '/src/assets/sanaa.png', title: 'صنعاء', desc: 'عبق التاريخ والأصالة' },
              { img: '/src/assets/cairo.png', title: 'القاهرة', desc: 'أم الدنيا وسحر النيل' },
              { img: '/src/assets/dubai.png', title: 'دبي', desc: 'مستقبل الأعمال والترفيه' },
              { img: '/src/assets/istanbul.png', title: 'إسطنبول', desc: 'ملتقى القارات والثقافات' },
              { img: '/src/assets/maldives.png', title: 'المالديف', desc: 'جنة الأرض والملاذ الاستوائي' },
              { img: '/src/assets/hero-bg.png', title: 'سيئون', desc: 'قلب حضرموت النابض' },
            ].map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] cursor-pointer"
              >
                <img src={dest.img} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">{dest.title}</h3>
                  <p className="text-white/80">{dest.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-secondary text-primary hover:bg-secondary hover:text-secondary-foreground font-display text-lg px-8 h-12">
              عرض جميع الوجهات
            </Button>
          </div>
        </div>
      </section>

      {/* Services & Experience */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <span className="text-secondary font-bold font-display tracking-wider block">خدماتنا</span>
              <h2 className="text-4xl font-display font-bold text-primary">تجربة سفر لا تُنسى</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نقدم لك مجموعة متكاملة من الخدمات التي تضمن لك راحة البال من لحظة حجز تذكرتك وحتى وصولك إلى وجهتك بأمان.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "درجات سفر متنوعة", desc: "استمتع بالراحة في الدرجة السياحية أو الرفاهية المطلقة في درجة رجال الأعمال مع مقاعد واسعة وقوائم طعام مختارة." },
                  { title: "خدمات الشحن الجوي", desc: "حلول لوجستية متكاملة لنقل بضائعك بأمان وسرعة إلى مختلف الوجهات حول العالم." },
                  { title: "دعم متواصل", desc: "خدمة عملاء على مدار الساعة لمساعدتك قبل وأثناء وبعد رحلتك لضمان تجربة سلسة." }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex gap-4 items-start"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10"
              >
                <img src="/src/assets/cabin.png" alt="مقصورة الطائرة" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/90 to-transparent text-white">
                  <h4 className="text-2xl font-display font-bold mb-2">درجة رجال الأعمال</h4>
                  <p className="text-white/80">رفاهية لا تضاهى وعناية بأدق التفاصيل</p>
                </div>
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/20 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-white">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="h-12 w-12 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">الأمان أولاً، دائماً</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                نلتزم بتطبيق أعلى معايير الطيران الدولية (ICAO & IATA) لضمان أعلى مستويات الأمان والجودة في جميع عملياتنا. أسطولنا يخضع لصيانة دورية صارمة وطواقمنا مدربة تدريباً عالياً لضمان سلامتك.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center font-display font-bold text-primary text-xl p-4 text-center">IATA</div>
              <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center font-display font-bold text-primary text-xl p-4 text-center">ICAO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Counter end={15} suffix="+" />
              <p className="text-muted-foreground font-medium">وجهة حول العالم</p>
            </div>
            <div className="space-y-2">
              <Counter end={50} suffix="+" />
              <p className="text-muted-foreground font-medium">رحلة أسبوعياً</p>
            </div>
            <div className="space-y-2">
              <Counter end={99} suffix="%" />
              <p className="text-muted-foreground font-medium">دقة في المواعيد</p>
            </div>
            <div className="space-y-2">
              <Counter end={250} suffix="K+" />
              <p className="text-muted-foreground font-medium">مسافر سعيد</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">ماذا يقول ضيوفنا</h2>
            <p className="text-muted-foreground text-lg">آراء المسافرين الذين اختاروا طيران آزال لرحلاتهم.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "ابراهيم", text: "تجربة سفر ممتازة، طاقم الطائرة كان ودوداً جداً والخدمة تفوق التوقعات. سأكرر التجربة بالتأكيد." },
              { name: "سعيد علي", text: "دقة في المواعيد واهتمام بأدق التفاصيل. طيران آزال يمثل الواجهة المشرفة لليمن." },
              { name: "نورا", text: "رحلتي من القاهرة إلى صنعاء كانت مريحة جداً، الإجراءات سلسة والطائرة نظيفة وحديثة." }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border relative"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-secondary/20" />
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">"{test.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary">{test.name}</h4>
                    <p className="text-sm text-muted-foreground">مسافر عبر آزال</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Teasers */}
      <section id="news" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-primary mb-4">أحدث الأخبار والعروض</h2>
              <p className="text-muted-foreground text-lg">ابق على اطلاع بأحدث وجهاتنا وعروضنا الحصرية.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex text-primary hover:text-secondary font-display">
              عرض كل الأخبار <ArrowLeft className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden mb-6 aspect-video">
                <img src="/src/assets/istanbul.png" alt="سويسرا" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <span className="text-secondary font-bold font-display text-sm mb-2 block">وجهات جديدة</span>
              <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-secondary transition-colors">سويسرا – لوحة طبيعية ساحرة</h3>
              <p className="text-muted-foreground">اكتشف جمال الطبيعة في سويسرا مع رحلاتنا الجديدة المباشرة ابتداءً من الشهر القادم...</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden mb-6 aspect-video">
                <img src="/src/assets/maldives.png" alt="المالديف" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <span className="text-secondary font-bold font-display text-sm mb-2 block">عروض سياحية</span>
              <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-secondary transition-colors">جزر المالديف – جنة على الأرض</h3>
              <p className="text-muted-foreground">استمتع بعروض الصيف الحصرية لرحلات جزر المالديف، عطلة لا تنسى بانتظارك...</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Passenger Instructions */}
      <section id="instructions" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold font-display tracking-wider mb-2 block">قبل السفر</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-4">تعليمات المسافر</h2>
            <p className="text-muted-foreground text-lg">كل ما تحتاج معرفته لتجربة سفر سلسة وآمنة مع طيران آزال.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "وثائق السفر", desc: "تأكد من صلاحية جواز سفرك لمدة لا تقل عن 6 أشهر، وأن لديك التأشيرات اللازمة قبل موعد الرحلة بوقت كافٍ." },
              { title: "الأمتعة المسموح بها", desc: "للدرجة السياحية 23 كجم، ولدرجة رجال الأعمال 32 كجم. يُسمح بحقيبة يد واحدة لا تتجاوز 7 كجم." },
              { title: "وقت الوصول للمطار", desc: "ننصح بالوصول قبل موعد الرحلة بثلاث ساعات على الأقل لإتمام إجراءات السفر بكل يسر." },
              { title: "الأمتعة الممنوعة", desc: "يُمنع حمل المواد القابلة للاشتعال أو الحادة في الأمتعة المحمولة. راجع قائمة الممنوعات قبل الرحلة." },
              { title: "خدمات ذوي الاحتياجات", desc: "نوفر مساعدة خاصة لكبار السن وذوي الاحتياجات الخاصة، يرجى إبلاغنا عند الحجز لتجهيز الترتيبات." },
              { title: "السفر مع الأطفال", desc: "نرحب بالأطفال على متن طائراتنا ونوفر لهم مقاعد مخصصة ووجبات مناسبة لجميع الأعمار." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-secondary/50 hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Policies */}
      <section id="policies" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold font-display tracking-wider mb-2 block">القواعد والشروط</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-4">قواعد عامة</h2>
            <p className="text-muted-foreground text-lg">نرجو الاطلاع على القواعد والشروط الخاصة بسياسات الحجز والإلغاء والتغيير.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { title: "سياسة الحجز", desc: "يتم تأكيد الحجز فور إتمام عملية الدفع، ويرسل تأكيد الحجز على البريد الإلكتروني المسجل خلال دقائق." },
              { title: "سياسة الإلغاء", desc: "يحق للمسافر إلغاء التذكرة قبل 48 ساعة من موعد الإقلاع مع تطبيق رسوم إدارية حسب نوع التذكرة المحجوزة." },
              { title: "تعديل الحجز", desc: "يمكن تعديل تاريخ الرحلة قبل 24 ساعة من موعد الإقلاع عبر التواصل مع خدمة العملاء أو عبر الموقع الإلكتروني." },
              { title: "الاسترجاع المالي", desc: "تتم عمليات الاسترجاع خلال 7-14 يوم عمل لنفس وسيلة الدفع المستخدمة عند الحجز." },
              { title: "تأخير وإلغاء الرحلات", desc: "في حال تأخير أو إلغاء الرحلة، نوفر بدائل مناسبة وفقاً لمعايير IATA وحقوق المسافرين الدولية." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-border flex gap-4 items-start hover:border-secondary/50 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold font-display tracking-wider mb-2 block">نحن هنا من أجلك</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-4">تواصل معنا</h2>
            <p className="text-muted-foreground text-lg">فريقنا متاح على مدار الساعة للإجابة على استفساراتك ومساعدتك في حجز رحلتك القادمة.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-background border border-border text-center"
            >
              <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">اتصل بنا</h3>
              <a href="tel:+967772723472" dir="ltr" className="text-muted-foreground hover:text-secondary transition-colors block">+967 772 723 472</a>
              <p className="text-sm text-muted-foreground mt-2">متاح على مدار الساعة</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border text-center"
            >
              <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">راسلنا</h3>
              <a href="mailto:info@azalairlinesye.com" dir="ltr" className="text-muted-foreground hover:text-secondary transition-colors block">info@azalairlinesye.com</a>
              <p className="text-sm text-muted-foreground mt-2">رد خلال 24 ساعة</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-background border border-border text-center"
            >
              <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">زورنا</h3>
              <p className="text-muted-foreground">عدن، اليمن</p>
              <p className="text-sm text-muted-foreground mt-2">المكتب الرئيسي</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <img 
                src="https://azalairlinesye.com/wp-content/uploads/2025/09/WhatsApp_Image_2025-10-15_at_8.57.13_PM-removebg-preview.png" 
                alt="طيران آزال" 
                className="h-16 w-auto object-contain brightness-0 invert mb-6"
              />
              <p className="text-white/70 leading-relaxed mb-6">
                تأسست شركة طيران آزال لتكون الناقل الجوي المفضل الذي يربط بين اليمن والعالم، برؤية تركز على الجودة والالتزام بالمواعيد.
              </p>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-display font-bold mb-6 text-secondary">روابط سريعة</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-secondary transition-colors">احجز رحلة</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">إدارة الحجز</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">حالة الرحلة</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-display font-bold mb-6 text-secondary">عن الشركة</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#about" className="hover:text-secondary transition-colors">من نحن</a></li>
                <li><a href="#about" className="hover:text-secondary transition-colors">رؤيتنا ورسالتنا</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">الوظائف</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-display font-bold mb-6 text-secondary">النشرة الإخبارية</h4>
              <p className="text-white/70 mb-4">اشترك ليصلك أحدث العروض والوجهات الجديدة.</p>
              <div className="flex gap-2">
                <Input placeholder="البريد الإلكتروني" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-right" />
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} طيران آزال. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
            }
