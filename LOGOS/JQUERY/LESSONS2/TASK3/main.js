$(function () {
    let posLeft, posTop;
    let box = $(".box");
    let bool = true;

    box.each(function (index, element) {
        $(element).on("click", function () {
            if (bool) {
                posLeft = $(element).position().left;
                posTop = $(element).position().top;

                console.log(`${element} position`, posLeft, posTop)

                // $(this).css({zIndex: 4, })

                $(element).css({ zIndex: 50 }).animate({
                    width: '300px',
                    height: '300px',
                    top: (window.innerHeight - box.height() - 200) / 2,
                    left: (window.innerWidth - box.width() - 200) / 2,
                }, 1000)
                //Кінець анімації елемента
                bool = false;
                $(".modal-container").css({
                    backgroundColor: "rgba(0, 0, 0, 0.78)",
                    zIndex: 3
                });

            }else {
                $(this).css({}).animate({
                      top: `${posTop}px`,
                      left: `${posLeft}px`,
                      width: "150px",
                      height: "150px",
                      zIndex: 2,
                    },1000);
                $(".modal-container").css({});
                $(".modal-container").css({backgroundColor: "white",zIndex: -1,});
                bool = true;
              }

        })//Кінець функції першого кліку

    })

})
    

