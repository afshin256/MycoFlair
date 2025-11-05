// MycoFlair.ir - Main JavaScript File
// Language System and Animations

class MycoFlairApp {
    constructor() {
        this.currentLanguage = 'en'; // Default to English
        this.translations = {
            en: {
                // Navigation
                navHome: 'Home',
                navResearch: 'Research',
                navTeam: 'Team',
                navContact: 'Contact',
                
                // Hero Section
                heroTitle: 'MycoFlair Research & Innovation Team',
                heroTagline: 'Innovating the Future of Fungal Biotechnology',
                heroDescription: 'Leading breakthrough research in fungal cultivation technology with our revolutionary MGF-02 formula for sustainable mushroom production.',
                heroButton: 'Explore Our Research',
                
                // Executive Summary
                executiveTitle: 'Executive Summary',
                projectTitle: 'Project: MGF-02 Formula Development',
                projectDesc: 'Advanced nutrient solution for cultivating edible and medicinal mushrooms on artificial substrates with anti-contamination properties.',
                
                // Key Achievements
                achievementsTitle: 'Key Achievements',
                achievement1: 'Complete mycelium growth without compost',
                achievement2: 'Significant reduction in water consumption',
                achievement3: 'Natural resistance to contaminants',
                achievement4: 'Successful lunar soil simulation tests',
                achievement5: 'Sustainable feed production from waste',
                
                // Competitive Advantage
                advantageTitle: 'Competitive Advantage',
                advantage1: 'Unique formula combining nutrition, growth environment, and anti-contamination',
                advantage2: 'Suitable for space agriculture and controlled environments',
                advantage3: 'Commercial trade secret potential',
                advantage4: 'Versatile for multiple mushroom species',
                
                // Market
                marketTitle: 'Target Market',
                marketSize: 'Global mushroom market: $60B+ (2024) → $100B+ (2030)',
                marketDesc: 'Industrial mushroom companies, space research centers, urban farming systems',
                
                // Footer
                copyright: '© 2024 MycoFlair Research & Innovation Team. All rights reserved.'
            },
            fa: {
                // Navigation
                navHome: 'خانه',
                navResearch: 'تحقیقات',
                navTeam: 'تیم',
                navContact: 'تماس',
                
                // Hero Section
                heroTitle: 'تیم تحقیقاتی و توسعه مایکوفِلِر',
                heroTagline: 'نوآوری در آینده‌ی زیست‌فناوری قارچ‌ها',
                heroDescription: 'پیشگام در تحقیقات پیشرفته فناوری پرورش قارچ با فرمول انقلابی MGF-02 برای تولید پایدار قارچ‌های خوراکی و دارویی.',
                heroButton: 'کشف تحقیقات ما',
                
                // Executive Summary
                executiveTitle: 'خلاصه اجرایی',
                projectTitle: 'طرح: توسعه فرمول MGF-02',
                projectDesc: 'محلول مغذی پیشرفته برای پرورش قارچ‌های خوراکی و دارویی در بسترهای مصنوعی با قابلیت ضد آلودگی.',
                
                // Key Achievements
                achievementsTitle: 'دستاوردهای کلیدی',
                achievement1: 'رشد کامل میسلیوم بدون نیاز به کمپوست',
                achievement2: 'کاهش چشمگیر مصرف آب',
                achievement3: 'مقاومت طبیعی در برابر آلودگی‌ها',
                achievement4: 'موفقیت در آزمایشات خاک شبیه‌سازی ماه',
                achievement5: 'تولید خوراک پایدار از ضایعات',
                
                // Competitive Advantage
                advantageTitle: 'مزیت رقابتی',
                advantage1: 'فرمول منحصر به فرد ترکیبی از تغذیه، محیط رشد و ضد آلودگی',
                advantage2: 'مناسب برای کشاورزی فضایی و محیط‌های کنترل‌شده',
                advantage3: 'پتانسیل راز تجاری انحصاری',
                advantage4: 'چندمنظوره برای گونه‌های مختلف قارچ',
                
                // Market
                marketTitle: 'بازار هدف',
                marketSize: 'بازار جهانی قارچ: ۶۰+ میلیارد دلار (۲۰۲۴) → ۱۰۰+ میلیارد دلار (۲۰۳۰)',
                marketDesc: 'شرکت‌های صنعتی تولید قارچ، مراکز تحقیقات فضایی، سیستم‌های کشاورزی شهری',
                
                // Footer
                copyright: '© ۲۰۲۴ تیم تحقیقاتی و توسعه مایکوفِلِر. کلیه حقوق محفوظ است.'
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupLanguageSwitcher();
        this.setupAnimations();
        this.setupScrollEffects();
        this.updateContent();
    }
    
    setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('[data-lang]');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchLanguage(button.dataset.lang);
            });
        });
    }
    
    switchLanguage(lang) {
        this.currentLanguage = lang;
        this.updateContent();
        this.updateLanguageButtons();
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update text direction for Persian
        if (lang === 'fa') {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }
    }
    
    updateContent() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (this.translations[this.currentLanguage][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = this.translations[this.currentLanguage][key];
                } else {
                    element.textContent = this.translations[this.currentLanguage][key];
                }
            }
        });
    }
    
    updateLanguageButtons() {
        const buttons = document.querySelectorAll('[data-lang]');
        buttons.forEach(button => {
            if (button.dataset.lang === this.currentLanguage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    setupAnimations() {
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe all animated elements
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
        
        // Floating cards animation
        this.setupFloatingCards();
        
        // Typewriter effect for hero title
        this.setupTypewriter();
        
        // Counter animations
        this.setupCounters();
    }
    
    setupFloatingCards() {
        const cards = document.querySelectorAll('.floating-card');
        
        cards.forEach((card, index) => {
            // Add staggered animation delay
            card.style.animationDelay = `${index * 0.2}s`;
            
            // Add hover effects
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(45, 90, 39, 0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    setupTypewriter() {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        typewriterElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid #2D5A27';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                    }, 1000);
                }
            }, 50);
        });
    }
    
    setupCounters() {
        const counters = document.querySelectorAll('.counter');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.dataset.target);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        };
        
        // Animate counters when they come into view
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
    
    setupScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax effect for hero background
            const hero = document.querySelector('.hero-bg');
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
            
            ticking = false;
        };
        
        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestScrollUpdate);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MycoFlairApp();
});

// Smooth scrolling for navigation links
document.addEventListener('click', (e) => {
    if (e.target.matches('[data-scroll]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
}

// Export for use in other files
window.MycoFlairApp = MycoFlairApp;