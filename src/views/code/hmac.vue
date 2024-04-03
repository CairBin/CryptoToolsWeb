<script setup>
import { reactive } from 'vue';
import crypto, { algo } from 'crypto-js';
import {Buffer} from 'buffer';
import { ElMessage } from 'element-plus';
import {sm3} from 'sm-crypto';

const data = reactive({
    form:{
        value:'',
        resultHex:'',
        resultBase64:'',
        secretKey:'',
        code:'encode',
        hash:'md5',
        
    }
})

const hmacSm3 = (value, secret)=>{
    return sm3(value,{key:secret})
}

const hashSelect = (algorithm)=>{
    if(algorithm === "md5")
        return crypto.HmacMD5
    else if(algorithm === 'sha1')
        return crypto.HmacSHA1
    else if(algorithm === 'sha256')
        return crypto.HmacSHA256
    else if(algorithm === 'sha512')
        return crypto.HmacSHA512
    else if(algorithm === 'sha384')
        return crypto.HmacSHA384
    else if(algorithm === 'sm3')
        return hmacSm3
}

const hmacHandler = ()=>{
    if(!data.form.value || !data.form.value){
        console.error('required value and secret')
        ElMessage({
            type:'error',
            message:'必填字段不能为空! (HMAC)'
        })

        return;
    }
    var hashM = hashSelect(data.form.hash)
    const hmac = hashM(data.form.value, data.form.secretKey)
    data.form.resultHex = hmac.toString(crypto.enc.Hex)
    data.form.resultBase64 = hmac.toString(crypto.enc.Base64)
}

</script>

<template>
    <h2>HMAC</h2>
    <el-divider />
    <el-form label-position="top">
        <el-form-item required label="待计算值">
            <el-input class="value-input" v-model="data.form.value" :rows="7" type="textarea" placeholder="待计算字符串"></el-input>
        </el-form-item>
        <el-form-item required label="Hash算法">
            <el-radio-group v-model="data.form.hash">
                <el-radio value="md5">MD5</el-radio>
                <el-radio value="sm3">SM3</el-radio>
                <el-radio value="sha1">SHA1</el-radio>
                <el-radio value="sha256">SHA256</el-radio>
                <el-radio value="sha512">SHA512</el-radio>
                <el-radio value="sha384">SHA384</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item required label="共享密钥">
            <el-input class="value-input" v-model="data.form.secretKey" placeholder="明文共享密钥"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="hmacHandler" style="width:100px;height:35px;">启动</el-button>
        </el-form-item>
        <el-form-item label="计算结果" style="display:inline-block;" v-if="data.form.resultHex">
            <el-row style="width:100%;margin-top:5px;">
                <el-tag type="success">HMAC</el-tag>
                <el-tag type="success" style="margin-left:5px;">{{data.form.hash}}</el-tag>
            </el-row>
            <el-row><div style="color:grey;">Hex:</div></el-row>
            <el-row style="width:100%;margin-top:3px;">
                <el-input type="textarea" v-model="data.form.resultHex" :rows="7" :readonly="true" class="value-input"></el-input>
            </el-row>
            <el-row><div style="color:grey;">Base64:</div></el-row>
            <el-row style="width:100%;margin-top:3px;">
                <el-input type="textarea" v-model="data.form.resultBase64" :rows="7" :readonly="true" class="value-input"></el-input>
            </el-row>
        </el-form-item>
    </el-form>
</template>

<style>
</style>