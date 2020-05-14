const app = new Vue({
   el:'#app',
   data: {
       books: [
           {
             id:1,
             name:'《算法导论》',
             date:'2006-9',
             price: 85.00,
             count: 1
           },
           {
             id:2,
             name:'《UNIX编程艺术》',
             date:'2006-2',
             price: 59.00,
             count: 1     
           },
           {
             id:3,
             name:'《编程珠玑》',
             date:'2018-10',
             price: 39.00,
             count: 1               
           },
           {
           id:4,
           name:'《代码大全》',
           date:'2006-3',
           price: 128.00,
           count: 1 
          },
       ]
   },
   methods:{
     /*  getFinalPrice(price){  //关于价格那个地方的格式可以用自定义函数方法，也可以使用过滤器
          return '￥'+ price.toFixed(2)  //toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
       }*/
       increment(index){
          //console.log('increment',index);
          this.books[index].count++
       },
       decrement(index){
         //console.log('decrement',index);
         
         this.books[index].count--
       },
       removeHandler(index){
          this.books.splice(index,1) 
       }
   },
   computed: {
      totalPrice(){
        let totalPrice = 0;
        for(let i = 0 ; i < this.books.length; i++){
            totalPrice += this.books[i].price* this.books[i].count
        }
        return totalPrice
      }
   },

   //过滤器,过滤器一般情况下是一个函数
   filters:{
     showPrice(price){
        return '￥'+ price.toFixed(2)  //toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
     }
   }
})