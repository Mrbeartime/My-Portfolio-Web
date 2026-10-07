window.onload = function() {

    var galleryImages = document.querySelectorAll(".gallery img");

    var currentBigImage = null;

    var timer = null;

    for (var i = 0; i < galleryImages.length; i++) {

        galleryImages[i].onclick = function() {

            if (currentBigImage != null && currentBigImage != this) {
                currentBigImage.classList.remove("big-image");
            }

            if (!this.classList.contains("big-image")) {

                this.classList.add("big-image");

                currentBigImage = this;

                if (timer != null) {
                    clearTimeout(timer);
                }

                //ครบ3วิ ให้รูปกลับขนาดเดิม
                timer = setTimeout(function() {

                    if (currentBigImage != null) {
                        currentBigImage.classList.remove("big-image");
                        currentBigImage = null;
                    }

                }, 3000);

            } else {

                //ถ้ากดรูปเดิมซ้ำ ให้กลับขนานเดิมทันที
                this.classList.remove("big-image");
                currentBigImage = null;

                //ปิด Timer
                clearTimeout(timer);
            }
        };
    }
};