import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function(){
    //默认值
    var defaults ={
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handleCancel:null,
        handleOk:null,
    };


    var MyComponent = Vue.extend(MessageBox);

    //配置参数
    return function (opts){
        for(var attr in opts){
            defaults[attr] = opts[attr];
        }  

        var vm = new MyComponent({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }

        });
        document.body.appendChild(vm.$el);
    }

})();