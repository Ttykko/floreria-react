/**
 * Formatea un número al estándar de moneda Chilena (CLP)
 * Ejemplo: 30000 -> $30.000
 */
export function formatCLP(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0, // En Chile no usamos centavos
  }).format(value);
}
