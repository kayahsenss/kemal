let yesButton = document.querySelector('.yes-btn');
let noButton = document.querySelector('.no-btn');
let questionText = document.querySelector('.question');
let scale = 1; // Başlangıç ölçeği

yesButton.addEventListener('click', () => {
  scale += 0.25; // Her tıklamada "Hayır" butonu daha belirgin büyüsün

  // "Hayır" butonunu büyüt
  noButton.style.transform = `scale(${scale})`;

  // Eğer "Hayır" butonu yeterince büyüdüyse "Evet" butonunu devre dışı bırak
  if (scale >= 2.8) { // Bu eşik değeri, "Hayır" butonu "Evet" butonunun üzerine geldiğinde ayarlanmıştır
    yesButton.disabled = true;
    questionText.textContent = "Tatil Hayalleri Suya Düştü!"; // Soruyu değiştir
    questionText.style.color = "#ff6347"; // Yazıyı turuncu-kırmızı yap
  }

  // Eğer "Hayır" butonu tüm ekranı kaplayacak kadar büyüdüyse
  if (scale >= 7) { // Bu eşik değeri, "Hayır" butonunun ekranı tamamen doldurması için
    noButton.classList.add('fullscreen');
    
    // "Hayır" butonu tam ekran olduğunda içine yeni bir yazı elementi ekleyelim
    // Böylece CSS ile daha kolay kontrol edebiliriz
    if (!noButton.querySelector('.fullscreen-text')) {
      const fullscreenText = document.createElement('p');
      fullscreenText.classList.add('fullscreen-text');
      fullscreenText.textContent = "HAYIR! ASLA!";
      noButton.innerHTML = ''; // Mevcut içeriği temizle
      noButton.appendChild(fullscreenText);
    }
    
    questionText.textContent = "Tatil Mümkün Değil!"; // Soruyu tekrar değiştir
    questionText.style.color = "#ffffff"; // Yazıyı beyaz yap (kırmızı arka plan üzerinde)

    // "Evet" butonunu ve butonları içeren div'i tamamen gizle
    yesButton.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
  }
});

// "Hayır" butonuna tıklandığında (opsiyonel)
noButton.addEventListener('click', () => {
  if (noButton.classList.contains('fullscreen')) {
    // "Hayır" butonu tüm ekranı kapladığında bir uyarı göster
    alert("Maalesef! Bu kez tatil yok!");
  } else {
    // Normal "Hayır" butonuna tıklama durumu
    alert("Zaten 'Hayır' dedin, daha ne olsun? :)");
  }
});