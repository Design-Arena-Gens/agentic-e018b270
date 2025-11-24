'use client';
import { useState, useRef } from 'react';

export default function Home() {
  const [downloading, setDownloading] = useState(false);
  const canvasRef = useRef(null);

  const downloadImage = () => {
    setDownloading(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size for Instagram post (1080x1080)
    canvas.width = 1080;
    canvas.height = 1080;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
    gradient.addColorStop(0, '#1e3c72');
    gradient.addColorStop(1, '#2a5298');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1080);

    // Add decorative elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.arc(900, 150, 200, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(200, 900, 150, 0, Math.PI * 2);
    ctx.fill();

    // Draw tooth icon
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 8;

    // Tooth shape
    ctx.beginPath();
    ctx.moveTo(540, 250);
    ctx.quadraticCurveTo(580, 250, 590, 280);
    ctx.lineTo(590, 350);
    ctx.lineTo(575, 400);
    ctx.lineTo(540, 420);
    ctx.lineTo(505, 400);
    ctx.lineTo(490, 350);
    ctx.lineTo(490, 280);
    ctx.quadraticCurveTo(500, 250, 540, 250);
    ctx.fill();

    // Add shine effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(555, 290, 15, 0, Math.PI * 2);
    ctx.fill();

    // Main text - Arabic
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('عيادة طب الأسنان', 540, 520);

    // Subtitle
    ctx.font = 'bold 52px Arial';
    ctx.fillText('ابتسامتك تستحق الأفضل', 540, 600);

    // Services box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(140, 670, 800, 220);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.strokeRect(140, 670, 800, 220);

    // Services text
    ctx.font = '36px Arial';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('✓ تبييض الأسنان', 900, 730);
    ctx.fillText('✓ تقويم الأسنان', 900, 790);
    ctx.fillText('✓ زراعة الأسنان', 900, 850);

    // Contact info
    ctx.font = 'bold 38px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('📞 احجز موعدك الآن', 540, 980);

    // Download the image
    setTimeout(() => {
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dental-clinic-instagram-post.png';
        a.click();
        URL.revokeObjectURL(url);
        setDownloading(false);
      });
    }, 100);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '32px',
          color: '#2d3748',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          🦷 بوست انستغرام - عيادة الأسنان
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#4a5568',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          تصميم احترافي لمجمع طبي يقدم خدمات طب الأسنان
        </p>

        <div style={{
          background: '#f7fafc',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '30px',
          textAlign: 'right'
        }}>
          <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '20px' }}>
            ✨ مميزات التصميم:
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            color: '#4a5568',
            fontSize: '16px',
            lineHeight: '2'
          }}>
            <li>📐 مقاس مثالي للانستغرام (1080x1080)</li>
            <li>🎨 تصميم احترافي بألوان طبية</li>
            <li>🦷 أيقونة سن جذابة</li>
            <li>📝 نص عربي واضح وجميل</li>
            <li>✅ قائمة بالخدمات الرئيسية</li>
            <li>💬 دعوة للتواصل والحجز</li>
          </ul>
        </div>

        <button
          onClick={downloadImage}
          disabled={downloading}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '16px 40px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: downloading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            opacity: downloading ? 0.7 : 1,
            transform: downloading ? 'scale(0.98)' : 'scale(1)',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
          }}
          onMouseOver={(e) => {
            if (!downloading) {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
            }
          }}
          onMouseOut={(e) => {
            if (!downloading) {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
            }
          }}
        >
          {downloading ? '⏳ جاري التحميل...' : '⬇️ تحميل البوست'}
        </button>

        <p style={{
          marginTop: '20px',
          fontSize: '14px',
          color: '#718096'
        }}>
          سيتم تنزيل الصورة تلقائياً بعد الضغط على الزر
        </p>
      </div>

      <canvas
        ref={canvasRef}
        style={{ display: 'none' }}
      />
    </div>
  );
}
