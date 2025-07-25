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
    ques