import cryptoJS from "crypto-js";
import base32Encode from "base32-encode";
import base32Decode from "base32-decode";
import { Buffer } from "buffer";

class CodeHandler{
    static stringToHex(value){
        var buf = new Buffer(value, 'utf-8')
        return buf.toString('hex')
    }

    static hexToString(value){
        var buf = new Buffer(value,'hex')
        return buf.toString('utf-8')
    }

    
}