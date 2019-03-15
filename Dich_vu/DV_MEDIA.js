var http = require("http");
var Luu_tru = require("../Xu_ly/XL_LUU_TRU")
var Xu_ly_Tham_so = require('querystring')
var Port = 1001
var Dich_vu = http.createServer(
    (Yeu_cau, Dap_ung) => {
        var Chuoi_Nhan = ""
        //console.log(Yeu_cau)
        var Nhi_phan_Kq = ""
        var Ten = Yeu_cau
            .url
            .replace("/", "")

        Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
        Yeu_cau.on('end', () => {
            if (Yeu_cau.method == "GET" && Ten != "") {
                Nhi_phan_Kq = Luu_tru.Doc_Nhi_phan_Media(Ten)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.writeHead(200, { 'Content-Type': 'image/png' });
                Dap_ung.end(Nhi_phan_Kq, 'binary');
            }  else {
                Chuoi_Kq = Luu_tru.Thong_tin_Dich_vu()
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            }

        })

    })

Dich_vu.listen(Port,
    console.log("Dịch vụ Media đang thực thi ...: " + Port)
)
