window.onload=function(){
	  //顶部
	  let top=document.querySelector(".top-inner");
	  console.log(top);
	  let words=document.querySelectorAll(".top-inner .right a");
	  console.log(words);
	  //返回顶部
    let back=document.querySelector('.scroll-top');
    back.onclick=function () {
        let res=document.body.scrollTop||document.documentElement.scrollTop;
        res=0
        animate(document.body,{scrollTop:0})
        animate(document.documentElement,{scrollTop:0})
    }
	  window.onscroll=function(){
	  	let bodytop=document.body.scrollTop||document.documentElement.scrollTop ;
	    if (bodytop>=78){
	  	    let i;
          top.style.background="#fff";
          top.style.borderBottom="1px solid #e0e0e0";
          words[0].style.color="#189fc1";
          for(let i=0;i<words.length;i++){
          	  words[i].style.color="#333";
	          	for(let j=0;j<words.length;j++){
			          		words[j].onmouseover=function(){
			          		  words[j].style.color="#189fc1";
			              }
			          		
			          		words[i].onmouseout=function(){
		          		      words[i].style.color="#333";
		                }
          	 }
          }
      }
	    
	    if (bodytop>=200){
	       back.style.bottom="10px";
         back.style.transition="all 2s";            
      }
	    
       if (bodytop<78){
           top.style.background="rgba(0,0,0,0.15)";
            top.style.borderBottom="";
           words[0].style.color="#189fc1";
           for(let i=0;i<words.length;i++){
          	  words[i].style.color="#fff";
	          	for(let j=0;j<words.length;j++){
			          		words[j].onmouseover=function(){
			          		words[j].style.color="#189fc1";
			            }
                    words[i].onmouseout=function(){
		          		      words[i].style.color="#fff";
		                }
          	 }
          }
      }
       if (bodytop<200){
          back.style.bottom='-50px';
     }
  }
	  
	  
        
	  //轮播图
	   let dots=document.querySelectorAll(".dot");
	   console.log(dots);
	   let imgs=document.querySelectorAll(".banner img");
	   console.log(imgs);
	   let banner=document.querySelector(".banner");
	   console.log(banner);
	   let lbtn=document.querySelector(".btnLeft");
	   let rbtn=document.querySelector(".btnRight");
	   banner_oi(dots,imgs,banner,lbtn,rbtn,"active",3000); 
	   
	  
	  //第二个轮播图
	  //	section轮播图
	let section1 = document.querySelector(".dp");
	let section_list = document.querySelectorAll(".second-block");
	let section1_list = document.querySelector(".second-block");
  let btnL=document.querySelector(".btnL");
  let btnR=document.querySelector(".btnR");
	let section_width = parseInt(getComputedStyle(section1_list, null).width)/3;
    
     console.log(section1);
     console.log(section_list);
     console.log(section1_list);
     console.log(btnL);
     console.log(btnR);
     console.log(section_width);
	 Section_Banner(section_list, btnL,btnR, section_width, section1)

     //内容 左右键 宽度 容器
	function Section_Banner(container, btnL,btnR, widths, contain) {
		let m = 3,
			  n = 0;
		let now = 0;
		let next = 1;
		container[next].style.left = widths * 3;

		//	自动播放
		let times = setInterval(right, 2000);
		contain.onmouseover = function() {
			clearInterval(times);
		}

		contain.onmouseout = function() {
			times = setInterval(right, 2000);
		}
		
		btnL.onmouseover = function() {
			clearInterval(times);
	  }
	  btnL.onmouseout = function() {
			times = setInterval(right, 2000);
		}

		btnR.onmouseover= function() {
			clearInterval(times);
		}

		btnR.onmouseout = function() {
			times = setInterval(right, 2000);
		}

		//	右键单击
		btnR.onclick =function(){
		      right();
		}
		function right() {
			container[now].style.left = -widths * n;
			container[next].style.left = widths * m + "px";
			m--;
			n++;
			animate(container[now], {
				left: -widths * n
			})
			animate(container[next], {left: widths * m});
			if(m == 0 && n == 3) {
				m = 3;
				n = 0;
			}
		}

		//	左键单击
		btnL.onclick=function(){
		   left();
		}
		function left() {
			container[now].style.left = widths * n;
			container[next].style.left = -widths * m + "px";
			m--;
			n++
			animate(container[now], {
				left: widths * n
			})
			animate(container[next], {
				left: -widths * m
			})
			if(m == 0 && n == 3) {
				m = 3;
				n = 0;
			}

		}
	}
	
	
	
	
	
}
