
// // 以上cyz


  // 获取所有图片和文本框元素
  var pics = document.querySelectorAll('.pic');
    
  pics.forEach(function(pic) {
      // 获取当前图片下的文本框
      var textBox = pic.querySelector('.text-box');
      var img = pic.querySelector('img');

      // 鼠标悬停事件
      img.addEventListener('mouseover', function() {
          textBox.style.display = 'block'; // 显示文本框
      });

      // 鼠标移开事件
      img.addEventListener('mouseout', function() {
          textBox.style.display = 'none'; // 隐藏文本框
      });
  });

