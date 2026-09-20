(function ($) {
	$(".spotlights > section").each(function () {
		var $this = $(this),
			$image = $this.find(".image"),
			$img = $image.find("img"),
			x;

		if ($img.length === 0) {
			return;
		}

		$image.css("background-image", "url(" + $img.attr("src") + ")");
		if ((x = $img.data("position"))) {
			$image.css("background-position", x);
		}
		$img.hide();
	});
})(jQuery);
