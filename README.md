# CryptoToolsWeb

## 描述

密码学静态Web工具，实现一些字符串编码和加解密功能。

所有功能均在本地完成，无数据上传到服务器。

## 功能

### 已实现功能

* Hex/Base32/Base64编码解码
* MD5散列运算
* SHA1散列运算
* SHA224/SHA256/SHA384/SHA512散列运算
* SHA3-224/SHA3-256/SHA3-384/SHA3-512散列运算
* HMAC（支持MD5、SM3、SHA1、SHA256、SHA384、SHA512等Hash函数）

### TODO

* CRC循环冗余校验
* Unicode编码
* URL编码
* Punycode
* BLACKE2
* 一些加密算法目前还没想好


## 第三方依赖

主要列举密码学运算所需的依赖库

* [LinusU/base32-decode](https://github.com/LinusU/base32-decode)
* [LinusU/base32-encode](https://github.com/LinusU/base32-encode)
* [brix/crypto-js](https://github.com/brix/crypto-js)
* [JuneAndGreen/sm-crypto](https://github.com/JuneAndGreen/sm-crypto)