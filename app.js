var data = {
  0: {
    title: "title0",
    description: "lorem 0..."
  },
  1: {
    title: "title1",
    description: "lorem 1..."
  },
  2: {
    title: "title2",
    description: "lorem 2..."
  },
  3: {
    title: "title2",
    description: "lorem 2..."
  },
  4: {
    title: "title2",
    description: "lorem 2..."
  }
};

$("a").on("click tap", function() {
  var $this = $(this),
    $popover = $(".popover"),
    $popoverTarget = $this.data("target");

  $popover.removeClass("closed");
  $popover.attr("data-target-id", $popoverTarget);
  $popover.find(".body h2").text(data[$popoverTarget].title);
  $popover.find(".body p").text(data[$popoverTarget].description);
});

$(".close").on("click tap", function() {
  $(".popover").addClass("closed");
});
