$=jQuery.noConflict();"use strict";$(document).ready(function(){var isMobile=false;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile=true;}
$('.maps').click(function(){$('.maps iframe').css("pointer-events","auto");});$(".maps").mouseleave(function(){$('.maps iframe').css("pointer-events","none");});$(".blog-listing").find("a.comment,span.comment").addClass("alt-font");$('.progress-bar').appear();$(document.body).on('appear','.progress-bar',function(e){for(i=0;i<$(".progress-bar").length;i++){width=$(".progress-bar:eq("+i+")").attr('aria-valuenow');$(".progress-bar:eq("+i+")").width(width+'%');}});$('.timer').appear();$(document.body).on('appear','.timer',function(e){if(!$(this).hasClass('appear')){animatecounters();$(this).addClass('appear');}});$(".owl-slider-full").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]});$(window).scroll();$(window).scroll(function(){if($(window).scrollTop()>10){$('nav').addClass('shrink');}else{$('nav').removeClass('shrink');}});$('.navigation-menu').onePageNav({scrollSpeed:750,scrollThreshold:0.2,scrollOffset:79,currentClass:'active',filter:':not(.btn-very-small)'});setTimeout(function(){$(window).scroll();},500);$('ul.navbar-nav li a').click(function(e){$(this).parents('div.navbar-collapse').removeClass('in');});$('.pull-menu a.section-link').click(function(e){if($(window).width()<=500)
$('#close-button').click();});$('.mobile-menu-icon').on('click',function(){if($(this).parent().hasClass("arrow-up")){$(this).parent().removeClass("arrow-up");$(this).parent().addClass("arrow-down");}else{$(this).parent().removeClass("arrow-down");$(this).parent().addClass("arrow-up");}});$('body').on('touchstart click',function(e){if(!$('.navbar').has(e.target).is('.navbar')&&$('.navbar').find(".navbar-collapse").hasClass('in')){$('.navbar-toggle').click();}});var hash=window.location.hash.substr(1);if(hash!=""){var scrollAnimationTime=1200,scrollAnimation='easeInOutExpo';var target='#'+hash;$('html, body').stop().animate({'scrollTop':$(target).offset().top},scrollAnimationTime,scrollAnimation,function(){window.location.hash=target;});}
var scrollAnimationTime=1200,scrollAnimation='easeInOutExpo';$('a.scrollto').bind('click.smoothscroll',function(event){event.preventDefault();var target=this.hash;$('html, body').stop().animate({'scrollTop':$(target).offset().top},scrollAnimationTime,scrollAnimation,function(){window.location.hash=target;});});if($("nav").hasClass("navbar")){$('.inner-link').smoothScroll({speed:900,offset:-59});}else{$('.inner-link').smoothScroll({speed:900,offset:1});}
$('.scrollToDownSection .inner-link, .scrollToDownSection form').click(function(event){event.stopPropagation();});$('section.scrollToDownSection').click(function(){var section_id=$($(this).attr('data-section-id'));$('html, body').animate({scrollTop:section_id.offset().top},800);});if(isMobile&&$("nav").hasClass("sidebar-nav")){$('.section-link').smoothScroll({speed:900,offset:-59});}else{$('.section-link').smoothScroll({speed:900,offset:1});}
SetParallax();$('.parallax-fix').each(function(){if($(this).children('.parallax-background-img').length){var imgSrc=jQuery(this).children('.parallax-background-img').attr('src');jQuery(this).css('background','url("'+imgSrc+'")');jQuery(this).children('.parallax-background-img').remove();$(this).css('background-position','50% 0%');}});var IsParallaxGenerated=false;function SetParallax(){if($(window).width()>1030&&!IsParallaxGenerated){$('.parallax1').parallax("50%",0.1);$('.parallax2').parallax("50%",0.2);$('.parallax3').parallax("50%",0.3);$('.parallax4').parallax("50%",0.4);$('.parallax5').parallax("50%",0.5);$('.parallax6').parallax("50%",0.6);$('.parallax7').parallax("50%",0.7);$('.parallax8').parallax("50%",0.8);$('.parallax9').parallax("50%",0.05);$('.parallax10').parallax("50%",0.02);$('.parallax11').parallax("50%",0.01);$('.parallax12').parallax("50%",0.099);IsParallaxGenerated=true;}}
$portfolio_filter=$('.grid');var portfolio_selector=$portfolio_filter.parents('section').find('.portfolio-filter li.nav.active a').attr('data-filter');$portfolio_filter.imagesLoaded(function(){$portfolio_filter.isotope({itemSelector:'li',layoutMode:'masonry',filter:portfolio_selector});});$grid_selectors=$('.portfolio-filter > li > a');$grid_selectors.on('click',function(){$grid_selectors.parent().removeClass('active');$(this).parent().addClass('active');var selector=$(this).attr('data-filter');$portfolio_filter.isotope({filter:selector});return false;});$(window).resize(function(){setTimeout(function(){$portfolio_filter.isotope('layout');},500);});var lightboxgallerygroups={};$('.lightboxgalleryitem').each(function(){var id=$(this).attr('data-group');if(!lightboxgallerygroups[id]){lightboxgallerygroups[id]=[];}
lightboxgallerygroups[id].push(this);});$.each(lightboxgallerygroups,function(){$(this).magnificPopup({type:'image',closeOnContentClick:true,closeBtnInside:false,gallery:{enabled:true},image:{titleSrc:function(item){var title='';var lightbox_caption='';if(item.el.attr('title')){title=item.el.attr('title');}
if(item.el.attr('lightbox_caption')){lightbox_caption='<span class="brando-lightbox-caption">'+item.el.attr('lightbox_caption')+'</span>';}
return title+lightbox_caption;}},callbacks:{open:function(){$.magnificPopup.instance.close=function(){$(document).on('keyup',function(e){if(e.keyCode==27){$.magnificPopup.proto.close.call(this);}});if(!$('body').hasClass('brando-custom-popup-close')){$.magnificPopup.proto.close.call(this);}else{$("button.mfp-close").live("click",function(){$.magnificPopup.proto.close.call(this);});}}}}})});$('.simple-ajax-popup-align-top').magnificPopup({type:'ajax',alignTop:true,closeOnContentClick:false,fixedContentPos:true,closeBtnInside:false,overflowY:'scroll',callbacks:{open:function(){$.magnificPopup.instance.close=function(){$(document).on('keyup',function(e){if(e.keyCode==27){$.magnificPopup.proto.close.call(this);}});if(!$('body').hasClass('brando-custom-popup-close')){$.magnificPopup.proto.close.call(this);}else{$("button.mfp-close").live("click",function(){$.magnificPopup.proto.close.call(this);});}}
$('.navbar .collapse').removeClass('in');$('.navbar a.dropdown-toggle').addClass('collapsed');}}});$('.single-image-lightbox').magnificPopup({type:'image',fixedContentPos:true,closeOnContentClick:true,closeBtnInside:false,mainClass:'mfp-no-margins mfp-with-zoom',image:{verticalFit:true,},zoom:{enabled:true,duration:300},callbacks:{open:function(){$.magnificPopup.instance.close=function(){$(document).on('keyup',function(e){if(e.keyCode==27){$.magnificPopup.proto.close.call(this);}});if(!$('body').hasClass('brando-custom-popup-close')){$.magnificPopup.proto.close.call(this);}else{$("button.mfp-close").live("click",function(){$.magnificPopup.proto.close.call(this);});}}}}});var lightboxzoomgallerygroups={};$('.lightboxzoomgalleryitem').each(function(){var id=$(this).attr('data-group');if(!lightboxzoomgallerygroups[id]){lightboxzoomgallerygroups[id]=[];}
lightboxzoomgallerygroups[id].push(this);});$.each(lightboxzoomgallerygroups,function(){$(this).magnificPopup({type:'image',closeOnContentClick:true,closeBtnInside:false,mainClass:'mfp-with-zoom mfp-img-mobile',image:{verticalFit:true,titleSrc:function(item){var title='';var lightbox_caption='';if(item.el.attr('title')){title=item.el.attr('title');}
if(item.el.attr('lightbox_caption')){lightbox_caption='<span class="brando-lightbox-caption">'+item.el.attr('lightbox_caption')+'</span>';}
return title+lightbox_caption;}},gallery:{enabled:true},zoom:{enabled:true,duration:300,opener:function(element){return element.find('img');}},callbacks:{open:function(){$.magnificPopup.instance.close=function(){$(document).on('keyup',function(e){if(e.keyCode==27){$.magnificPopup.proto.close.call(this);}});if(!$('body').hasClass('brando-custom-popup-close')){$.magnificPopup.proto.close.call(this);}else{$("button.mfp-close").live("click",function(){$.magnificPopup.proto.close.call(this);});}}}}})});$('.popup-with-form').magnificPopup({type:'inline',preloader:false,closeBtnInside:true,fixedContentPos:true,focus:'#name',callbacks:{beforeOpen:function(){if($(window).width()<700){this.st.focus=false;}else{this.st.focus='#name';}},open:function(){$.magnificPopup.instance.close=function(){$(document).on('keyup',function(e){if(e.keyCode==27){$.magnificPopup.proto.close.call(this);}});if(!$('body').hasClass('brando-custom-popup-close')){$.magnificPopup.proto.close.call(this);}else{$("button.mfp-close").live("click",function(){$.magnificPopup.proto.close.call(this);});}}}}});$('.popup-youtube, .popup-vimeo, .popup-googlemap').magnificPopup({disableOn:700,type:'iframe',closeOnContentClick:true,closeBtnInside:false,mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:true,callbacks:{open:function(){$.magnificPopup.instance.close=function(){$(document).on('keyup',function(e){if(e.keyCode==27){$.magnificPopup.proto.close.call(this);}});if(!$('body').hasClass('brando-custom-popup-close')){$.magnificPopup.proto.close.call(this);}else{$("button.mfp-close").live("click",function(){$.magnificPopup.proto.close.call(this);});}}}}});$('.ajax-popup').magnificPopup({type:'ajax',closeOnContentClick:true,closeBtnInside:false,alignTop:true,fixedContentPos:true,overflowY:'scroll',callbacks:{open:function(){$.magnificPopup.instance.close=function(){$(document).on('keyup',function(e){if(e.keyCode==27){$.magnificPopup.proto.close.call(this);}});if(!$('body').hasClass('brando-custom-popup-close')){$.magnificPopup.proto.close.call(this);}else{$("button.mfp-close").live("click",function(){$.magnificPopup.proto.close.call(this);});}}
$('.navbar .collapse').removeClass('in');$('.navbar a.dropdown-toggle').addClass('collapsed');}}});$('.collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-minus"></i>');});$('.collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-plus"></i>');});$('.accordion-style2 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>');});$('.accordion-style2 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-down"></i>');});$('.toggles-style2 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>');});$('.toggles-style2 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-down"></i>');});$(".fit-videos").fitVids();$('.submit_newsletter').click(function(){var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;var current=$(this);var address=$(this).closest('form').find('.xyz_em_email').val();if(reg.test(address)==false){current.closest('form').find('.xyz_em_email').addClass('required-error');return false;}else{return true;}});$('.xyz_em_email').on('focus',function(){$(this).removeClass('required-error');});});function ReloadOwlCarousel(){$(".popup-main .owl-slider-full").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]});$(".popup-main .owl-slider-full").click(function(e){if($(e.target).is('.mfp-close'))
return;return false;});}
function SetResizeContent(){var minheight=$(window).height();$(".full-screen").css('min-height',minheight);}
SetResizeContent();$(window).resize(function(){SetResizeContent();});jQuery(function($){animatecounters();});function animatecounters(){$('.timer').each(count);function count(options){var $this=$(this);options=$.extend({},options||{},$this.data('countToOptions')||{});$this.countTo(options);}}
jQuery(function($){$('div.widget-body ul.category-list li a').click(function(e){$('div.widget-body ul.category-list li a').removeClass('active');$(this).addClass('active');});});var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:90,mobile:false,live:true});wow.init();$('.work-details-popup').on('click',function(){$.magnificPopup.open({items:{src:$(this).parents('li').find('.popup-main'),},type:'inline',fixedContentPos:true,closeOnContentClick:true,callbacks:{beforeOpen:function(){startWindowScroll=$(window).scrollTop();},open:function(){$('.mfp-wrap').addClass('popup-bg');ReloadOwlCarousel();},close:function(){$('.mfp-wrap').removeClass('popup-bg');$(window).scrollTop(startWindowScroll);}}});});function bindEvent(el,eventName,eventHandler){if(el.addEventListener){el.addEventListener(eventName,eventHandler,false);}else if(el.attachEvent){el.attachEvent('on'+eventName,eventHandler);}}
(function(){var bodyEl=document.body,openbtn=document.getElementById('open-button'),closebtn=document.getElementById('close-button'),isOpen=false;function init(){initEvents();}
function initEvents(){if(openbtn){bindEvent(openbtn,'click',toggleMenu);}
if(closebtn){bindEvent(closebtn,'click',toggleMenu);}}
function toggleMenu(){if(isOpen){classie.remove(bodyEl,'show-menu');}
else{classie.add(bodyEl,'show-menu');}
isOpen=!isOpen;}
init();})();$(document).ready(function(){$('#counter-event').countdown($('#counter-event').attr("data-enddate")).on('update.countdown',function(event){var $this=$(this).html(event.strftime(''+'<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>'+'<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>'+'<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>'+'<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'))});});$('body').on('touchstart click',function(e){if($(window).width()<992){}});$(window).scroll(function(){if($(this).scrollTop()>100){$('.scrollToTop').fadeIn();}else{$('.scrollToTop').fadeOut();}});$('.scrollToTop').click(function(){$('html, body').animate({scrollTop:0},1000);return false;});$('.panel a, .nav-tabs a').click(function(e){if($(this).is("[data-parent]")||$(this).is("[data-toggle]")){e.preventDefault();}});$(function(){$(".dropdown").hover(function(){$('.dropdown-menu',this).stop(true,true).fadeIn("fast");$(this).toggleClass('open');$('b',this).toggleClass("caret caret-up");},function(){$('.dropdown-menu',this).stop(true,true).fadeOut("fast");$(this).toggleClass('open');$('b',this).toggleClass("caret caret-up");});});$(document).ready(function(){if($("li.menu-item-language").find("ul").first().length!=0){$("li.menu-item-language a:first").append("<i class='fa fa-angle-down mobile-menu-icon'></i>");}});$(document).ready(function(){$(document).on('click','.sl-button',function(){var button=$(this);var post_id=button.attr('data-post-id');var security=button.attr('data-nonce');var iscomment=button.attr('data-iscomment');var allbuttons;if(iscomment==='1'){allbuttons=$('.sl-comment-button-'+post_id);}else{allbuttons=$('.sl-button-'+post_id);}
var loader=allbuttons.next('#sl-loader');if(post_id!==''){$.ajax({type:'POST',url:simpleLikes.ajaxurl,data:{action:'process_simple_like',post_id:post_id,nonce:security,is_comment:iscomment},beforeSend:function(){},success:function(response){var icon=response.icon;var count=response.count;allbuttons.html(icon+count);if(response.status==='unliked'){var like_text=simpleLikes.like;allbuttons.prop('title',like_text);allbuttons.removeClass('liked');}else{var unlike_text=simpleLikes.unlike;allbuttons.prop('title',unlike_text);allbuttons.addClass('liked');}
loader.empty();}});}
return false;});});$(document).ready(function(){$(".comment-button").on("click",function(){var fields;fields="";if($(this).parent().parent().find('#author').length==1){if($("#author").val().length==0||$("#author").val().value=='')
{fields='1';$("#author").addClass("required-error");}}
if($(this).parent().parent().find('#comment').length==1){if($("#comment").val().length==0||$("#comment").val().value=='')
{fields='1';$("#comment").addClass("required-error");}}
if($(this).parent().parent().find('#email').length==1){if($("#email").val().length==0||$("#email").val().length=='')
{fields='1';$("#email").addClass("required-error");}
else
{var re=new RegExp();re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;var sinput;sinput="";sinput=$("#email").val();if(!re.test(sinput))
{fields='1';$("#email").addClass("required-error");}}}
if(fields!="")
{return false;}
else
{return true;}});});function inputfocus(id){$('#'+id).removeClass('required-error');}
$(document).ready(function(){brandoMobileMenuDynamicClass();});$(window).resize(function(){brandoMobileMenuDynamicClass();});function brandoMobileMenuDynamicClass(){if(window.matchMedia('(max-width: 991px)').matches){$('.accordion-menu').addClass('mobile-accordion-menu');}else{$('.accordion-menu').removeClass('mobile-accordion-menu');}}
var pagesNum=$("div.brando-infinite-scroll").attr('data-pagination');$(document).ready(function(){$('.infinite-scroll-pagination').infinitescroll({nextSelector:'div.brando-infinite-scroll a',loading:{msgText:'<div class="paging-loader" style="transform:scale(0.35);"><div class="circle"><div></div></div><div class="circle"><div></div></div><div class="circle"><div></div></div><div class="circle"><div></div></div></div>',finishedMsg:'<div class="finish-load">'+brando_infinite_scroll_message.message+'</div>',speed:'fast',},navSelector:'div.brando-infinite-scroll',contentSelector:'.infinite-scroll-pagination ul.masonry-items',itemSelector:'.infinite-scroll-pagination ul.masonry-items li',maxPage:pagesNum,},function(newElements,opts){if(opts.state.currPage==opts.maxPage){$('.post-listing').hide();}
$('.brando-infinite-scroll').remove();$('#infscr-loading').remove();var $newblogpost=$(newElements);$newblogpost.imagesLoaded(function(){$('.masonry-items').append($newblogpost).isotope('appended',$newblogpost);});});$(window).unbind(".infscr");$('.post-load').on('click',function(e){e.preventDefault();$('.infinite-scroll-pagination').infinitescroll('retrieve');return false;});});;var addComment={moveForm:function(a,b,c,d){var e,f,g,h,i=this,j=i.I(a),k=i.I(c),l=i.I("cancel-comment-reply-link"),m=i.I("comment_parent"),n=i.I("comment_post_ID"),o=k.getElementsByTagName("form")[0];if(j&&k&&l&&m&&o){i.respondId=c,d=d||!1,i.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",k.parentNode.insertBefore(e,k)),j.parentNode.insertBefore(k,j.nextSibling),n&&d&&(n.value=d),m.value=b,l.style.display="",l.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{for(var p=0;p<o.elements.length;p++)if(f=o.elements[p],h=!1,"getComputedStyle"in window?g=window.getComputedStyle(f):document.documentElement.currentStyle&&(g=f.currentStyle),(f.offsetWidth<=0&&f.offsetHeight<=0||"hidden"===g.visibility)&&(h=!0),"hidden"!==f.type&&!f.disabled&&!h){f.focus();break}}catch(q){}return!1}},I:function(a){return document.getElementById(a)}};;!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
