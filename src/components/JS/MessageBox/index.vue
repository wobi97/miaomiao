<template>
    <div class="messageBox">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <div @touchstart="handleCancel" > {{cancel}}</div>
            <div @touchstart="handleOk" >{{ok}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'MessageBox'
}
</script>

<style scoped>
    /* box-shadow: 3px 3px 3px #ccc --边框阴影:偏移量,模糊值,范围,颜色 */
    /* border-radius: 4px; 边框圆角*/
    .messageBox{width: 200px;height: 120px;border: 1px #ccc solid;border-radius: 4px;background: white;box-shadow: 3px 3px 3px #ccc;position: absolute;left: 50%;top: 50%;margin: -60px 0 0 -100px;}
    .messageBox h2{text-align: center;line-height: 40px;font-size: 18px;}
    .messageBox p{text-align: center;line-height: 40px;}
    /* .messageBox >div 区分div,这里选择的是messageBox的div */
    .messageBox >div{display: flex;position: absolute;bottom: 0;width: 100%;border-top: 1px #ccc solid;}
    .messageBox >div div{flex: 1;text-align: center;line-height: 30px;border-right: 1px #ccc solid;}
    /* .messageBox >div div:last-child -- 同等级div中最后一个div */
    .messageBox >div div:last-child{border-right: none;}


</style>
