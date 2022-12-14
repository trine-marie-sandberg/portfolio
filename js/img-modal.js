export function imageModal(modalImages) {

    const imgModalContainer = document.querySelector(".image-modal-container");

    modalImages.forEach( img => 
        img.addEventListener("click", imgModal));

        function imgModal() {

            imgModalContainer.style.display="block";

            try {

                //OPEN MODAL
                let clickedImage = this;

                let targetPostImagesUrl = clickedImage.getAttribute("src");
                let targetPostImageAltText = clickedImage.getAttribute("alt");

                imgModalContainer.innerHTML = `<i class="fa-solid fa-x cansel-x"></i>
                                               <img src="${targetPostImagesUrl}" class="auto-img modal-img" alt="${targetPostImageAltText}">`;

                //CLOSE MODAL (with button)
                const canselX = document.querySelector(".cansel-x");

                function closeModal() {
                    
                    imgModalContainer.style.display = "none";
                };

                canselX.addEventListener("click", closeModal);

                //CLOSE MODAL (click outside of div)
                window.addEventListener('mouseup',function(event){

                    if(event.target != imgModalContainer && event.target.parentNode != imgModalContainer){
                        imgModalContainer.style.display = 'none';
                    };
              }); 

            } catch(error) {
                
                console.log(error);
                imgModalContainer.innerHTML = "sorry, could not load image";
            };
        };                
};