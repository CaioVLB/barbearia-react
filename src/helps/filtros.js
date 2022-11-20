

export function filtraDados(rd_dados) {
    const barbas_checked = rd_dados.barba.filter((e) => rd_dados.marcados.includes(e.id))
    const cortes_checked = rd_dados.corte.filter((e) => rd_dados.marcados.includes(e.id))
    const sombrancelhas_checked = rd_dados.sombrancelha.filter((e) => rd_dados.marcados.includes(e.id))
    return [...barbas_checked, ...cortes_checked, ...sombrancelhas_checked]
}
