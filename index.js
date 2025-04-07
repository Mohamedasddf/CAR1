// تحديد الأيقونة والقائمة
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// لما نضغط على الأيقونة
menu.onclick = () => {
  navbar.classList.toggle("active"); // تفتح أو تقفل القائمة
  menu.classList.toggle("bx-x"); // تغير شكل الأيقونة (مثلاً من ☰ لـ ×)
};

// إزالة الفئات عند التمرير
window.onscroll = () => {
  menu.classList.remove("bx-x"); // إزالة الأيقونة المتغيرة
  navbar.classList.remove("active"); // إزالة القائمة إذا تم التمرير
};

const sr = ScrollReveal({
  distance: "70px", // المسافة التي يتحرك فيها العنصر عند التمرير
  duration: 1000,   // مدة التأثير (بالملي ثانية)
  delay: 400,       // التأخير بين كل ظهور وآخر (بالملي ثانية)
  reset: true,      // إذا كنت ترغب في إعادة التأثير عند التمرير مرة أخرى
});

sr.reveal(".text", { 
  delay: 200, 
  origin: "top",    // بداية التأثير من الأعلى
  opacity: 0,       // الشفافية الابتدائية
  easing: "ease-in-out" // نوع التأثير (الانتقال السلس)
});

sr.reveal(".form-container form", { 
  delay: 500, 
  origin: "left",   // بداية التأثير من اليسار
  opacity: 0.5,     // الشفافية الابتدائية
  easing: "ease-in-out"
});

sr.reveal(".heading", { 
  delay: 200, 
  origin: "top",    
  opacity: 0,       
  easing: "ease-in-out"
});

sr.reveal(".ride-container .box", { 
  delay: 600, 
  origin: "bottom", // بداية التأثير من الأسفل
  opacity: 0,       
  easing: "ease-in-out"
});

sr.reveal(".services-container .box", { 
  delay: 600, 
  origin: "top",    
  opacity: 0,       
  easing: "ease-in-out"
});

sr.reveal(".about-container .about-text", { 
  delay: 600, 
  origin: "right",  // بداية التأثير من اليمين
  opacity: 0,       
  easing: "ease-in-out"
});

sr.reveal(".about-container .about-img", { 
  delay: 600, 
  origin: "left",   // بداية التأثير من اليسار
  opacity: 0,       
  easing: "ease-in-out"
});

sr.reveal(".reviews-container", { 
  delay: 600, 
  origin: "bottom", 
  opacity: 0,       
  easing: "ease-in-out"
});

sr.reveal(".newsletter .box", { 
  delay: 400, 
  origin: "bottom", 
  opacity: 0,       
  easing: "ease-in-out"
});

sr.reveal(".newsletter h2", { 
  delay: 400, 
  origin: "top",    
  opacity: 0,       
  easing: "ease-in-out"
});
