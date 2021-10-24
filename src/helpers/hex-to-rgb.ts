export function hexToRgb(hex: string, opacity = '100%') {
  if (hex) {
    const rgb = [
      Number(`0x${hex[1]}${hex[2]}`) | 0,
      Number(`0x${hex[3]}${hex[4]}`) | 0,
      Number(`0x${hex[5]}${hex[6]}`) | 0,
    ];

    return `rgba(${rgb.join(',')}, ${opacity})`;
  }
}
