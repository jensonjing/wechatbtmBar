Component({
    properties:{
        activeIdx:{
            type:Number,
            value:0
        },
        auth:{
            type:Number,
            value:0
        },
        dataList:{
            type:Array,
            value:()=>[]
        }
    },
    methods: {
        handleItemTap(e){
            this.triggerEvent('tapItem',e.currentTarget.dataset.idx);
        }
    },
    lifetimes:{
        attached(){
            
        }
    }
})