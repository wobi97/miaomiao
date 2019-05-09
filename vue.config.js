// export const devServer = {
//     proxy: {
//         '/api': {
//             target: 'http://39.97.33.178',
//             changeOrigin: true
//         }
//     }
// };


//设置全局的跨域设置
module.exports= {
     devServer:{
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                changeOrigin: true
            }
        }
    }  
};