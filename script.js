'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}


    
    console.log('hello world！');
    
    // 获取浏览器信息
    function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;
    
    if (userAgent.indexOf("Chrome")!== -1) {
        browserName = "Chrome";
        browserVersion = userAgent.match(/Chrome\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("Firefox")!== -1) {
        browserName = "Firefox";
        browserVersion = userAgent.match(/Firefox\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("Safari")!== -1) {
        browserName = "Safari";
        browserVersion = userAgent.match(/Version\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("MSIE")!== -1 || userAgent.indexOf("Trident/")!== -1) {
        browserName = "Internet Explorer";
        browserVersion = userAgent.match(/(?:MSIE |rv:)([\d.]+)/)[1];
    } else {
        browserName = "未知浏览器";
        browserVersion = "未知版本";
    }
    
    return {
        browserName,
        browserVersion
    };
    }
    
    // 调用函数并输出结果
    const info = getBrowserInfo();
    console.log(`浏览器名称: ${info.browserName}`);
    console.log(`浏览器版本: ${info.browserVersion}`);
     // 防抖函数
     function debounce(func, delay) {
      let timer = null;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    }
    
    // 处理键盘按下事件
    function handleKeyDown(event) {
      console.log(`键盘按下: ${event.key}`);
    }
    
    // 处理鼠标移动事件
    function handleMouseMove(event) {
      console.log(`鼠标位置: x=${event.clientX}, y=${event.clientY}`);
    }
    
    // 防抖处理后的键盘事件
    const debouncedKeyDown = debounce(handleKeyDown, 300);
    // 防抖处理后的鼠标事件
    const debouncedMouseMove = debounce(handleMouseMove, 300);
    
    // 监听键盘事件

    function printInputInfo() {
      const nameInput = document.querySelector('input[name="name"]');
      const emailInput = document.querySelector('input[name="email"]');
      const subjectInput = document.querySelector('input[name="subject"]');
      const messageInput = document.querySelector('textarea[name="message"]');
  
      const name = nameInput.value;
      const email = emailInput.value;
      const subject = subjectInput.value;
      const message = messageInput.value;
  
      console.log('姓名:', name);
      console.log('邮箱:', email);
      console.log('主题:', subject);
      console.log('消息:', message);
  }

  let autoPlayInterval;
const sliderContainer = document.querySelector('[data-slider-container]');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('[data-slider-prev]');
const nextButton = document.querySelector('[data-slider-next]');
const heroSlider = document.getElementById('hero-slider');

function showSlide(index) {
  sliderItems.forEach((item, i) => {
    if (i === index) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function nextSlide() {
  const currentSlide = Array.from(sliderItems).findIndex(item => item.style.display === 'block');
  const nextIndex = (currentSlide + 1) % sliderItems.length;
  showSlide(nextIndex);
}

function prevSlide() {
  const currentSlide = Array.from(sliderItems).findIndex(item => item.style.display === 'block');
  const prevIndex = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
  showSlide(prevIndex);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 2000); // 每2秒切换一次图片
}

function pauseAutoPlay() {
  clearInterval(autoPlayInterval);
}

function resumeAutoPlay() {
  startAutoPlay();
}

// 初始化显示第一张图片
showSlide(0);
// 开始自动播放
startAutoPlay();

const timeElements = document.querySelectorAll('.time');
const now = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = now.toLocaleDateString(undefined, options);

timeElements.forEach((timeElement) => {
  timeElement.textContent = formattedDate;
});
function handleMouseLeave(element) {
  // 在这里编写鼠标移出时的操作逻辑
  // 对应上面添加类名实现浮动效果的情况，这里需要移除类名
  element.classList.remove('float-effect'); 
}
function handleMouseEnter(element) {
  // 这里编写鼠标移入时的逻辑，比如添加类名实现样式变化
  element.classList.add('your-class-name'); 
}