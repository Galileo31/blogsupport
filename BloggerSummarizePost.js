function cutString(s, n){
    var cut= s.indexOf(' ', n);
    if(cut== -1) return s;
    return s.substring(0, cut) + " [...]";
}

$(function() {
  
  var summary_noimg = 500;
  var summary_img = 375;
  var img_thumb_height = 150;
  var img_thumb_width = 300;   
  
  $("._summarize").each(function() {
    var imgtag = "";
    var img = this.getElementsByTagName("img");
    var chopLength = summary_noimg;
    if(img.length>=1) {	
      imgtag = '<span style="float:left; padding:0px 10px 5px 0px;"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" style="padding:3px;"/></span>';
      chopLength = summary_img;
    }
    var jqThis = $(this);
    this.innerHTML = imgtag + '<div>' + cutString(jqThis.text(), chopLength) + '</div>';
    jqThis.closest("div.post")
      .wrap('<div class="post-wrap-wrap clear"></div>')
      .wrap('<a class="post-wrap" href="'+ jqThis.attr("summarize_href") +'"></a>');
  });

});
