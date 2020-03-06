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
  avatar: {
    title: "avatar",
    description: "yep yep",
    image: "assets/avatar.svg"
  }
};

$("button").on("click tap", function() {
  var $this = $(this),
    $popover = $(".popover"),
    $popoverTarget = $this.data("target");

  $popover.removeClass("closed");
  $popover.attr("data-target-id", $popoverTarget);
  $popover.find(".body h2").text(data[$popoverTarget].title);
  $popover.find(".body p").text(data[$popoverTarget].description);
  console.log($popover.find(".body .image"));
  
  $popover.find(".body .image").css('background-image','url('+data[$popoverTarget].image+')');
});

$(".close").on("click tap", function() {
  $(".popover").addClass("closed");
});
