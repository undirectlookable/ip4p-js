const encode = (ipv4: string, port: number): string => {
  const parts = ipv4.split('.');
  const a = parseInt(parts[0], 10);
  const b = parseInt(parts[1], 10);
  const c = parseInt(parts[2], 10);
  const d = parseInt(parts[3], 10);

  const hi16 = ((a << 8) | b).toString(16).padStart(4, '0');
  const lo16 = ((c << 8) | d).toString(16).padStart(4, '0');
  const portHex = port.toString(16).padStart(4, '0');

  return `2001::${portHex}:${hi16}:${lo16}`;
};

const decode = (ip4p: string): {
  address: string;
  port: number;
} => {
  const parts = ip4p.split(':');
  const portHex = parts[2];
  const hi16Hex = parts[3];
  const lo16Hex = parts[4];

  const port = parseInt(portHex, 16);
  const hi16 = parseInt(hi16Hex, 16);
  const lo16 = parseInt(lo16Hex, 16);

  const a = (hi16 >> 8) & 0xFF;
  const b = hi16 & 0xFF;
  const c = (lo16 >> 8) & 0xFF;
  const d = lo16 & 0xFF;

  const ipv4 = `${a}.${b}.${c}.${d}`;

  return {
    address: ipv4,
    port,
  }
};

export default {
  encode,
  decode
}