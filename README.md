# tydids-p2p-tx2

<a href="https://stromdao.de/" target="_blank" title="STROMDAO - Digital Energy Infrastructure"><img src="https://rawcdn.githack.com/energychain/tydids-p2p-http/39ee1b927300efeb6aca81abfe98ca079f6a06be/static/stromdao.png" align="right" height="85px" hspace="30px" vspace="30px"></a>

**[TyDIDs](https://tydids.com) extension for the tx2 package of PM2.io**

[![npm](https://img.shields.io/npm/dt/tydids-p2p-tx2.svg)](https://www.npmjs.com/package/tydids-p2p-tx2)
[![npm](https://img.shields.io/npm/v/tydids-p2p-tx2.svg)](https://www.npmjs.com/package/tydids-p2p-tx2)
[![CO2Offset](https://api.corrently.io/v2.0/ghgmanage/statusimg?host=tydids-p2p-tx2&svg=1)](https://co2offset.io/badge.html?host=tydids-p2p-tx2)
[![Join the chat at https://gitter.im/stromdao/tydids-p2p](https://badges.gitter.im/stromdao/tydids-p2p.svg)](https://gitter.im/stromdao/tydids-p2p?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Imagine a dataset that is available somewhere in the world might be accessed everywhere. How? You just need to know its address!
- Decide who is allowed to see this dataset.
- Forget about protocols, p2p, request-responds, polling for changes.
- Set a value in your dataset with one line of code
- Subscribe to changes with another single line of code

## This is [TyDIDs](https://github.com/energychain/tydids-p2p).

### Quick Intro
Will expose fields/values of a DID presentation as metrics in pm2.

Quick Install:
```
npm install -g tydids-p2p-tx2
pm2 start tydids-tx2 -- -p 0xA22bcEb9BCcEbcDd207eb24F4139abfc6a97EeB3
sleep 20
pm2 show tydids-tx2
...
Code metrics value
┌────────────────────────┬───────────────────────────────────────────────────────────┐
│ Used Heap Size         │ 56.18 MiB                                                 │
│ Heap Usage             │ 70.75 %                                                   │
│ Heap Size              │ 79.41 MiB                                                 │
│ Event Loop Latency p95 │ 15.77 ms                                                  │
│ Event Loop Latency     │ 0.34 ms                                                   │
│ Active handles         │ 9                                                         │
│ Active requests        │ 0                                                         │
│ value                  │ 1647821423539                                             │
│ iss                    │ did:ethr:6226:0xA22bcEb9BCcEbcDd207eb24F4139abfc6a97EeB3  │
│ _revision              │ 0x3bcFE2Ce88E0051659cb2D74C50Fbb9B1068b981                │
│ _address               │ 0xA22bcEb9BCcEbcDd207eb24F4139abfc6a97EeB3                │
│ iat                    │ 1647821424                                                │
└────────────────────────┴───────────────────────────────────────────────────────────┘
...
```
