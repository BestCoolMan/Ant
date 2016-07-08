
document.querySelector('input').addEventListener('change', function () {
    var that = this;
    
   var pp= lrz(that.files[0], {
        width: 800//图片质量大小
    }).then(function (rst) {
            var img = new Image(),
                div = document.createElement('div'),
                p = document.createElement('p'),
           
                sourceSize = toFixed2(that.files[0].size / 1024),
                resultSize = toFixed2(rst.fileLen / 1024),
                scale = parseInt(100 - (resultSize / sourceSize * 100));

            //p.style.fontsize = 13 + 'px';
            //p.innerhtml      = '源文件：<span class="text-danger">' +
            //    sourcesize + 'kb' +
            //    '</span> <br />' +
            //    '压缩后传输大小：<span class="text-success">' +
            //    resultsize + 'kb (省' + scale + '%)' +
            //    '</span> ';
            p.innerHTML = 'X';
            p.className = "close";
            div.className = 'col-sm-6';
            div.appendChild(img);
            div.appendChild(p);

            img.onload = function () {
                document.querySelector('#upload-container').appendChild(div);
            };

            img.src = rst.base64;

            //console.log(rst.base64);           
            return rst.base64;
        });
   console.log(pp);
});
function toFixed2 (num) {
    return parseFloat(+num.toFixed(2));
}


/**
 *
 * 　　　┏┓　　　┏┓
 * 　　┏┛┻━━━┛┻┓
 * 　　┃　　　　　　　┃
 * 　　┃　　　━　　　┃
 * 　　┃　┳┛　┗┳　┃
 * 　　┃　　　　　　　┃
 * 　　┃　　　┻　　　┃
 * 　　┃　　　　　　　┃
 * 　　┗━┓　　　┏━┛Code is far away from bug with the animal protecting
 * 　　　　┃　　　┃    神兽保佑,代码无bug
 * 　　　　┃　　　┃
 * 　　　　┃　　　┗━━━┓
 * 　　　　┃　　　　　 ┣┓
 * 　　　　┃　　　　 ┏┛
 * 　　　　┗┓┓┏━┳┓┏┛
 * 　　　　　┃┫┫　┃┫┫
 * 　　　　　┗┻┛　┗┻┛
 *
 */
