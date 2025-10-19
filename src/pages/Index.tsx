import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Wrench',
      title: 'Мелкий ремонт',
      description: 'Устранение протечек, замена смесителей, розеток и выключателей',
      color: 'from-orange-500 to-red-500',
      image: 'https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/9d210647-21bf-430e-84d5-72f207e25f2f.jpg'
    },
    {
      icon: 'Hammer',
      title: 'Сборка мебели',
      description: 'Профессиональная сборка любой мебели, полки, карнизы',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/657d11fa-40fb-4dcd-adda-3571d1ea8dd9.jpg'
    },
    {
      icon: 'Paintbrush',
      title: 'Отделочные работы',
      description: 'Поклейка обоев, покраска стен, укладка ламината',
      color: 'from-purple-500 to-pink-500',
      image: 'https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/6f9ff3f0-9ce1-42ef-8a3a-f46da4457d88.jpg'
    },
    {
      icon: 'Lightbulb',
      title: 'Электрика',
      description: 'Замена проводки, установка светильников и люстр',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/eabce156-0929-4c00-ac73-ea2644031fb5.jpg'
    },
    {
      icon: 'Droplet',
      title: 'Сантехника',
      description: 'Установка и ремонт сантехники, прочистка труб',
      color: 'from-cyan-500 to-blue-500',
      image: 'https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/e336eaa2-db21-468b-9912-431111fa0d60.jpg'
    },
    {
      icon: 'Sparkles',
      title: 'Массаж',
      description: 'Расслабляющий и оздоровительный массаж на дому',
      color: 'from-green-500 to-emerald-500',
      image: 'https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/8caddbc7-8e6f-43e2-b1f5-2a5c7fab2e76.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните имя и телефон',
        variant: 'destructive'
      });
      return;
    }
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in order-2 md:order-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                Муж на час
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Профессиональные услуги по дому и не только
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover-scale"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Вызвать мастера
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 hover-scale"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="List" className="mr-2" size={20} />
                  Наши услуги
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in order-1 md:order-2">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/cf136ad4-4d55-4580-85f4-1693d0987e27.jpg"
                alt="Профессиональный мастер"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Решим любую бытовую проблему быстро и качественно
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-300 hover:-translate-y-2 bg-white overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 shadow-xl`}>
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Наши мастера
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Профессионалы своего дела с большим опытом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/574ccacd-1f90-4715-a669-0aeb5d468f25.jpg" 
                alt="Мастер" 
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Профессиональный подход</h3>
                <p className="text-white/90">Опыт работы более 10 лет</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/d44375f7-acbc-4774-be4e-e8bfca7e55f5.jpg" 
                alt="Мастер" 
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Качественные инструменты</h3>
                <p className="text-white/90">Современное оборудование</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://cdn.poehali.dev/projects/43d1f06e-85b6-4a82-b62a-424de89e658c/files/ab3c8451-7837-4b89-bb03-ac204bd291e4.jpg" 
                alt="Мастер" 
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Внимание к деталям</h3>
                <p className="text-white/90">Гарантия на все работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают нас?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="animate-fade-in">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Быстро</h4>
              <p className="text-white/90">Приедем в течение 2 часов</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl mb-4">✅</div>
              <h4 className="text-xl font-semibold mb-2">Качественно</h4>
              <p className="text-white/90">Гарантия на все работы</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl mb-4">💰</div>
              <h4 className="text-xl font-semibold mb-2">Недорого</h4>
              <p className="text-white/90">Честные цены без скрытых платежей</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-gray-600 text-lg">
              Оставьте заявку и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <a href="tel:+79991234567" className="text-lg hover:underline">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@muzhnachas.ru" className="text-lg hover:underline">
                      info@muzhnachas.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-lg">Ежедневно с 8:00 до 22:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                <CardDescription>Заполните форму и мы перезвоним</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-2 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-2 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите вашу задачу" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-2 focus:border-orange-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-6 shadow-lg hover-scale"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400">
            © 2025 Муж на час. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;