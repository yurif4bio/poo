import { Registro } from "./registro";

const diario: Registro[] = [];

// 5 alunos
for (let i = 0; i < 5; i++) {
    const r = new Registro();

    r["aluno"] = `Aluno ${i+1}`;
    r["matricula"] = 1000 + i;

    r["bimestre1Nota1"] = Math.floor(Math.random() * 41); // 0–40
    r["bimestre1Nota2"] = Math.floor(Math.random() * 61); // 0–60
    r["bimestre2Nota1"] = Math.floor(Math.random() * 41);
    r["bimestre2Nota2"] = Math.floor(Math.random() * 61);

    // Se cair em prova final, gera nota final também
    if (r.mediaParcial! < 60 && r.mediaParcial! >= 10) {
        r["notaAvaliacaoFinal"] = Math.floor(Math.random() * 101);
        r.provaFinal; // força cálculo
    }

    diario.push(r);
}

// imprimir
diario.forEach(r => {
    console.log({
        aluno: r["aluno"],
        matricula: r["matricula"],
        mediab1: r.mediab1,
        mediab2: r.mediab2,
        mediaParcial: r.mediaParcial,
        mediaFinal: r["provaFinal"],
        situacao: r["_situacao"]
    });
});
