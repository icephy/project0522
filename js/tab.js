document.addEventListener("DOMContentLoaded", function() {
    const tab = document.getElementById("test");
    let stickyOffset = tab.offsetTop;  // 初次加載時，取得 tab 的原始位置
    const menuHeight = 200;  // 假設 menu 的高度為 88px
  
    // 監聽滾動事件
    window.addEventListener("scroll", function() {
      // 當滾動超過 tab 的原始位置 - menu 的高度時，添加 sticky class
      if (window.pageYOffset > stickyOffset - menuHeight) {
        tab.classList.add("sticky");
      } else {
        tab.classList.remove("sticky");
      }
    });
  
    // 監聽視窗大小變化，確保 stickyOffset 在視窗 resize 後更新
    window.addEventListener("resize", function() {
      stickyOffset = tab.offsetTop;  // 視窗大小改變時重新計算 tab 的位置
    });
  });
  