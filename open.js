function alert1(){
    var vopenVideoBtn = document.getElementById('vopenVideoBtn');
    var videoModal = document.getElementById('videoModal');
    var video = document.getElementById('video');
    videoModal.style.display = 'block';
    video.play()
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        var videoModal = document.getElementById('videoModal');
        var closeVideoBtn = document.getElementById('closeVideoBtn');
        var video = document.getElementById('video');
        
        closeVideoBtn.addEventListener('click', function() {
            video.pause();
            videoModal.style.display = 'none';
        });
      
        window.addEventListener('click', function(event) {
            if (event.target == videoModal) {
                video.pause();
                videoModal.style.display = 'none';
            }
        });
      });
// 以上stx

