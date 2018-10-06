import xlsToJson from 'xls-to-json';
import fs from 'fs';

class FileController {

    upload(req, res) {
        try {
            let nomeArquivo = '' + new Date().getTime();
            let arquivo = req.files.arquivo.data;
            fs.writeFileSync(nomeArquivo, arquivo);
            xlsToJson(
                {
                    input: nomeArquivo,
                    output: "resultado.json",
                    lowerCaseHeaders: true
                }, (erro, resultado) => {
                    fs.unlinkSync(nomeArquivo);
                    if (erro) res.json(erro);
                    res.json(resultado);
                }
            );
        } catch (e) {
            console.log(e);
            res.status(500).json('Erro');
        }
    }
}

export default FileController;