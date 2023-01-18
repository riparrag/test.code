export function redondearConXDecimales(numero: number, cantidadDecimales: number = 2): number {
    let decimales: string = '0'.repeat(cantidadDecimales < 2 ? 1 : cantidadDecimales);
    const referencia: string = `1${decimales}`;

    return Math.round((numero + Number.EPSILON) * Number.parseInt(referencia)) / Number.parseInt(referencia)
}

export function esNumero(texto:string) : boolean {
    return !isNaN( Number(texto) );
}