// モバイルメニューのトグル
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// メニューリンククリック時にモバイルメニューを閉じる
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// スクロール時のヘッダー背景変更
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--white)';
        header.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// フォーム送信処理
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // 送信ボタンを取得して無効化
    const submitButton = contactForm.querySelector('.submit-button');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = '送信中...';
    
    // フォームデータの取得
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        course: formData.get('course'),
        message: formData.get('message')
    };
    
    try {
        // Formspreeエンドポイント（GitHub Pages用）
        const FORMSPREE_ENDPOINT = 'https://formspree.io/f/manbnrpa';
        
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            // 成功メッセージを表示
            alert('お問い合わせありがとうございます！\n担当者より2営業日以内にご連絡させていただきます。');
            contactForm.reset();
        } else {
            throw new Error(result.error || 'Failed to send message');
        }
    } catch (error) {
        console.error('Error sending form:', error);
        alert('送信中にエラーが発生しました。もう一度お試しください。');
    } finally {
        // ボタンを元に戻す
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// 要素のアニメーション（スクロール時）
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素の設定
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.course-card, .feature-item, .testimonial-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// コース詳細の表示/非表示（オプション機能）
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', function() {
        const details = this.querySelector('ul');
        if (details.style.maxHeight) {
            details.style.maxHeight = null;
        } else {
            details.style.maxHeight = details.scrollHeight + 'px';
        }
    });
});

// ページ読み込み時のアニメーション
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // スケジュールカードのアニメーション
    const scheduleCards = document.querySelectorAll('.schedule-card, .pricing-card');
    scheduleCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + index * 200);
    });
    
    // タイムラインアイテムのアニメーション
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + index * 100);
    });
});

// マトリックス風背景エフェクト
function createMatrixEffect() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 35);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// 背景エフェクトを初期化
document.addEventListener('DOMContentLoaded', createMatrixEffect);

// タイピングエフェクト
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ランダムなグリッチエフェクト
setInterval(() => {
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(el => {
        if (Math.random() > 0.95) {
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.animation = '';
            }, 200);
        }
    });
}, 3000);

// パララックス効果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero, .schedule');
    
    parallaxElements.forEach(el => {
        const speed = el.classList.contains('hero') ? 0.5 : 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// 価格カードのホバーエフェクト
document.querySelectorAll('.pricing-item').forEach(item => {
    item.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(0, 255, 136, 0.3)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});