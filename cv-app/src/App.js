import React from 'react';
import './App.css';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Muhammed Burak Dinler</h1>
      </header>
      <section className="content">
        <div className="personal-info">
          <h2>Kişisel Bilgiler</h2>
          <p>Ad: Muhammed Burak</p>
          <p>Soyad: Dinler</p>
          <p>Email: muhammedburakdinler38@gmail.com</p>
          <p>Telefon: +90 533 635 91 77</p>
        </div>
        
        <div className="education">
          <h2>Eğitim Bilgileri</h2>
          <p>Üniversite: Kapadokya Üniversitesi</p>
          <p>Bölüm: Bilgisayar Programcılığı</p>
          <p>Mezuniyet Yılı: 2025</p>
        </div>

        <div className="work-experience">
          <h2>İş Deneyimi</h2>
          <div>
            <h3>Şirket Adı: A Teknoloji</h3>
            <p>Pozisyon: Bilgisayar Mühendisi</p>
            <p>Çalışma Süresi: Ocak 2026 - Devam Ediyor</p>
            <p>Açıklama: Siber Güvenlik ve O Alanla İlgili Çalışmalar</p>
          </div>
        </div> 

        <div className="skills">
          <h2>Yetenekler</h2>
          <ul>
            <li>Algoritma ve Programlama</li>
            <li>Mat</li>
            <li>Temel Bilgi Teknolojileri</li>
            <li>Bilgisayar Ağları</li>
            <li>Veri Tabanı</li>
            <li>Web Programlama</li>
          </ul>
        </div>

        <div className="hobbies">
          <h2>Hobiler ve İlgi Alanları</h2>
          <p>Yazılım projeleri, kitap okuma, seyahat etme, film izleme, kendimi geliştirme, araştırma, öğrenme, analiz etme.</p>
        </div>
        <div className="social-icons">
         <a href="https://www.linkedin.com/in/muhammad-burak-dinler-3a6b28295/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
         <a href="https://x.com/muhammeburak1" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
         <a href="https://www.instagram.com/muhammedburak03/?hl=tr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </section>
    </div>
  )
}

export default App;