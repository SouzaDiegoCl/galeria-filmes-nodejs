var carouselWidth = $("#carousel-lista-filmes-inner")[0].scrollWidth;
var cardWidth = $(".lista-item-filme").width();

var scrollPosition = 0;

$("#carousel-lista-filmes-control-next").on("click", function () {
    console.log(scrollPosition)
    console.log(carouselWidth - (cardWidth * 3))
  if (scrollPosition < carouselWidth - cardWidth * 3) {
    scrollPosition = scrollPosition + cardWidth;
    $("#carousel-lista-filmes-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});

$("#carousel-lista-filmes-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition = scrollPosition - cardWidth;
    $("#carousel-lista-filmes-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});
