var data = {
  0: {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus nisi eu ipsum auctor ultricies. Quisque in euismod tortor, eget interdum ante. Nulla ultrices ligula nisl, ut aliquet mauris ornare non. Sed sit amet purus quis risus elementum fringilla. Duis ut erat quis odio accumsan iaculis ac eu velit. Maecenas ac est augue. Curabitur non magna lobortis velit luctus vehicula nec eu ligula. Cras aliquet fringilla neque vitae pretium. Proin cursus ornare nisl, sed consectetur sapien convallis vitae. Cras ut neque volutpat, dignissim ipsum vitae, faucibus nibh. Duis malesuada, nisl at accumsan placerat, lacus ante mollis metus, vitae blandit libero ex ut neque. Nam eget nisl vitae metus gravida cursus."
  },
  1: {
    title: "Nulla vitae lacinia augue",
    description:
      "Nulla vitae lacinia augue. Maecenas tristique, sapien ut elementum commodo, lorem orci ultrices ex, vel malesuada erat nibh vel metus. In scelerisque ex in pellentesque posuere. Donec quis tristique turpis. In bibendum mauris dui, eu ornare nisi interdum non. Nullam sollicitudin laoreet suscipit. Proin et turpis egestas, condimentum velit eget, porta sem. Pellentesque vel sem sit amet dui pretium efficitur quis vel metus. Integer ut neque mauris. Ut at dui enim. Ut gravida urna nec nibh tempus, non porttitor massa convallis. Duis nisl diam, porttitor nec semper in, pharetra sed lectus. Maecenas vitae mi ac risus fringilla fermentum."
  },
  2: {
    title: "Aliquam eget neque sapien",
    description:
      "Aliquam eget neque sapien. Vestibulum eu magna eu erat pretium lobortis. Praesent at velit id felis commodo ultrices. Sed fermentum iaculis consequat. Nunc vel eros vitae velit pellentesque dignissim et quis est. Donec fermentum augue id sem posuere, vitae auctor nunc commodo. Donec nulla leo, lobortis eget leo in, fringilla euismod nulla. Duis ornare pharetra pellentesque. In vitae rhoncus felis. Sed faucibus enim diam, ut luctus dolor porttitor nec. Integer sed tortor eleifend, fermentum lectus eu, hendrerit eros. Mauris cursus, orci in sodales feugiat, purus leo blandit lorem, et porttitor nisl erat ut tellus. Curabitur semper elementum ornare."
  },
  3: {
    title: "Nam consectetur suscipit urna",
    description:
      "Nam consectetur suscipit urna, vel faucibus magna porttitor eget. Curabitur consequat ex quis odio consequat posuere. Quisque pulvinar sodales euismod. Pellentesque gravida lacus sed nisi vehicula, a scelerisque libero rhoncus. Sed bibendum sagittis risus vitae faucibus. Donec scelerisque neque sed ex laoreet, eu eleifend dolor ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent felis arcu, hendrerit eget risus ut, bibendum mollis erat."
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
  $popover.find(".body h2").text(data[$popoverTarget].title);
  $popover.find(".body p").text(data[$popoverTarget].description);
});

$(".close").on("click tap", function() {
  $(".popover").addClass("closed");
});
