const slides = [
  { src: 'image1.jpg', wish: 'Chúc bạn không chỉ nhận được hoa, quà, mà còn nhận được tình yêu và sự trân trọng từ mọi người xung quanh!' },
  { src: 'image2.jpg', wish: 'Chúc bạn luôn tỏa sáng và tự tin!' },
  { src: 'image3.jpg', wish: 'Chúc bạn luôn mạnh mẽ, xinh đẹp và tràn đầy nhiệt huyết!' },
];

let currentSlide = 0;

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  document.getElementById('slide').src = slides[currentSlide].src;
  document.getElementById('wish').innerText = slides[currentSlide].wish; // Cập nhật lời chúc
  createHearts();
}

setInterval(changeSlide, 5000);

window.onload = function() {
  createHearts()
  setInterval(() => {
    document.getElementById('playBtn').click();
  }, 200);
  
};

// Xử lý sự kiện click cho nút Play
document.getElementById('playBtn').addEventListener('click', function() {
  const audio = document.getElementById('audio');
  audio.play();
  // this.style.display = 'none'; // Ẩn nút sau khi nhạc phát
});

function createHearts() {
  for (let i = 0; i < 15; i++) { // Tạo 5 trái tim
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên theo chiều ngang
    heart.style.top = `${Math.random() * 100}vh`; // Vị trí ngẫu nhiên theo chiều dọc
    document.querySelector('.background-animation').appendChild(heart);

    // Xóa trái tim sau 5 giây
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
}
