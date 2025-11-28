# IP4P

A tool for encoding and decoding [IP4P address format](https://github.com/heiher/natmap?tab=readme-ov-file#ip4p-address) (introduced by [heiher/NATMap](https://github.com/heiher/natmap)）

## Usage

### Installation

```bash
npm install --save-dev ip4p
```

```javascript
import ip4p from 'ip4p';
```

### Encode

```javascript
ip4p.encode('1.1.1.1', 853); // 2001::0355:0101:0101
```

### Decode

```javascript
ip4p.decode('2001::0355:0101:0101'); // {"address": "1.1.1.1", "port": 853}
```

### Resolve from a domain

This package do not provide a DNS lookup function, here is an example based on Nodejs built-in dns module.

```javascript
import dnsPromises from 'node:dns/promises';

const record = await dnsPromises.lookup('ip4p.example.com', {family: 6});
ip4p.resolve(record.address);
```