




## 苏宁M站
**布局方式**：`less+rem 布局 ------当然里面也有流式布局等`

 - index.html--------原生轮播
 - index-swiper-----swiper插件使用



*#适配关键代码*：
***variable.less：***

    @charset "utf-8";
    //适配主流设备
    @adapterDeviceList:750px,720px,640px,540px,480px,434px,414px,400px,384px,375px,360px,320px;
    //设计稿尺寸
    @psdwidth:750px;
    //预设基准值
    @baseFontSize:100px;
    //设备种类数量
    @len:length(@adapterDeviceList);

***mixins.less:***

    .adapterMixin(@index) when (@index > 0){
      @media (min-width: extract(@adapterDeviceList,@index)){
        html{
          font-size: @baseFontSize/@psdwidth* extract(@adapterDeviceList,@index);
        }
      }
      .adapterMixin(@index - 1);
    }

版本1.0：

 - 运用原生js写轮播
 - 不运用任何插件


![在这里插入图片描述](https://img-blog.csdnimg.cn/20190124180537609.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk0OTc4OA==,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20190124180613548.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk0OTc4OA==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190124182340223.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk0OTc4OA==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190124180650473.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk0OTc4OA==,size_16,color_FFFFFF,t_70
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190124181159641.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk0OTc4OA==,size_16,color_FFFFFF,t_70)
