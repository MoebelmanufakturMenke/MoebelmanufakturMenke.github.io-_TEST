import{a as C}from"./chunk-JTLW5MYU.js";import{k as x,m as v,o as _,p as I,q as M,r as w}from"./chunk-NNMAA5PN.js";import{i as u}from"./chunk-IS2LS4BH.js";import{Na as g,Ra as r,Sa as o,Ta as h,Wa as c,Y as m,cb as s,db as d,fb as f,ta as p,wa as a}from"./chunk-ANADDBB2.js";var T=(()=>{let i=class i{constructor(){this.header={start:"Kundenbewertungen"},this.content={vinnersheep_header:"Vinner-Schaf-79:",vinnersheep_content:"\u201CVielen Dank f\xFCr das tolle Bettgestell, es sieht nicht nur toll aus, sondern ist auch noch sehr stabil :D.\u201D",images_vinnersheep:[{text:"",image:"assets/customer_ratings/vinnersheep_1.jpg"},{text:"",image:"assets/customer_ratings/vinnersheep_2.jpg"},{text:"",image:"assets/customer_ratings/vinnersheep_3.jpg"}],felefix_header:"Felefix:",felefix_content:"\u201CEinfach ein geniales Produkt, super stabil und hochwertig verarbeitet.\u201D",images_felefix:[{text:"",image:"assets/customer_ratings/felefix_1.png"},{text:"",image:"assets/customer_ratings/felefix_2.png"}]},this.vinnersheepImageIndex=0,this.felefixImageIndex=0}showNextImage(t,n){let e=(n+1)%t.length;t===this.content.images_vinnersheep?this.vinnersheepImageIndex=e:t===this.content.images_felefix&&(this.felefixImageIndex=e)}showPreviousImage(t,n){let e=(n-1+t.length)%t.length;t===this.content.images_vinnersheep?this.vinnersheepImageIndex=e:t===this.content.images_felefix&&(this.felefixImageIndex=e)}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=m({type:i,selectors:[["app-customer-ratings"]],standalone:!0,features:[f],decls:14,vars:3,consts:[[1,"customer-ratings-container"],[1,"row"],[1,"left-side"],[1,"right-side"],["alt","Vinnersheep Image",1,"active-image",3,"src"],[1,"arrow-container"],[1,"arrow","left-arrow",3,"click"],[1,"arrow","right-arrow",3,"click"]],template:function(n,e){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),s(4),o(),r(5,"p"),s(6),o()(),r(7,"div",3),h(8,"img",4),r(9,"div",5)(10,"div",6),c("click",function(){return e.showPreviousImage(e.content.images_vinnersheep,e.vinnersheepImageIndex)}),s(11,"<"),o(),r(12,"div",7),c("click",function(){return e.showNextImage(e.content.images_vinnersheep,e.vinnersheepImageIndex)}),s(13,">"),o()()()()()),n&2&&(a(4),d(e.content.vinnersheep_header),a(2),d(e.content.vinnersheep_content),a(2),g("src",e.content.images_vinnersheep[e.vinnersheepImageIndex].image,p))},dependencies:[u,M,I,w,_,C,x,v],styles:['@charset "UTF-8";.customer-ratings-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px;width:100%}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;max-height:600px;padding:20px;border-bottom:1px solid #ccc;width:100%}.left-side[_ngcontent-%COMP%]{width:60%;padding:20px;text-align:center}.left-side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.right-side[_ngcontent-%COMP%]{width:40%;max-height:600px;padding:20px 1%;position:relative;display:flex;justify-content:center;align-items:center}.active-image[_ngcontent-%COMP%]{max-width:94%;padding-right:3%;padding-left:3%;max-height:600px;object-fit:contain}.arrow-container[_ngcontent-%COMP%]{position:absolute;top:90%;width:85%;display:flex;justify-content:space-between;transform:translateY(-50%);pointer-events:none}.arrow[_ngcontent-%COMP%]{cursor:pointer;background-color:#00000080;color:#fff;padding:10px;font-size:24px;pointer-events:auto}.left-arrow[_ngcontent-%COMP%]{left:10px}.right-arrow[_ngcontent-%COMP%]{right:10px}']});let l=i;return l})();export{T as CustomerRatingsComponent};
