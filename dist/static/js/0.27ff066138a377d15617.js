webpackJsonp([0],{Lyy4:function(t,s){},"Sgn/":function(t,s,e){"use strict";s.b=function(){var t=a()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(n.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)},s.a=function(t){var s=a()({},l.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return Object(n.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",s,l.c)};var i=e("woOf"),a=e.n(i),n=e("Gak4"),l=e("T452")},kvay:function(t,s,e){"use strict";var i=e("Dd8w"),a=e.n(i),n=e("qwAB"),l=e("ZV4u"),r=e("y/jF"),c=e("3Q4o"),o=e("NYxO"),g=e("F4+m"),h=Object(c.c)("transform"),f=Object(c.c)("backdrop-filter"),d={mixins:[g.b],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},components:{Scroll:n.a,SongList:l.a,Loading:r.a},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:a()({handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=s,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,s){this.selectPlay({list:this.songs,index:s})},random:function(){this.randomPlay({list:this.songs})}},Object(o.b)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var s=Math.max(this.minTranslateY,t),e=0,i=1,a=0;this.$refs.layer.style[h]="translate3d(0,"+s+"px,0)";var n=Math.abs(t/this.imageHeight);t>0?(i=1+n,e=10):a=Math.min(20*n,20),this.$refs.filter.style[f]="blur("+a+"px)",t<this.minTranslateY?(e=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=e,this.$refs.bgImage.style[h]="scale("+i+")"}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play-wrapper",on:{click:t.random}},[t._m(0)]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{"probe-type":t.probeType,"listen-scroll":t.listenScroll,data:t.songs},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"play"},[s("i",{staticClass:"icon-play"}),this._v(" "),s("span",{staticClass:"text"},[this._v("随机播放全部")])])}]};var m=e("VU/8")(d,p,!1,function(t){e("Lyy4")},"data-v-81cd068e",null);s.a=m.exports}});
//# sourceMappingURL=0.27ff066138a377d15617.js.map