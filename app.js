(function(){
  var n=(window.SNAP_WHATSAPP||"").replace(/\D/g,"");
  document.querySelectorAll("[data-wa]").forEach(function(a){
    if(n){a.href="https://wa.me/"+n+"?text="+encodeURIComponent(window.SNAP_WA_TEXT||"");a.target="_blank";a.rel="noopener";}
  });
    // lightbox
  var lb=document.getElementById("lb"),lbi=document.getElementById("lbi"),lbc=document.getElementById("lbc");
  var list=Array.prototype.slice.call(document.querySelectorAll(".ph")),cur=0,last=null;
  function show(i){cur=(i+list.length)%list.length;var im=list[cur].querySelector("img");lbi.src=list[cur].dataset.full;lbi.alt=im.alt;lbc.textContent=im.alt}
  function open(i){last=document.activeElement;show(i);lb.hidden=false;document.body.style.overflow="hidden";document.getElementById("lbx").focus()}
  function close(){lb.hidden=true;document.body.style.overflow="";lbi.src="";if(last)last.focus()}
  list.forEach(function(b,i){b.addEventListener("click",function(){open(i)})});
  document.getElementById("lbx").onclick=close;
  document.getElementById("lbp").onclick=function(){show(cur-1)};
  document.getElementById("lbn").onclick=function(){show(cur+1)};
  lb.addEventListener("click",function(e){if(e.target===lb)close()});
  document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)});
})();
